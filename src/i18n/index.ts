import { fr } from './fr';
import { nl } from './nl';

export type Langue = 'fr' | 'nl';

export const LANGUES: Langue[] = ['fr', 'nl'];

const traductions = { fr, nl } as const;

/** Les textes de la langue demandée. */
export function t(langue: Langue) {
  return traductions[langue];
}

/**
 * Les adresses de chaque page dans les deux langues.
 * Une seule source : le sélecteur de langue et la navigation s'en servent tous les deux.
 */
export const ROUTES = {
  accueil: { fr: '/', nl: '/nl/' },
  services: { fr: '/services/', nl: '/nl/diensten/' },
  realisations: { fr: '/realisations/', nl: '/nl/realisaties/' },
  apropos: { fr: '/a-propos/', nl: '/nl/over-ons/' },
  contact: { fr: '/contact/', nl: '/nl/contact/' },
  mentionsLegales: { fr: '/mentions-legales/', nl: '/nl/juridische-informatie/' },
  viePrivee: { fr: '/vie-privee/', nl: '/nl/privacy/' },
  rejoindre: { fr: '/rejoindre-lequipe/', nl: '/nl/word-lid-van-ons-team/' },
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
    { libelle: textes.nav.apropos, href: chemin('apropos', langue) },
    { libelle: textes.nav.contact, href: chemin('contact', langue) },
  ];
}

