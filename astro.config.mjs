// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { LANGUES, memePageDansLaLangue } from './src/i18n/index.ts';

// L'adresse définitive n'est pas connue (domaine acheté chez Wix, à brancher plus tard).
// Valeur provisoire : voir docs/contenu-manquant.md.
const SITE = 'https://bs-renove.pages.dev';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'nl'],
    routing: {
      // Le français n'a pas de préfixe : « / », pas « /fr/ ».
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Les pages de remerciement sont en noindex : elles n'ont rien à faire ici.
      // Pages de remerciement (noindex) et 404 : hors sitemap.
      filter: (page) =>
        !page.includes('/merci/') && !page.includes('/bedankt/') && !page.includes('/404/'),

      /*
        L'option i18n toute faite ne sait relier deux pages que si leur adresse
        est identique d'une langue à l'autre. Or les nôtres sont traduites
        (/services/ ↔ /nl/diensten/). On construit donc les correspondances
        nous-mêmes, à partir de la même table que le sélecteur de langue.
      */
      serialize(element) {
        const chemin = new URL(element.url).pathname;
        element.links = LANGUES.map((code) => ({
          lang: code === 'fr' ? 'fr-BE' : 'nl-BE',
          url: new URL(memePageDansLaLangue(chemin, code), SITE).href,
        }));
        element.links.push({
          lang: 'x-default',
          url: new URL(memePageDansLaLangue(chemin, 'fr'), SITE).href,
        });
        return element;
      },
    }),
  ],
});
