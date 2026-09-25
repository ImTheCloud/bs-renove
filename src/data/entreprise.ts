/**
 * Les faits vérifiés sur l'entreprise (source : docs/brief.md).
 * Ils ne changent pas d'une langue à l'autre.
 * Ne rien ajouter ici qui ne soit pas confirmé par le client.
 */
import { chemin, type Langue } from '../i18n';

export const entreprise = {
  nomLegal: 'BS Renove SRL',
  nomCourt: 'BS Renove',
  gerant: 'Sergiu Bivol',

  adresse: {
    rue: 'Elf Dagwand 67',
    codePostal: '9473',
    ville: 'Denderleeuw',
    pays: 'BE',
  },

  tva: 'BE 1002.240.127',

  /** Affiché à l'écran, format belge. */
  telephoneAffiche: '0485 38 43 90',
  /** Pour le lien « Appeler ». */
  telephoneLien: '+32485384390',
  /** Pour le lien WhatsApp (sans + ni espaces). */
  whatsappNumero: '32485384390',

  email: 'Bivol.sergiu@hotmail.com' as string | null,

  /** Confirmé par Sergiu le 22 septembre 2026. */
  anneesExperience: 12,
} as const;

/** Adresse sur une ligne, pour le pied de page. */
export const adresseUneLigne = `${entreprise.adresse.rue}, ${entreprise.adresse.codePostal} ${entreprise.adresse.ville}`;

/** Construit le lien WhatsApp avec le message déjà écrit. */
export function lienWhatsApp(message: string): string {
  return `https://wa.me/${entreprise.whatsappNumero}?text=${encodeURIComponent(message)}`;
}

/**
 * Construit un lien « mailto » avec le sujet et le corps déjà écrits.
 * Sert pour les candidatures, et en secours du formulaire de devis.
 */
export function lienEmail(sujet: string, corps: string): string {
  return `mailto:${entreprise.email ?? ''}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
}

/** Tous les boutons « Demander un devis » mènent au formulaire de la page contact. */
export function lienDevis(langue: Langue): string {
  return `${chemin('contact', langue)}#devis`;
}
