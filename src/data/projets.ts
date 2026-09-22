import { getCollection, type CollectionEntry } from 'astro:content';
import { services } from './services';
import type { Langue } from '~/i18n';

export type Projet = CollectionEntry<'projets'>;

/**
 * Tous les projets publiables, dans l'ordre choisi dans les fichiers.
 *
 * Un projet est publiable dès qu'il a une vraie photo de couverture. En
 * attendant, il reste dans `src/content/projets/` (rien n'est perdu) mais
 * n'apparaît nulle part sur le site public : mieux vaut ne rien montrer
 * qu'une page presque vide sur laquelle on peut tomber en cliquant.
 * Il suffit d'ajouter une couverture pour qu'il apparaisse automatiquement.
 */
export async function listerProjets(): Promise<Projet[]> {
  const projets = await getCollection('projets');
  return projets
    .filter((projet) => projet.data.couverture !== undefined)
    .sort((a, b) => a.data.ordre - b.data.ordre);
}

/** Le projet mis en avant sur l'accueil. À défaut, le premier de la liste. */
export async function projetMisEnAvant(): Promise<Projet | undefined> {
  const projets = await listerProjets();
  return projets.find((projet) => projet.data.misEnAvant) ?? projets[0];
}

/** Les autres projets, pour la liste « Autres projets ». */
export async function autresProjets(sauf: string, combien = 3): Promise<Projet[]> {
  const projets = await listerProjets();
  return projets.filter((projet) => projet.id !== sauf).slice(0, combien);
}

/** Le nom lisible du service lié à un projet. */
export function nomService(slug: string, langue: Langue): string | undefined {
  return services.find((service) => service.slug === slug)?.nom[langue];
}

/** Les photos de la galerie, détails d'abord puis chantier. */
export function galerieOrdonnee(projet: Projet) {
  const ordre = { detail: 0, chantier: 1 } as const;
  return [...projet.data.galerie].sort((a, b) => ordre[a.type] - ordre[b.type]);
}
