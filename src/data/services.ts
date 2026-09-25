/**
 * Les 11 métiers, source : docs/brief.md § 5.
 * Servent à l'accueil et à la page Services.
 *
 * Les textes décrivent le métier, pas l'entreprise : aucune promesse,
 * aucun chiffre, aucune garantie.
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

const tousLesServices: Service[] = [
  {
    slug: 'renovation-complete',
    nom: { fr: 'Rénovation complète', nl: 'Volledige renovatie' },
    phrase: {
      fr: 'Maison ou appartement, on reprend tout de A à Z',
      nl: 'Huis of appartement, wij pakken alles aan van A tot Z',
    },
    texte: {
      fr: "Vous achetez un bien à remettre en état, ou vous voulez repenser votre logement en entier. Nous prenons le chantier du début à la fin et nous coordonnons tous les corps de métier",
      nl: 'U koopt een pand dat opgeknapt moet worden, of u wilt uw woning volledig heraanleggen. Wij nemen de werf van begin tot einde op ons en coördineren alle vakmensen',
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
      fr: "Le carrelage est notre métier de base. Préparation du support, pose et joints : c'est ce qui fait qu'un sol reste beau et droit pendant des années",
      nl: 'Tegelwerk is ons basisvak. Voorbereiding van de ondergrond, plaatsing en voegen: daardoor blijft een vloer jarenlang mooi en vlak',
    },
    exemples: {
      fr: ['Sols intérieurs', 'Faïence murale', 'Salles de bain et cuisines', 'Ragréage et préparation des supports'],
      nl: ['Binnenvloeren', 'Wandtegels', 'Badkamers en keukens', 'Egaliseren en voorbereiding van de ondergrond'],
    },
  },
  {
    slug: 'terrasses',
    nom: { fr: 'Terrasses et jardins', nl: 'Terrassen en tuinen' },
    phrase: {
      fr: 'Carrelage de terrasse et de jardin, sur une base solide',
      nl: 'Terras- en tuintegels, op een stevige ondergrond',
    },
    texte: {
      fr: "Une terrasse se prépare comme un sol intérieur, en plus exigeant : elle vit dehors toute l'année. Nous préparons la base et posons le carrelage de votre terrasse et de vos allées de jardin",
      nl: 'Een terras vraagt dezelfde voorbereiding als een binnenvloer, en nog meer zorg: het ligt het hele jaar buiten. Wij bereiden de ondergrond voor en leggen de tegels van uw terras en tuinpaden',
    },
    exemples: {
      fr: ['Terrasses carrelées', 'Allées et pavage', 'Chape et ferraillage', 'Joints et finitions'],
      nl: ['Betegelde terrassen', 'Opritten en bestrating', 'Dekvloer en wapening', 'Voegen en afwerking'],
    },
  },
  {
    slug: 'escaliers',
    nom: { fr: 'Escaliers', nl: 'Trappen' },
    phrase: {
      fr: 'Rénovation et habillage d’escaliers',
      nl: 'Renovatie en bekleding van trappen',
    },
    texte: {
      fr: "Un escalier, on le voit dès qu'on entre. Nous rénovons et habillons les escaliers, à l'intérieur de la maison comme vers le garage ou la cave, avec des finitions assorties au reste du logement",
      nl: 'Een trap ziet u meteen wanneer u binnenkomt. Wij renoveren en bekleden trappen, in de woning maar ook naar de garage of de kelder, met een afwerking die past bij de rest van de woning',
    },
    exemples: {
      fr: ['Habillage des marches', "Rénovation d'un escalier existant", 'Escalier de garage ou de cave', 'Finitions et peinture'],
      nl: ['Bekleding van de treden', 'Renovatie van een bestaande trap', 'Trap naar garage of kelder', 'Afwerking en schilderwerk'],
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
      nl: 'Een lek lost zichzelf nooit op. Wij doen zowel kleine herstellingen als de volledige renovatie van een dak',
    },
    exemples: {
      fr: ['Remplacement de tuiles', 'Réparation de fuites', 'Isolation de toiture', 'Gouttières et zinguerie'],
      nl: ['Vervangen van dakpannen', 'Herstellen van lekken', 'Dakisolatie', 'Dakgoten en zinkwerk'],
    },
  },
  {
    slug: 'maconnerie-extensions',
    nom: { fr: 'Maçonnerie & extensions', nl: 'Metselwerk & uitbreidingen' },
    phrase: {
      fr: 'Gros œuvre, extensions et maçonnerie',
      nl: 'Ruwbouw, uitbreidingen en metselwerk',
    },
    texte: {
      fr: "Murs, ouvertures et agrandissements. Une extension commence par un gros œuvre solide, prêt pour la toiture et les finitions",
      nl: 'Muren, openingen en uitbreidingen. Een uitbreiding begint met degelijke ruwbouw, klaar voor het dak en de afwerking',
    },
    exemples: {
      fr: ['Extensions et agrandissements', 'Murs et élévations', 'Ouvertures et linteaux', 'Gros œuvre'],
      nl: ['Uitbreidingen', 'Muren en opbouw', 'Openingen en lateien', 'Ruwbouw'],
    },
  },
  {
    slug: 'plomberie',
    nom: { fr: 'Plomberie', nl: 'Loodgieterij' },
    phrase: {
      fr: 'Arrivées d’eau, évacuations et égouttage',
      nl: 'Wateraanvoer, afvoer en riolering',
    },
    texte: {
      fr: "Ce qu'on ne voit plus une fois le chantier fini, mais qui doit être parfait : les arrivées d'eau, les évacuations et l'égouttage, posés avant les sols et les murs",
      nl: 'Wat u na de werf niet meer ziet, maar perfect moet zijn: de wateraanvoer, de afvoer en de riolering, geplaatst vóór de vloeren en de muren',
    },
    exemples: {
      fr: ['Arrivées d’eau et évacuations', 'Égouttage extérieur', 'Raccordements des sanitaires', 'Tuyauterie sous chape'],
      nl: ['Wateraanvoer en afvoer', 'Buitenriolering', 'Aansluiting van het sanitair', 'Leidingen onder de dekvloer'],
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
      fr: 'Murs et plafonds peints, parquet posé, finitions intérieures',
      nl: 'Geschilderde muren en plafonds, gelegd parket, binnenafwerking',
    },
    texte: {
      fr: "La dernière étape, celle qu'on regarde tous les jours. Murs et plafonds préparés puis peints, parquet posé, et les finitions qui vont avec",
      nl: 'De laatste stap, die u elke dag ziet. Muren en plafonds voorbereid en geschilderd, parket gelegd, en de afwerking die erbij hoort',
    },
    exemples: {
      fr: ['Peinture des murs et plafonds', 'Pose de parquet', 'Enduits et rebouchage', 'Plinthes et finitions'],
      nl: ['Schilderen van muren en plafonds', 'Plaatsen van parket', 'Pleisterwerk en opvullen', 'Plinten en afwerking'],
    },
  },
];

/**
 * Métiers à masquer du site (accueil, Services, formulaire, maison dessinée).
 * Vide : tout est affiché. L'électricité (NACE 43.21) et la peinture (NACE 43.34)
 * ne sont pas encore enregistrées à la BCE ; pour les masquer, ajouter ici
 * 'electricite' et 'peinture-finitions'.
 */
const NON_ENREGISTRES: string[] = [];

/** Les métiers proposés sur le site (accueil, Services, formulaire, maison dessinée). */
export const services = tousLesServices.filter((service) => !NON_ENREGISTRES.includes(service.slug));

/** L'icône au trait de chaque service (voir src/components/Icon.astro). */
/**
 * Savoir-faire sans avant/après à montrer : affichés seulement sur la page
 * À propos (« Ce que nous savons faire »), avec un lien vers le devis.
 */
export const autresSavoirFaire = [
  {
    nom: { fr: 'Façades', nl: 'Gevels' },
    exemples: {
      fr: ['Rejointoiement', 'Nettoyage de façade'],
      nl: ['Voegwerk', 'Gevelreiniging'],
    },
    icone: 'brique',
  },
] as const;

export const iconesServices = {
  'renovation-complete': 'maison',
  'salles-de-bain': 'bain',
  cuisines: 'cuisine',
  carrelage: 'carrelage',
  terrasses: 'terrasse',
  escaliers: 'escalier',
  toiture: 'toit',
  'maconnerie-extensions': 'brique',
  plomberie: 'goutte',
  electricite: 'eclair',
  'peinture-finitions': 'rouleau',
} as const satisfies Record<string, string>;

export function iconeService(slug: string) {
  return (iconesServices as Record<string, (typeof iconesServices)[keyof typeof iconesServices]>)[slug] ?? 'maison';
}
