// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { LANGUES, memePageDansLaLangue } from './src/i18n/index.ts';

// Le domaine de l'entreprise (acheté chez Wix).
const SITE = 'https://bsrenovesrl.com';

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
      // La page 404 est en noindex : elle n'a rien à faire dans le sitemap.
      filter: (page) => !page.includes('/404/'),

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
