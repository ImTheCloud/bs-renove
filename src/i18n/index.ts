import { fr } from './fr';
import { nl } from './nl';

export type Langue = 'fr' | 'nl';

export const LANGUE_PAR_DEFAUT: Langue = 'fr';
export const LANGUES: Langue[] = ['fr', 'nl'];

const traductions = { fr, nl } as const;

/** Les textes de la langue demandée. */
export function t(langue: Langue) {
  return traductions[langue];
}

/** Devine la langue à partir de l'adresse de la page. */
export function langueDeUrl(url: URL): Langue {
  const premierSegment = url.pathname.split('/').filter(Boolean)[0];
  return premierSegment === 'nl' ? 'nl' : 'fr';
}

/**
 * Les adresses de chaque page dans les deux langues.
 * Une seule source : le sélecteur de langue et la navigation s'en servent tous les deux.
 */
export const ROUTES = {
  accueil: { fr: '/', nl: '/nl/' },
  services: { fr: '/services/', nl: '/nl/diensten/' },
  realisations: { fr: '/realisations/', nl: '/nl/realisaties/' },
  contact: { fr: '/contact/', nl: '/nl/contact/' },
  mentionsLegales: { fr: '/mentions-legales/', nl: '/nl/juridische-informatie/' },
  viePrivee: { fr: '/vie-privee/', nl: '/nl/privacy/' },
} as const satisfies Record<string, Record<Langue, string>>;

export type PageCle = keyof typeof ROUTES;

/** L'adresse d'une page dans une langue donnée. */
export function chemin(cle: PageCle, langue: Langue): string {
  return ROUTES[cle][langue];
}

/**
 * La même page dans l'autre langue.
 * Garde ce qui suit (par exemple le nom d'un projet) :
 * /realisations/salle-de-bain-knokke/ → /nl/realisaties/salle-de-bain-knokke/
 * Si la page n'est pas connue, renvoie l'accueil de l'autre langue.
 */
export function memePageDansLaLangue(cheminActuel: string, cible: Langue): string {
  const source: Langue = cheminActuel === '/nl' || cheminActuel.startsWith('/nl/') ? 'nl' : 'fr';
  if (source === cible) return cheminActuel;

  const normalise = cheminActuel.endsWith('/') ? cheminActuel : `${cheminActuel}/`;

  // La route la plus longue qui correspond gagne, pour que
  // « /realisations/xxx/ » ne soit pas capté par « / ».
  const candidates = Object.values(ROUTES)
    .filter((route) => normalise.startsWith(route[source]))
    .sort((a, b) => b[source].length - a[source].length);

  const trouvee = candidates[0];
  if (!trouvee) return ROUTES.accueil[cible];

  const reste = normalise.slice(trouvee[source].length);
  return `${trouvee[cible]}${reste}`;
}

/** Les liens de la navigation principale, dans l'ordre. */
export function liensNavigation(langue: Langue) {
  const textes = t(langue);
  return [
    { libelle: textes.nav.services, href: chemin('services', langue) },
    { libelle: textes.nav.realisations, href: chemin('realisations', langue) },
    { libelle: textes.nav.apropos, href: `${chemin('accueil', langue)}#apropos` },
    { libelle: textes.nav.contact, href: chemin('contact', langue) },
  ];
}

/**
 * Le marqueur d'une information non confirmée, avec la bonne typographie.
 * Le français met une espace avant le deux-points, le néerlandais non.
 */
export function marqueurAConfirmer(langue: Langue, quoi?: string): string {
  const mot = t(langue).aConfirmer;
  if (!quoi) return `[${mot}]`;
  return langue === 'fr' ? `[${mot} : ${quoi}]` : `[${mot}: ${quoi}]`;
}
