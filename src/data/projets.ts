/**
 * Les réalisations : uniquement des avant/après indépendants.
 *
 * Chaque fichier de `src/content/projets/` range les paires d'un chantier et
 * donne leur commune ; chaque paire est ensuite affichée seule, avec sa pièce.
 * Une paire est désignée par « <chantier>/<nom de la photo après> ».
 */
import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import gainesElectriques from '~/assets/projets/renovation-woluwe-saint-pierre/chantier-3.jpg';
import type { Langue } from '~/i18n';

export interface Paire {
  /** Identifiant stable : `<chantier>/<nom de la photo après>`, ex. `extension-maison/apres-1`. */
  id: string;
  avant: ImageMetadata;
  apres: ImageMetadata;
  legende: Record<Langue, string>;
  categorie: string;
  /** La commune, ou « Belgique » tant qu'elle n'est pas confirmée. */
  commune: Record<Langue, string>;
  /** Une des deux photos est horizontale : la comparaison passe en 4/3 pour ne pas la couper. */
  paysage: boolean;
  /** Format du cadre, prêt pour `aspect-ratio`. */
  ratio: string;
  /** Position de départ de la poignée du curseur, en %. */
  depart: number;
  /** Cadrage (object-position) de chaque photo. */
  cadrageAvant: string;
  cadrageApres: string;
}

const BELGIQUE = { fr: 'Belgique', nl: 'België' };

/** Le nom d'origine d'une image importée (« apres-1 ») : tout ce qui précède le premier point. */
const nomFichier = (image: ImageMetadata) => image.src.split('/').pop()!.split('.')[0];

/** Toutes les paires, dans l'ordre des chantiers. */
export async function toutesLesPaires(): Promise<Paire[]> {
  const projets = (await getCollection('projets')).sort((a, b) => a.data.ordre - b.data.ordre);
  return projets.flatMap((projet) => {
    const commune = projet.data.commune.fr.startsWith('[') ? BELGIQUE : projet.data.commune;
    return projet.data.avantApres.map((paire) => {
      const paysage = paire.avant.width > paire.avant.height || paire.apres.width > paire.apres.height;
      return {
        ...paire,
        id: `${projet.id}/${nomFichier(paire.apres)}`,
        commune,
        paysage,
        ratio: paysage ? '4 / 3' : '3 / 4',
      };
    });
  });
}

const trouver = (paires: Paire[], id: string) => paires.find((paire) => paire.id === id);

/** La comparaison en grand sur l'accueil, pilotée par le défilement. */
const ID_VITRINE = 'salle-de-bain-watermael-boitsfort/apres-1';

/** La bande « réalisations » de l'accueil, dans cet ordre. */
const IDS_ACCUEIL = [
  'extension-maison/apres-1',
  'renovation-woluwe-saint-pierre/detail-1',
  'renovation-interieure-ostende/apres-1',
  'renovation-woluwe-saint-pierre/chantier-26',
  'renovation-woluwe-saint-pierre/detail-3',
  'toiture-woluwe-saint-pierre/detail-1',
  'renovation-woluwe-saint-pierre/detail-5',
];

export async function paireVitrine(): Promise<Paire | undefined> {
  const paires = await toutesLesPaires();
  return trouver(paires, ID_VITRINE) ?? paires[0];
}

export async function pairesAccueil(): Promise<Paire[]> {
  const paires = await toutesLesPaires();
  return IDS_ACCUEIL.map((id) => trouver(paires, id)).filter((paire): paire is Paire => paire !== undefined);
}

/** Quels types de pièce illustrent chaque métier (page Services). */
const CATEGORIES_PAR_SERVICE: Record<string, string[]> = {
  'renovation-complete': ['maison'],
  'salles-de-bain': ['salle-de-bain', 'douche', 'toilette'],
  cuisines: ['cuisine'],
  carrelage: ['cave'],
  terrasses: ['exterieur', 'allee'],
  escaliers: ['escalier'],
  toiture: ['toiture', 'auvent'],
  'maconnerie-extensions': ['extension'],
  plomberie: ['egouttage'],
  'peinture-finitions': ['sejour', 'couloir'],
};

/**
 * L'avant/après montré en premier pour un métier : celui où son travail se voit
 * le mieux. Il peut venir d'une autre catégorie (le carrelage se voit le mieux
 * dans une salle de bain).
 */
const VITRINE_PAR_SERVICE: Record<string, string> = {
  'salles-de-bain': ID_VITRINE,
  carrelage: 'salle-de-bain-baignoire/apres-1',
  escaliers: 'renovation-woluwe-saint-pierre/chantier-26',
  'maconnerie-extensions': 'extension-maison/apres-1',
};

/** Les avant/après d'un métier, sa vitrine en premier. */
export async function pairesDuService(slug: string): Promise<Paire[]> {
  const toutes = await toutesLesPaires();
  const categories = CATEGORIES_PAR_SERVICE[slug] ?? [];
  const vitrine = trouver(toutes, VITRINE_PAR_SERVICE[slug] ?? '');
  const autres = toutes.filter((paire) => categories.includes(paire.categorie) && paire !== vitrine);
  return vitrine ? [vitrine, ...autres] : autres;
}

/**
 * Seule exception à la règle « uniquement des avant/après » : un métier dont le
 * travail disparaît une fois fini (sous la chape) montre une seule photo.
 */
export const photoSeuleParService: Partial<Record<string, { image: ImageMetadata; legende: Record<Langue, string> }>> = {
  electricite: {
    image: gainesElectriques,
    legende: {
      fr: 'Gaines électriques posées au sol, avant la chape',
      nl: 'Elektriciteitsbuizen op de vloer, vóór de chape',
    },
  },
};
