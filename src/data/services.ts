/**
 * Les 8 services, source : docs/brief.md § 6.
 * Servent à l'accueil et, plus tard, à la page Services.
 * Les textes néerlandais sont à faire relire (voir docs/contenu-manquant.md).
 */
import type { Langue } from '~/i18n';

export interface Service {
  /** Sert pour l'adresse de la page et le nom du dossier de photos. */
  slug: string;
  nom: Record<Langue, string>;
  phrase: Record<Langue, string>;
}

export const services: Service[] = [
  {
    slug: 'renovation-complete',
    nom: { fr: 'Rénovation complète', nl: 'Volledige renovatie' },
    phrase: {
      fr: 'Maison ou appartement, on reprend tout de A à Z.',
      nl: 'Huis of appartement, wij pakken alles aan van A tot Z.',
    },
  },
  {
    slug: 'salles-de-bain',
    nom: { fr: 'Salles de bain', nl: 'Badkamers' },
    phrase: {
      fr: 'Carrelage, sanitaires et plomberie, clé en main.',
      nl: 'Tegelwerk, sanitair en loodgieterij, sleutel op de deur.',
    },
  },
  {
    slug: 'cuisines',
    nom: { fr: 'Cuisines', nl: 'Keukens' },
    phrase: {
      fr: 'Pose, menuiserie et finitions, adaptées à votre espace.',
      nl: 'Plaatsing, schrijnwerk en afwerking, op maat van uw ruimte.',
    },
  },
  {
    slug: 'carrelage',
    nom: { fr: 'Carrelage', nl: 'Tegelwerk' },
    phrase: {
      fr: "Sols et murs, à l'intérieur comme à l'extérieur.",
      nl: 'Vloeren en muren, zowel binnen als buiten.',
    },
  },
  {
    slug: 'toiture',
    nom: { fr: 'Toiture', nl: 'Dakwerken' },
    phrase: {
      fr: 'Rénovation et réparation de toitures.',
      nl: 'Renovatie en herstelling van daken.',
    },
  },
  {
    slug: 'maconnerie-facades',
    nom: { fr: 'Maçonnerie & façades', nl: 'Metselwerk & gevels' },
    phrase: {
      fr: 'Gros œuvre, maçonnerie et rejointoiement.',
      nl: 'Ruwbouw, metselwerk en voegwerk.',
    },
  },
  {
    slug: 'electricite',
    nom: { fr: 'Électricité', nl: 'Elektriciteit' },
    phrase: {
      fr: 'Installation et rénovation électrique pour votre maison.',
      nl: 'Elektrische installatie en renovatie voor uw woning.',
    },
  },
  {
    slug: 'peinture-finitions',
    nom: { fr: 'Peinture et finitions', nl: 'Schilderwerk en afwerking' },
    phrase: {
      fr: 'Peinture des murs et plafonds, et finitions intérieures.',
      nl: 'Schilderwerk van muren en plafonds, en binnenafwerking.',
    },
  },
];
