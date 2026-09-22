/**
 * Photos d'exemple pour les services, peu importe de quel projet elles
 * viennent. Un service sans entrée ici affiche encore le bloc
 * « photo à venir ». On ajoute une ou plusieurs photos ici à chaque fois
 * qu'on a un vrai exemple validé pour un service, en réutilisant si besoin
 * des photos déjà importées pour un projet (pas de copie inutile).
 */
import type { ImageMetadata } from 'astro';
import exempleSallesDeBain from '~/assets/services/salles-de-bain/exemple-1.jpg';
import exempleCarrelage1 from '~/assets/services/carrelage/exemple-1.jpg';
import exempleCarrelage2 from '~/assets/services/carrelage/exemple-2.jpg';
import exempleCarrelage3 from '~/assets/services/carrelage/exemple-3.jpg';
import exempleCarrelage4 from '~/assets/services/carrelage/exemple-4.jpg';
import exempleRenovationComplete from '~/assets/services/renovation-complete/exemple-1.jpg';
import exempleElectricite from '~/assets/services/electricite/exemple-1.jpg';
import woluweCouverture from '~/assets/projets/renovation-woluwe-saint-pierre/cover.jpg';
import woluweDoubleVasque from '~/assets/projets/renovation-woluwe-saint-pierre/detail-1.jpg';
import woluweDoucheFinie from '~/assets/projets/renovation-woluwe-saint-pierre/apres-1.jpg';
import woluweCuisineEnsemble from '~/assets/projets/renovation-woluwe-saint-pierre/detail-3.jpg';
import woluweCuisineDetail from '~/assets/projets/renovation-woluwe-saint-pierre/detail-4.jpg';
import woluweAuventFini from '~/assets/projets/renovation-woluwe-saint-pierre/apres-3.jpg';
import woluweAuventLarge from '~/assets/projets/renovation-woluwe-saint-pierre/detail-13.jpg';
import woluweGainesElec from '~/assets/projets/renovation-woluwe-saint-pierre/chantier-3.jpg';

export const photosServices: Partial<Record<string, ImageMetadata[]>> = {
  'renovation-complete': [exempleRenovationComplete, woluweCouverture],
  'salles-de-bain': [exempleSallesDeBain, woluweDoucheFinie, woluweDoubleVasque],
  cuisines: [woluweCuisineEnsemble, woluweCuisineDetail],
  carrelage: [exempleCarrelage1, exempleCarrelage2, exempleCarrelage3, exempleCarrelage4],
  toiture: [woluweAuventFini, woluweAuventLarge],
  electricite: [exempleElectricite, woluweGainesElec],
};
