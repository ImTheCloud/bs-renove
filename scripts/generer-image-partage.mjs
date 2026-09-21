/**
 * Fabrique l'image affichée quand on partage le site sur WhatsApp,
 * Facebook ou LinkedIn (1200 × 630).
 *
 * Provisoire : elle n'utilise que le logo texte et les couleurs du site,
 * aucune photo. À remplacer par une vraie photo de chantier dès qu'on en a
 * (voir docs/contenu-manquant.md).
 *
 * Usage : node scripts/generer-image-partage.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const INK = '#1d2a4a';
const ACCENT = '#2f5bd3';
const GRIS = '#5f6573';

// Les polices du site, encodées dans le SVG pour que le rendu soit identique.
const police = (chemin) =>
  `data:font/woff2;base64,${readFileSync(chemin).toString('base64')}`;

const titre = police('node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2');
const texte = police('node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face { font-family: 'T'; src: url('${titre}') format('woff2'); font-weight: 100 900; }
      @font-face { font-family: 'X'; src: url('${texte}') format('woff2'); font-weight: 100 900; }
      .marque { font-family: 'T'; font-size: 58px; font-weight: 800; letter-spacing: -0.02em; fill: ${INK}; }
      .marque-2 { font-weight: 600; fill: ${GRIS}; }
      .tagline { font-family: 'X'; font-size: 24px; font-weight: 500; fill: ${GRIS}; }
      .titre { font-family: 'T'; font-size: 76px; font-weight: 800; letter-spacing: -0.035em; fill: ${INK}; }
      .accent { fill: ${ACCENT}; }
      .pied { font-family: 'X'; font-size: 26px; font-weight: 600; fill: ${GRIS}; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>

  <text x="80" y="130" class="marque">BS <tspan class="marque-2">Renove</tspan></text>
  <text x="80" y="170" class="tagline">Entreprise générale</text>

  <text x="80" y="330" class="titre">Votre maison,</text>
  <text x="80" y="415" class="titre">entre de bonnes <tspan class="accent">mains.</tspan></text>

  <text x="80" y="540" class="pied">Denderleeuw · partout en Belgique · 0485 38 43 90</text>
</svg>`;

const sortie = 'src/assets/partage.png';
await sharp(Buffer.from(svg)).png().toFile(sortie);
console.log('image de partage écrite →', sortie);
