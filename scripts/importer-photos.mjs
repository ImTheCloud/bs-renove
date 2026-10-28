/**
 * Importe des photos de chantier dans le projet, en effaçant leurs métadonnées.
 *
 * Pourquoi : une photo prise au téléphone contient la position GPS de l'endroit
 * où elle a été prise, c'est-à-dire la maison du client. Ce script la supprime
 * AVANT que la photo n'entre dans le dépôt Git.
 *
 * Usage :
 *   node scripts/importer-photos.mjs <dossier-source> <slug-du-projet>
 *
 * Exemple :
 *   node scripts/importer-photos.mjs ~/Desktop/knokke salle-de-bain-knokke
 *
 * Les photos arrivent dans src/assets/projets/<slug>/ , redimensionnées si besoin.
 */
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const LARGEUR_MAX = 2400; // au-delà, c'est du poids pour rien
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.heic', '.webp', '.tif', '.tiff']);

/**
 * Dit si un bloc EXIF contient une position GPS.
 * L'EXIF ne stocke pas le mot « GPS » : il utilise l'étiquette 0x8825,
 * qui pointe vers le bloc des coordonnées. On lit donc l'en-tête TIFF à la main.
 */
function contientGps(exif) {
  if (!exif || exif.length < 16) return false;
  try {
    // Le bloc commence parfois par « Exif\0\0 », le TIFF démarre juste après.
    const debut = exif.subarray(0, 6).toString('latin1') === 'Exif\0\0' ? 6 : 0;
    const ordre = exif.subarray(debut, debut + 2).toString('latin1');
    if (ordre !== 'II' && ordre !== 'MM') return false;
    const petitBoutiste = ordre === 'II';

    const lire16 = (p) => (petitBoutiste ? exif.readUInt16LE(p) : exif.readUInt16BE(p));
    const lire32 = (p) => (petitBoutiste ? exif.readUInt32LE(p) : exif.readUInt32BE(p));

    if (lire16(debut + 2) !== 42) return false;

    const positionIfd = debut + lire32(debut + 4);
    if (positionIfd + 2 > exif.length) return false;

    const nombre = lire16(positionIfd);
    for (let i = 0; i < nombre; i++) {
      const entree = positionIfd + 2 + i * 12;
      if (entree + 12 > exif.length) break;
      if (lire16(entree) === 0x8825) return true; // étiquette du bloc GPS
    }
    return false;
  } catch {
    return false; // en cas de doute, on ne prétend rien
  }
}

const [, , dossierSource, slug] = process.argv;

if (!dossierSource || !slug) {
  console.error('Usage : node scripts/importer-photos.mjs <dossier-source> <slug-du-projet>');
  process.exit(1);
}

/** Enlève les accents et les espaces pour un nom de fichier propre. */
function nomPropre(nom) {
  return nom
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const destination = join('src', 'assets', 'projets', slug);
await mkdir(destination, { recursive: true });

const fichiers = (await readdir(dossierSource))
  .filter((f) => EXTENSIONS.has(extname(f).toLowerCase()))
  .sort();

if (fichiers.length === 0) {
  console.error(`Aucune photo trouvée dans ${dossierSource}`);
  process.exit(1);
}

console.log(`\n${fichiers.length} photo(s) à traiter → ${destination}\n`);

let avecGps = 0;
const importees = [];

for (const fichier of fichiers) {
  const source = join(dossierSource, fichier);
  const image = sharp(source, { failOn: 'none' });
  const infos = await image.metadata();

  // On regarde ce qu'il y avait avant, pour pouvoir le dire.
  const avaitExif = Boolean(infos.exif);
  const avaitGps = avaitExif && contientGps(infos.exif);
  if (avaitGps) avecGps++;

  const cible = `${nomPropre(basename(fichier, extname(fichier)))}.jpg`;

  // sharp n'écrit aucune métadonnée sauf si on le lui demande : c'est ce qu'on veut.
  const sortie = await image
    .rotate() // applique l'orientation avant de jeter l'EXIF, sinon la photo est couchée
    .resize({ width: LARGEUR_MAX, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  await writeFile(join(destination, cible), sortie);

  // Contrôle : la photo écrite ne doit plus rien contenir.
  const apres = await sharp(sortie).metadata();
  const propre = !apres.exif;

  importees.push(cible);
  console.log(
    `  ${propre ? '✓' : '✗'} ${fichier} → ${cible}` +
      `  (${infos.width}×${infos.height}` +
      `${avaitGps ? ', GPS effacé' : avaitExif ? ', métadonnées effacées' : ''})`,
  );

  if (!propre) {
    console.error(`     ⚠ métadonnées toujours présentes dans ${cible} — à ne pas committer`);
    process.exitCode = 1;
  }
}

console.log(`\n${importees.length} photo(s) importée(s).`);
if (avecGps > 0) {
  console.log(`${avecGps} contenaient la position GPS. Elle a été supprimée.`);
} else {
  console.log('Aucune ne contenait de position GPS.');
}

console.log(`\nÀ renommer selon la convention du brief, puis à référencer dans`);
console.log(`src/content/projets/${slug}.yaml :`);
console.log(`  cover.jpg · avant-1.jpg · apres-1.jpg · detail-1.jpg · chantier-1.jpg\n`);
