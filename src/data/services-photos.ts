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
import exempleRenovationComplete2 from '~/assets/services/renovation-complete/exemple-2.jpg';
import exempleRenovationComplete3 from '~/assets/services/renovation-complete/exemple-3.jpg';
import exempleToiture1 from '~/assets/services/toiture/exemple-1.jpg';
import exempleToiture2 from '~/assets/services/toiture/exemple-2.jpg';
import exempleElectricite from '~/assets/services/electricite/exemple-1.jpg';
import woluweSejourFini from '~/assets/projets/renovation-woluwe-saint-pierre/apres-2.jpg';
import woluweDoubleVasque from '~/assets/projets/renovation-woluwe-saint-pierre/detail-1.jpg';
import woluweDoucheFinie from '~/assets/projets/renovation-woluwe-saint-pierre/apres-1.jpg';
import woluweCuisineEnsemble from '~/assets/projets/renovation-woluwe-saint-pierre/detail-3.jpg';
import woluweAuventFini from '~/assets/projets/renovation-woluwe-saint-pierre/apres-3.jpg';
import woluweGainesElec from '~/assets/projets/renovation-woluwe-saint-pierre/chantier-3.jpg';

export const photosServices: Partial<Record<string, ImageMetadata[]>> = {
  'renovation-complete': [exempleRenovationComplete, woluweSejourFini, exempleRenovationComplete2, exempleRenovationComplete3],
  'salles-de-bain': [exempleSallesDeBain, woluweDoucheFinie, woluweDoubleVasque],
  cuisines: [woluweCuisineEnsemble],
  carrelage: [exempleCarrelage1, exempleCarrelage2, exempleCarrelage3, exempleCarrelage4],
  toiture: [woluweAuventFini, exempleToiture1, exempleToiture2],
  electricite: [exempleElectricite, woluweGainesElec],
};

/**
 * Un service sans aucune photo n'apparaît nulle part sur le site public
 * (même logique que les projets sans couverture) : mieux vaut ne pas montrer
 * un service tant qu'on n'a pas de quoi l'illustrer, plutôt qu'un bloc
 * « photo à venir ». Le service reste dans src/data/services.ts et
 * réapparaît automatiquement dès qu'une photo est ajoutée ci-dessus.
 */
export function aUnePhoto(slug: string): boolean {
  return (photosServices[slug]?.length ?? 0) > 0;
}
