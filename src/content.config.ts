import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from './data/categories';
import { services } from './data/services';

/** Un texte qui doit exister dans les deux langues. */
const bilingue = z.object({
  fr: z.string(),
  nl: z.string(),
});

const projets = defineCollection({
  // Pas de sous-dossiers : l'adresse d'un projet n'a qu'un seul segment.
  loader: glob({ pattern: '*.yaml', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      titre: bilingue,
      /** Seulement la commune : jamais la rue ni le numéro du client.
       *  Bilingue : beaucoup de communes belges ont deux noms officiels. */
      commune: bilingue,
      /** Doit correspondre à un slug de src/data/services.ts : le build échoue sinon. */
      service: z.enum(services.map((s) => s.slug) as [string, ...string[]]),
      dureeSemaines: z.number().optional(),
      recit: z.object({
        fr: z.object({ depart: z.string(), travaux: z.string(), resultat: z.string() }),
        nl: z.object({ depart: z.string(), travaux: z.string(), resultat: z.string() }),
      }),
      couverture: image().optional(),
      couvertureAlt: bilingue,
      /**
       * Une paire par comparaison avant/après. La catégorie (type de pièce,
       * pas métier — src/data/categories.ts) sert à les regrouper toutes
       * ensemble sur la page Réalisations, peu importe le chantier d'origine.
       */
      avantApres: z
        .array(
          z.object({
            avant: image().optional(),
            apres: image().optional(),
            legende: bilingue,
            categorie: z.enum(categories.map((c) => c.slug) as [string, ...string[]]),
          }),
        )
        .default([]),
      /** Photos de détails et de chantier, pour la galerie. */
      galerie: z
        .array(
          z.object({
            image: image().optional(),
            alt: bilingue,
            type: z.enum(['detail', 'chantier']),
          }),
        )
        .default([]),
      ordre: z.number(),
      misEnAvant: z.boolean().default(false),
    }),
});

export const collections = { projets };
