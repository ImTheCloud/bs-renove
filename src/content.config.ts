import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/categories';

/** Un texte qui doit exister dans les deux langues. */
const bilingue = z.object({
  fr: z.string(),
  nl: z.string(),
});

/**
 * Un fichier par chantier. Il ne sert qu'à ranger les avant/après et à donner
 * leur commune : chaque avant/après est ensuite affiché seul (src/data/projets.ts).
 */
const projets = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      /**
       * Seulement la commune, jamais la rue ni le numéro. Bilingue : beaucoup de
       * communes belges ont deux noms. Facultative : sans commune, le site affiche « Belgique ».
       */
      commune: bilingue.optional(),
      /** Ordre d'affichage sur la page Réalisations (le plus petit d'abord). */
      ordre: z.number(),
      avantApres: z.array(
        z.object({
          avant: image(),
          apres: image(),
          legende: bilingue,
          /** Type de pièce (src/data/categories.ts) : sert aux filtres et aux métiers. */
          categorie: z.enum(categories.map((c) => c.slug) as [string, ...string[]]),
          /** Où démarre la poignée du curseur, en % (plus petit : on voit plus l'« après »). */
          depart: z.number().min(0).max(100).default(50),
          /** Cadrage d'une photo recadrée (CSS object-position), ex. « 50% 20% » pour garder le haut. */
          cadrageAvant: z.string().default('50% 50%'),
          cadrageApres: z.string().default('50% 50%'),
        }),
      ),
    }),
});

export const collections = { projets };
