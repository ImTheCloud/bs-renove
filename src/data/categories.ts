/**
 * Catégories des comparaisons avant/après, par type de pièce — pas par
 * métier (voir src/data/services.ts pour les métiers). Sert à regrouper
 * les avant/après de tous les chantiers sur la page Réalisations, pour
 * qu'on puisse voir « toutes les salles de bain » d'un coup par exemple.
 *
 * Liste volontairement ouverte : on ajoute une catégorie ici dès qu'un
 * avant/après ne rentre dans aucune des existantes.
 */
import type { Langue } from '~/i18n';

export interface Categorie {
  slug: string;
  nom: Record<Langue, string>;
}

export const categories: Categorie[] = [
  { slug: 'salle-de-bain', nom: { fr: 'Salle de bain', nl: 'Badkamer' } },
  { slug: 'douche', nom: { fr: 'Douche', nl: 'Douche' } },
  { slug: 'cuisine', nom: { fr: 'Cuisine', nl: 'Keuken' } },
  { slug: 'sejour', nom: { fr: 'Séjour', nl: 'Woonkamer' } },
  { slug: 'chambre', nom: { fr: 'Chambre', nl: 'Slaapkamer' } },
  { slug: 'couloir', nom: { fr: 'Couloir', nl: 'Gang' } },
  { slug: 'toilette', nom: { fr: 'Toilette', nl: 'Toilet' } },
  { slug: 'escalier', nom: { fr: 'Escalier', nl: 'Trap' } },
  { slug: 'toiture', nom: { fr: 'Toiture', nl: 'Dak' } },
  { slug: 'auvent', nom: { fr: 'Auvent', nl: 'Luifel' } },
  { slug: 'facade', nom: { fr: 'Façade', nl: 'Gevel' } },
  { slug: 'exterieur', nom: { fr: 'Terrasse', nl: 'Terras' } },
];

export function nomCategorie(slug: string, langue: Langue): string | undefined {
  return categories.find((c) => c.slug === slug)?.nom[langue];
}
