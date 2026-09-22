/**
 * Parcourt un dossier (par défaut ~/Downloads) et liste toutes les photos
 * qui portent un tag Finder (couleur ou nom), avec le tag et le chemin.
 *
 * Les tags Finder sont stockés dans l'attribut étendu
 * com.apple.metadata:_kMDItemUserTags, dans un format plist binaire abrégé
 * (sans le bloc final habituel : plutil ne sait pas le lire). Le décodeur
 * est dans decoder-tags-finder.mjs, à côté de ce fichier.
 *
 * Usage :
 *   node scripts/scanner-tags-finder.mjs                    # ~/Downloads
 *   node scripts/scanner-tags-finder.mjs "~/Desktop/photos"  # autre dossier
 *
 * Écrit un inventaire complet dans le dossier de sortie donné (ou affiche
 * juste le résumé si aucun n'est donné).
 */
import { execSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { decoderTags } from './decoder-tags-finder.mjs';

const RACINE = (process.argv[2] || '~/Downloads').replace(/^~/, process.env.HOME);
const SORTIE = process.argv[3]; // optionnel : chemin d'un .json à écrire

const resultats = [];

function lister(dossier) {
  for (const entree of readdirSync(dossier, { withFileTypes: true })) {
    const complet = join(dossier, entree.name);
    if (entree.isDirectory()) { lister(complet); continue; }
    if (!/\.(jpe?g|png|heic|heif)$/i.test(entree.name)) continue;
    try {
      const brut = execSync(`xattr -p com.apple.metadata:_kMDItemUserTags ${JSON.stringify(complet)} 2>/dev/null`);
      if (!brut.length) continue;
      const tags = decoderTags(brut);
      if (tags.length) resultats.push({ chemin: complet, dossier: relative(RACINE, dossier), tags });
    } catch {
      // Pas de tag sur ce fichier, ou lecture impossible : on l'ignore.
    }
  }
}
lister(RACINE);

const parTag = new Map();
for (const r of resultats) for (const t of r.tags) {
  if (!parTag.has(t)) parTag.set(t, []);
  parTag.get(t).push(r.chemin);
}

console.log(`${resultats.length} fichier(s) tagué(s) dans ${RACINE}\n`);
console.log('Répartition par tag :');
[...parTag.entries()].sort((a, b) => b[1].length - a[1].length).forEach(([tag, fichiers]) => {
  console.log('  ' + String(fichiers.length).padStart(4) + '  ' + tag);
});

if (SORTIE) {
  writeFileSync(SORTIE, JSON.stringify(resultats, null, 1));
  console.log(`\nÉcrit → ${SORTIE}`);
}
