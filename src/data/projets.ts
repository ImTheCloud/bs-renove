/**
 * Les réalisations, vues comme des avant/après indépendants.
 *
 * Il n'y a plus de page par chantier : chaque comparaison avant/après vit
 * seule, avec sa pièce et sa commune. Les fichiers de `src/content/projets/`
 * servent seulement à ranger les paires par chantier d'origine (et à donner
 * la commune) ; leurs autres photos et leur récit ne sont plus affichés.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { services } from './services';
import type { Langue } from '~/i18n';

export type Projet = CollectionEntry<'projets'>;
type PaireBrute = Projet['data']['avantApres'][number];

export interface Paire {
  /** Identifiant stable : `<fichier du chantier>-<numéro de la paire>`. */
  id: string;
  avant: NonNullable<PaireBrute['avant']>;
  apres: NonNullable<PaireBrute['apres']>;
  legende: Record<Langue, string>;
  categorie: string;
  /** Absente tant que la commune n'est pas confirmée : on n'affiche rien plutôt qu'un marqueur. */
  commune?: Record<Langue, string>;
  /**
   * Vrai dès qu'une des deux photos est horizontale : la comparaison s'affiche
   * alors en horizontal (4/3), sinon la photo horizontale serait coupée à une
   * bande étroite au milieu.
   */
  paysage: boolean;
  /** Le format du cadre, prêt pour `aspect-ratio`. */
  ratio: string;
  /** Position de départ de la poignée du curseur, en %. */
  depart: number;
  /** Cadrage (object-position) de chaque photo. */
  cadrageAvant: string;
  cadrageApres: string;
}

/**
 * Toutes les paires affichables : une vraie photo des deux côtés, et un
 * « après » qui montre un travail fini (les paires `enCours` sont masquées).
 */
export async function toutesLesPaires(): Promise<Paire[]> {
  const projets = (await getCollection('projets')).sort((a, b) => a.data.ordre - b.data.ordre);
  const paires: Paire[] = [];
  for (const projet of projets) {
    const communeConnue = !projet.data.commune.fr.startsWith('[');
    projet.data.avantApres.forEach((paire, index) => {
      if (!paire.avant || !paire.apres || paire.enCours) return;
      const paysage = [paire.avant, paire.apres].some((photo) => photo.width > photo.height);
      paires.push({
        paysage,
        ratio: paysage ? '4 / 3' : '3 / 4',
        depart: paire.depart,
        cadrageAvant: paire.cadrageAvant ?? '50% 50%',
        cadrageApres: paire.cadrageApres ?? '50% 50%',
        id: `${projet.id}-${index}`,
        avant: paire.avant,
        apres: paire.apres,
        legende: paire.legende,
        categorie: paire.categorie,
        commune: communeConnue ? projet.data.commune : { fr: 'Belgique', nl: 'België' },
      });
    });
  }
  return paires;
}

/** La comparaison en grand sur l'accueil : la plus spectaculaire. */
const ID_VITRINE = 'salle-de-bain-watermael-boitsfort-0';

/** Celles de la bande « réalisations » de l'accueil, dans cet ordre. */
const IDS_ACCUEIL = [
  'renovation-woluwe-saint-pierre-7',
  'renovation-interieure-ostende-0',
  'renovation-woluwe-saint-pierre-4',
  'renovation-woluwe-saint-pierre-8',
  'toiture-woluwe-saint-pierre-0',
  'renovation-woluwe-saint-pierre-6',
  'renovation-interieure-ostende-2',
  'renovation-parquet-menuiseries-0',
];

export async function paireVitrine(): Promise<Paire | undefined> {
  const paires = await toutesLesPaires();
  return paires.find((paire) => paire.id === ID_VITRINE) ?? paires[0];
}

export async function pairesAccueil(): Promise<Paire[]> {
  const paires = await toutesLesPaires();
  const choisies = IDS_ACCUEIL.map((id) => paires.find((paire) => paire.id === id)).filter(
    (paire): paire is Paire => paire !== undefined,
  );
  // Si la sélection ne trouve plus rien (fichiers renommés), on prend les premières.
  return choisies.length > 0 ? choisies : paires.filter((paire) => paire.id !== ID_VITRINE).slice(0, 8);
}

/** Quels types de pièce illustrent chaque métier. */
const CATEGORIES_PAR_SERVICE: Record<string, string[]> = {
  'renovation-complete': [],
  'salles-de-bain': ['salle-de-bain', 'douche', 'toilette'],
  cuisines: ['cuisine'],
  carrelage: ['cave'],
  terrasses: ['exterieur', 'allee'],
  escaliers: ['escalier'],
  toiture: ['toiture', 'auvent'],
  'maconnerie-facades': ['facade'],
  electricite: [],
  'peinture-finitions': ['sejour', 'chambre', 'couloir'],
};

/** Les paires à montrer en premier dans leur métier (la vitrine, l'escalier principal). */
const EN_TETE = [ID_VITRINE, 'renovation-woluwe-saint-pierre-4'];

/** Les avant/après d'un métier, les paires « en tête » d'abord. */
export async function pairesDuService(slug: string): Promise<Paire[]> {
  const categories = CATEGORIES_PAR_SERVICE[slug] ?? [];
  const paires = (await toutesLesPaires()).filter((paire) => categories.includes(paire.categorie));
  return paires.sort((a, b) => Number(EN_TETE.includes(b.id)) - Number(EN_TETE.includes(a.id)));
}

/** Le nom lisible d'un service. */
export function nomService(slug: string, langue: Langue): string | undefined {
  return services.find((service) => service.slug === slug)?.nom[langue];
}
