/**
 * Les 8 services, source : docs/brief.md § 6.
 * Servent à l'accueil et à la page Services.
 *
 * Les textes décrivent le métier, pas l'entreprise : aucune promesse,
 * aucun chiffre, aucune garantie. Tout cela reste à faire valider par le
 * client, et les textes néerlandais par un natif (docs/contenu-manquant.md).
 */
import type { Langue } from '~/i18n';

export interface Service {
  /** Sert pour l'ancre dans la page et le nom du dossier de photos. */
  slug: string;
  nom: Record<Langue, string>;
  /** Une phrase, pour les cartes de l'accueil. */
  phrase: Record<Langue, string>;
  /** Deux ou trois phrases, pour la page Services. */
  texte: Record<Langue, string>;
  /** Exemples de travaux courants du métier. */
  exemples: Record<Langue, string[]>;
}

export const services: Service[] = [
  {
    slug: 'renovation-complete',
    nom: { fr: 'Rénovation complète', nl: 'Volledige renovatie' },
    phrase: {
      fr: 'Maison ou appartement, on reprend tout de A à Z',
      nl: 'Huis of appartement, wij pakken alles aan van A tot Z',
    },
    texte: {
      fr: "Vous achetez un bien à remettre en état, ou vous voulez repenser votre logement en entier. Nous prenons le chantier du début à la fin, et nous coordonnons les corps de métier pour que vous n'ayez qu'un seul interlocuteur",
      nl: 'U koopt een pand dat opgeknapt moet worden, of u wilt uw woning volledig heraanleggen. Wij nemen de werf van begin tot einde op ons en coördineren de vakmensen, zodat u maar één aanspreekpunt hebt',
    },
    exemples: {
      fr: ['Démolition et évacuation', 'Cloisons et plafonds', 'Sols et revêtements', 'Coordination des corps de métier'],
      nl: ['Afbraak en afvoer', 'Wanden en plafonds', 'Vloeren en bekleding', 'Coördinatie van de vakmensen'],
    },
  },
  {
    slug: 'salles-de-bain',
    nom: { fr: 'Salles de bain', nl: 'Badkamers' },
    phrase: {
      fr: 'Carrelage, sanitaires et plomberie, clé en main',
      nl: 'Tegelwerk, sanitair en loodgieterij, sleutel op de deur',
    },
    texte: {
      fr: "De la dépose de l'ancienne salle de bain jusqu'aux derniers joints, nous nous occupons de tout : plomberie, carrelage, sanitaires et finitions",
      nl: 'Van het uitbreken van de oude badkamer tot de laatste voegen zorgen wij voor alles: loodgieterij, tegelwerk, sanitair en afwerking',
    },
    exemples: {
      fr: ["Douche à l'italienne ou baignoire", 'Carrelage mur et sol', 'Sanitaires et robinetterie', 'Raccordements de plomberie'],
      nl: ['Inloopdouche of bad', 'Tegelwerk op muur en vloer', 'Sanitair en kranen', 'Loodgietersaansluitingen'],
    },
  },
  {
    slug: 'cuisines',
    nom: { fr: 'Cuisines', nl: 'Keukens' },
    phrase: {
      fr: 'Pose, menuiserie et finitions, adaptées à votre espace',
      nl: 'Plaatsing, schrijnwerk en afwerking, op maat van uw ruimte',
    },
    texte: {
      fr: "Pose de votre cuisine, adaptation aux dimensions de la pièce et raccordements. La menuiserie sur mesure permet d'exploiter les angles et les hauteurs perdues",
      nl: 'Plaatsing van uw keuken, aanpassing aan de afmetingen van de ruimte en aansluitingen. Schrijnwerk op maat benut hoeken en verloren hoogtes',
    },
    exemples: {
      fr: ["Pose de cuisine équipée", 'Menuiserie sur mesure', 'Crédence et plan de travail', "Raccordements d'eau et d'évacuation"],
      nl: ['Plaatsing van een ingerichte keuken', 'Schrijnwerk op maat', 'Spatwand en werkblad', 'Aansluitingen voor water en afvoer'],
    },
  },
  {
    slug: 'carrelage',
    nom: { fr: 'Carrelage', nl: 'Tegelwerk' },
    phrase: {
      fr: "Sols et murs, à l'intérieur comme à l'extérieur",
      nl: 'Vloeren en muren, zowel binnen als buiten',
    },
    texte: {
      fr: "Le carrelage est notre métier de base. Préparation du support, pose et joints : un sol bien posé se voit surtout quand il est mal fait",
      nl: 'Tegelwerk is ons basisvak. Voorbereiding van de ondergrond, plaatsing en voegen: een goed geplaatste vloer valt vooral op wanneer hij slecht gelegd is',
    },
    exemples: {
      fr: ['Sols intérieurs', 'Faïence murale', 'Terrasses et extérieurs', 'Ragréage et préparation des supports'],
      nl: ['Binnenvloeren', 'Wandtegels', 'Terrassen en buitenruimtes', 'Egaliseren en voorbereiding van de ondergrond'],
    },
  },
  {
    slug: 'toiture',
    nom: { fr: 'Toiture', nl: 'Dakwerken' },
    phrase: {
      fr: 'Rénovation et réparation de toitures',
      nl: 'Renovatie en herstelling van daken',
    },
    texte: {
      fr: "Une fuite ne s'arrange jamais toute seule. Nous intervenons sur les réparations ponctuelles comme sur la rénovation complète d'une toiture",
      nl: 'Een lek lost zichzelf nooit op. Wij komen tussen voor punctuele herstellingen en voor de volledige renovatie van een dak',
    },
    exemples: {
      fr: ['Remplacement de tuiles', 'Réparation de fuites', 'Isolation de toiture', 'Gouttières et zinguerie'],
      nl: ['Vervangen van dakpannen', 'Herstellen van lekken', 'Dakisolatie', 'Dakgoten en zinkwerk'],
    },
  },
  {
    slug: 'maconnerie-facades',
    nom: { fr: 'Maçonnerie & façades', nl: 'Metselwerk & gevels' },
    phrase: {
      fr: 'Gros œuvre, maçonnerie et rejointoiement',
      nl: 'Ruwbouw, metselwerk en voegwerk',
    },
    texte: {
      fr: "Murs, ouvertures et façades. Le rejointoiement redonne son aspect à une façade et la protège de l'humidité",
      nl: 'Muren, openingen en gevels. Voegwerk geeft een gevel zijn aanzien terug en beschermt hem tegen vocht',
    },
    exemples: {
      fr: ['Murs et élévations', 'Rejointoiement', 'Ouvertures et linteaux', 'Nettoyage de façade'],
      nl: ['Muren en opbouw', 'Voegwerk', 'Openingen en lateien', 'Gevelreiniging'],
    },
  },
  {
    slug: 'electricite',
    nom: { fr: 'Électricité', nl: 'Elektriciteit' },
    phrase: {
      fr: 'Installation et rénovation électrique pour votre maison',
      nl: 'Elektrische installatie en renovatie voor uw woning',
    },
    texte: {
      fr: "Remise à neuf d'une installation ancienne, ajout de points lumineux et de prises, ou reprise complète lors d'une rénovation",
      nl: 'Vernieuwing van een oude installatie, bijplaatsen van lichtpunten en stopcontacten, of volledige heraanleg bij een renovatie',
    },
    exemples: {
      fr: ['Remise aux normes', 'Tableau électrique', 'Points lumineux et prises', 'Passage de câbles'],
      nl: ['In orde brengen volgens de normen', 'Elektriciteitskast', 'Lichtpunten en stopcontacten', 'Kabels trekken'],
    },
  },
  {
    slug: 'peinture-finitions',
    nom: { fr: 'Peinture et finitions', nl: 'Schilderwerk en afwerking' },
    phrase: {
      fr: 'Peinture des murs et plafonds, et finitions intérieures',
      nl: 'Schilderwerk van muren en plafonds, en binnenafwerking',
    },
    texte: {
      fr: "La dernière étape, celle qu'on regarde tous les jours. Préparation des murs, peinture et finitions",
      nl: 'De laatste stap, die u elke dag ziet. Voorbereiding van de muren, schilderwerk en afwerking',
    },
    exemples: {
      fr: ['Peinture des murs et plafonds', 'Enduits et rebouchage', 'Plinthes et finitions', 'Préparation des supports'],
      nl: ['Schilderen van muren en plafonds', 'Pleisterwerk en opvullen', 'Plinten en afwerking', 'Voorbereiding van de ondergrond'],
    },
  },
];
