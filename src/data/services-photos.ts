/**
 * Photos d'exemple pour les services, indépendantes des projets (pas besoin
 * de connaître la commune). Un service sans entrée ici affiche encore le
 * bloc « photo à venir ».
 *
 * On ajoute une ligne ici à chaque nouvelle photo validée pour un service.
 */
import type { ImageMetadata } from 'astro';
import exempleSallesDeBain from '~/assets/services/salles-de-bain/exemple-1.jpg';
import exempleCarrelage from '~/assets/services/carrelage/exemple-1.jpg';
import exempleRenovationComplete from '~/assets/services/renovation-complete/exemple-1.jpg';

export const photosServices: Partial<Record<string, ImageMetadata>> = {
  'salles-de-bain': exempleSallesDeBain,
  carrelage: exempleCarrelage,
  'renovation-complete': exempleRenovationComplete,
};
