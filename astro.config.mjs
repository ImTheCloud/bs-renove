// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-BE', nl: 'nl-BE' },
      },
    }),
  ],
});
