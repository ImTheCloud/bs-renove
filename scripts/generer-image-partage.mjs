/**
 * Fabrique l'image affichée quand on partage le site sur WhatsApp,
 * Facebook ou LinkedIn (1200 × 630), en français et en néerlandais :
 * le titre du site à gauche, l'avant/après de la salle de bain de
 * Watermael-Boitsfort à droite (la vitrine de l'accueil).
 *
 * Rendue par le navigateur (Playwright) pour avoir exactement les polices
 * du site ; les photos passent d'abord par sharp (recadrées, sans métadonnées).
 *
 * Usage : node scripts/generer-image-partage.mjs
 * Sortie : src/assets/partage.jpg (FR) et src/assets/partage-nl.jpg (NL).
 */
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const enBase64 = (chemin, type) => `data:${type};base64,${readFileSync(chemin).toString('base64')}`;
const police = (chemin) => enBase64(`node_modules/${chemin}`, 'font/woff2');

// Photos recadrées au format du cadre (moitié gauche = avant, moitié droite = après).
const photo = async (nom) =>
  `data:image/jpeg;base64,${(
    await sharp(`src/assets/projets/salle-de-bain-watermael-boitsfort/${nom}.jpg`).rotate().resize(540, 560, { fit: 'cover' }).jpeg({ quality: 88 }).toBuffer()
  ).toString('base64')}`;
const avant = await photo('avant-1');
const apres = await photo('apres-1');
const logo = enBase64('src/assets/marque/icone-logo-serre.png', 'image/png');

const textes = {
  fr: { l1: 'Votre maison,', l2: 'refaite', l3: 'de A à Z.', pied: 'Devis gratuit · 0485 38 43 90', avant: 'Avant', apres: 'Après', sortie: 'src/assets/partage.jpg' },
  nl: { l1: 'Uw woning,', l2: 'vernieuwd', l3: 'van A tot Z.', pied: 'Gratis offerte · 0485 38 43 90', avant: 'Voor', apres: 'Na', sortie: 'src/assets/partage-nl.jpg' },
};

const page = (t) => `<!doctype html><html><head><style>
  @font-face { font-family: 'Bricolage'; src: url(${police('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')}); font-weight: 100 900; }
  @font-face { font-family: 'Figtree'; src: url(${police('@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2')}); font-weight: 100 900; }
  @font-face { font-family: 'Instrument'; src: url(${police('@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2')}); font-style: italic; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; display: flex; align-items: center; gap: 44px; padding: 0 40px 0 64px; background: #f5f2ec; color: #0f1626; font-family: 'Figtree'; }
  .texte { flex: 1; display: flex; flex-direction: column; height: 550px; }
  .marque { display: flex; align-items: center; gap: 14px; font: 800 40px/1 'Bricolage'; letter-spacing: -0.02em; }
  .marque img { height: 54px; }
  .marque em { font: italic 400 46px/1 'Instrument'; color: #0066b4; }
  h1 { margin-top: auto; font: 800 80px/0.98 'Bricolage'; letter-spacing: -0.035em; }
  h1 .serif { display: block; font: italic 400 96px/1 'Instrument'; letter-spacing: -0.01em; color: #0066b4; }
  h1 .marqueur { background: linear-gradient(transparent 52%, #ffd447 52%, #ffd447 94%, transparent 94%); padding: 0 6px; margin-left: -6px; }
  .pied { margin-top: auto; font: 650 28px/1.2 'Figtree'; }
  .site { margin-top: 8px; font: 500 22px/1 'Figtree'; color: #5d6068; }
  .cadre { position: relative; width: 540px; height: 560px; border-radius: 30px; overflow: hidden; box-shadow: 0 18px 50px -12px rgba(15, 22, 38, 0.35); background: url(${apres}) center / cover; }
  .cadre .avant { position: absolute; inset: 0; background: url(${avant}) center / cover; clip-path: inset(0 50% 0 0); }
  .trait { position: absolute; top: 0; bottom: 0; left: 50%; width: 4px; margin-left: -2px; background: #fff; }
  .poignee { position: absolute; top: 50%; left: 50%; width: 76px; height: 76px; margin: -38px 0 0 -38px; border-radius: 50%; background: #ffd447; border: 4px solid #fff; display: grid; place-items: center; }
  .etiquette { position: absolute; top: 22px; padding: 9px 16px; border-radius: 999px; background: rgba(245, 242, 236, 0.94); font: 750 16px/1 'Figtree'; letter-spacing: 0.12em; text-transform: uppercase; }
</style></head><body>
  <div class="texte">
    <div class="marque"><img src="${logo}" alt="">BS <em>Renove</em></div>
    <h1>${t.l1}<span class="serif">${t.l2}</span><span class="marqueur">${t.l3}</span></h1>
    <p class="pied">${t.pied}</p>
    <p class="site">bsrenovesrl.com</p>
  </div>
  <div class="cadre">
    <div class="avant"></div>
    <div class="trait"></div>
    <div class="poignee"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0f1626" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg></div>
    <span class="etiquette" style="left: 22px">${t.avant}</span>
    <span class="etiquette" style="right: 22px">${t.apres}</span>
  </div>
</body></html>`;

const navigateur = await chromium.launch();
const onglet = await navigateur.newPage({ viewport: { width: 1200, height: 630 } });
for (const [langue, t] of Object.entries(textes)) {
  await onglet.setContent(page(t));
  await onglet.evaluate(() => document.fonts.ready);
  const png = await onglet.screenshot({ type: 'png' });
  // Repassé par sharp : JPEG léger (WhatsApp préfère moins de 300 Ko), aucune métadonnée.
  await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toFile(t.sortie);
  console.log(`image de partage (${langue}) →`, t.sortie);
}
await navigateur.close();
