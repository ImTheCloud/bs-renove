/**
 * Importe une sélection de photos dans src/assets/projets/<slug>/, en suivant
 * la convention du brief : cover.jpg, avant-N.jpg/apres-N.jpg, detail-N.jpg,
 * chantier-N.jpg. Toute métadonnée est effacée au passage.
 *
 * Attend un fichier JSON de la forme :
 *   { "<slug>": { couverture: {chemin}, paires: [{avant:{chemin}, apres:{chemin}}],
 *                 galerie: [{chemin, etat}] }, ... }
 * (etat "pendant" → chantier-N.jpg, tout le reste → detail-N.jpg)
 *
 * Usage : node scripts/importer-selection.mjs selection.json . rapport.json
 *
 * Fait partie du pipeline de tri des photos reçues du client (voir
 * docs/contenu-manquant.md § « Photos »). Toujours vérifier à l'œil le
 * résultat avant de l'utiliser : aucun élément identifiant (numéro de
 * maison, plaque, personne) ne doit apparaître sur une photo publiée.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const selection = JSON.parse(await (await import('node:fs/promises')).readFile(process.argv[2], 'utf8'));
const RACINE_PROJET = process.argv[3]; // .../bs-renove

async function traiter(source, cible) {
  const sortie = await sharp(source, { failOn: 'none' })
    .rotate()
    .resize({ width: 2400, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await writeFile(cible, sortie);
  const verif = await sharp(sortie).metadata();
  return !verif.exif;
}

const rapport = [];

for (const [slug, choix] of Object.entries(selection)) {
  const dossier = join(RACINE_PROJET, 'src/assets/projets', slug);
  await mkdir(dossier, { recursive: true });
  const fichiers = { slug, cover: null, paires: [], galerie: [] };

  if (choix.couverture) {
    const propre = await traiter(choix.couverture.chemin, join(dossier, 'cover.jpg'));
    fichiers.cover = { fichier: 'cover.jpg', propre, piece: choix.couverture.piece };
  }

  let n = 1;
  for (const paire of choix.paires) {
    const propreAvant = await traiter(paire.avant, join(dossier, `avant-${n}.jpg`));
    const propreApres = await traiter(paire.apres, join(dossier, `apres-${n}.jpg`));
    fichiers.paires.push({ n, propreAvant, propreApres, note: paire.note });
    n++;
  }

  let d = 1, c = 1;
  for (const photo of choix.galerie) {
    const estChantier = photo.etat === 'pendant';
    const nom = estChantier ? `chantier-${c++}.jpg` : `detail-${d++}.jpg`;
    const propre = await traiter(photo.chemin, join(dossier, nom));
    fichiers.galerie.push({ fichier: nom, propre, piece: photo.piece, etat: photo.etat });
  }

  rapport.push(fichiers);
  console.log(
    slug + ' → ' +
    (fichiers.cover ? '1 couverture, ' : '') +
    fichiers.paires.length + ' paire(s), ' +
    fichiers.galerie.length + ' photo(s) de galerie'
  );
}

const toutPropre = rapport.every((f) =>
  (f.cover?.propre ?? true) &&
  f.paires.every((p) => p.propreAvant && p.propreApres) &&
  f.galerie.every((g) => g.propre)
);
console.log('\nToutes les métadonnées effacées : ' + (toutPropre ? '✅ oui' : '❌ NON — vérifier'));

await writeFile(process.argv[4], JSON.stringify(rapport, null, 1));
