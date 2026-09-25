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
  /** Deux paragraphes de plus sur le métier (page Services, « Voir ce métier » depuis la maison). */
  enDetail: Record<Langue, string[]>;
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
    enDetail: {
      fr: ["Une rénovation complète, c'est avant tout un ordre à respecter : démolir, reprendre ce qui est caché (plomberie, électricité, murs), puis refermer et finir. Chaque métier intervient au bon moment, sans défaire le travail du précédent.","Nous faisons le point avec vous sur ce que vous voulez garder, changer ou agrandir, puis nous organisons le chantier pièce par pièce, pour que vous sachiez toujours où on en est."],
      nl: ["Een volledige renovatie volgt vooral een vaste volgorde: afbreken, het verborgen werk vernieuwen (leidingen, elektriciteit, muren), en dan dichtmaken en afwerken. Elk vak komt op het juiste moment, zonder het werk van het vorige ongedaan te maken.","Samen overlopen we wat u wilt behouden, veranderen of uitbreiden. Daarna organiseren we de werf ruimte per ruimte, zodat u altijd weet hoe ver we staan."],
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
    enDetail: {
      fr: ["Une salle de bain réunit plusieurs métiers dans peu de place : plomberie, étanchéité, carrelage, sanitaires, parfois électricité. C'est l'ordre et la précision entre eux qui font une pièce durable.","Douche à l'italienne, baignoire, double vasque ou petite salle d'eau sous les combles : nous adaptons l'aménagement à la pièce, jusqu'aux joints et aux finitions."],
      nl: ["Een badkamer brengt veel vakken samen op weinig ruimte: loodgieterij, waterdichting, tegelwerk, sanitair en soms elektriciteit. De volgorde en de precisie tussen die stappen maken een duurzame ruimte.","Inloopdouche, bad, dubbele wastafel of een kleine badkamer onder het dak: we passen de indeling aan de ruimte aan, tot de voegen en de afwerking."],
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
    enDetail: {
      fr: ["Une cuisine se joue au centimètre : des murs rarement droits, des arrivées d'eau à placer au bon endroit, de l'électroménager à intégrer. Tout se prépare avant la pose.","Nous posons les meubles, adaptons ce qui doit l’être et réalisons les raccordements, puis la crédence et les finitions, pour une cuisine prête à l’emploi."],
      nl: ["Een keuken draait om centimeters: muren zijn zelden recht, wateraansluitingen moeten op de juiste plaats komen en de toestellen moeten erin passen. Alles wordt vóór de plaatsing voorbereid.","We plaatsen de kasten, passen aan wat nodig is en maken de aansluitingen, daarna volgen de spatwand en de afwerking, voor een keuken die meteen klaar is voor gebruik."],
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
    enDetail: {
      fr: ["Un beau carrelage commence sous le carreau : un support propre, plan et sec, la bonne colle, et un bon calepinage, c'est-à-dire la façon de répartir les carreaux pour éviter les petites coupes visibles.","Sols, murs, grands formats, faïence de salle de bain ou carrelage de cave : chaque surface a sa préparation et ses joints."],
      nl: ["Mooi tegelwerk begint onder de tegel: een propere, vlakke en droge ondergrond, de juiste lijm en een goed legplan, dus de manier waarop de tegels verdeeld worden om kleine zichtbare snijstukken te vermijden.","Vloeren, muren, grote formaten, wandtegels in de badkamer of tegelwerk in de kelder: elk oppervlak heeft zijn eigen voorbereiding en voegen."],
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
    enDetail: {
      fr: ["Dehors, un carrelage subit la pluie, le gel et les écarts de température. La pente pour évacuer l'eau et une base solide comptent autant que le carreau lui-même.","Terrasse, allée d’entrée ou chemin de jardin : nous préparons le terrain, la base et la pente, puis nous posons carrelage ou pavés."],
      nl: ["Buiten krijgt tegelwerk regen, vorst en temperatuurverschillen te verduren. De helling om het water af te voeren en een stevige ondergrond zijn even belangrijk als de tegel zelf.","Terras, oprit of tuinpad: we maken de grond, de ondergrond en de helling klaar en leggen daarna tegels of kasseien."],
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
    enDetail: {
      fr: ["Un escalier sert tous les jours et se voit dès l'entrée. Le rénover, c'est souvent garder la structure existante et lui donner une nouvelle peau : marches, contremarches, nez de marche.","Escalier principal, vers la cave ou vers le garage : nous choisissons avec vous une finition qui s’accorde avec les sols de la maison."],
      nl: ["Een trap wordt elke dag gebruikt en valt meteen op bij het binnenkomen. Renoveren betekent vaak de bestaande structuur behouden en ze een nieuwe afwerking geven: treden, stootborden en trapneuzen.","Hoofdtrap, trap naar de kelder of naar de garage: samen kiezen we een afwerking die past bij de vloeren van de woning."],
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
    enDetail: {
      fr: ["La toiture protège tout le reste de la maison. Une tuile déplacée ou une gouttière bouchée suffit à faire entrer l'eau, et les dégâts apparaissent souvent bien plus bas.","Nous intervenons sur les tuiles, la charpente, l’isolation, les lucarnes, les gouttières et les petites toitures, comme celle au-dessus d’une porte d’entrée."],
      nl: ["Het dak beschermt de rest van het huis. Eén verschoven dakpan of een verstopte dakgoot is genoeg om water binnen te laten, en de schade verschijnt vaak veel lager.","We werken aan dakpannen, het dakgebinte, de isolatie, dakkapellen, dakgoten en kleine daken, zoals het afdak boven een voordeur."],
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
    enDetail: {
      fr: ["Agrandir une maison, c'est d'abord du gros œuvre : fondations, murs porteurs, ouvertures et linteaux, sur lesquels tout le reste va reposer.","Une extension doit se raccorder proprement à l'existant, aux murs comme à la toiture. Nous montons le gros œuvre pour qu'il soit prêt à accueillir la toiture, les menuiseries et les finitions."],
      nl: ["Een woning uitbreiden begint met ruwbouw: funderingen, dragende muren, openingen en lateien, waarop al de rest zal rusten.","Een uitbreiding moet netjes aansluiten op het bestaande huis, zowel aan de muren als aan het dak. We bouwen de ruwbouw zo dat hij klaar is voor het dak, het schrijnwerk en de afwerking."],
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
    enDetail: {
      fr: ["La plomberie devient invisible une fois la pièce finie : c'est pour ça qu'elle doit être juste du premier coup, avec les bons diamètres, les bonnes pentes pour les évacuations et des raccords accessibles.","Arrivées d’eau, évacuations, égouttage extérieur ou raccordement des sanitaires : nous posons les réseaux avant les sols et les murs, au moment où il faut."],
      nl: ["Loodgieterij is onzichtbaar zodra de ruimte af is, en moet daarom meteen juist zijn: de juiste diameters, de juiste helling voor de afvoer en bereikbare koppelingen.","Wateraanvoer, afvoer, buitenriolering of de aansluiting van het sanitair: we leggen de leidingen vóór de vloeren en de muren, op het juiste moment."],
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
    enDetail: {
      fr: ["L'électricité se prévoit avant les finitions : où seront les prises, les interrupteurs et les éclairages, pièce par pièce, pour ne pas devoir rouvrir un mur plus tard.","Gaines posées au sol avant la chape, nouveaux points lumineux, tableau électrique : l’installation est pensée avec le reste du chantier."],
      nl: ["Elektriciteit plant u vóór de afwerking: waar komen de stopcontacten, schakelaars en verlichting, ruimte per ruimte, zodat er later geen muur opnieuw open moet.","Buizen op de vloer vóór de dekvloer, nieuwe lichtpunten, de elektriciteitskast: de installatie wordt samen met de rest van de werf bedacht."],
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
    enDetail: {
      fr: ["Les finitions, c'est ce qu'on regarde tous les jours. Une peinture réussie dépend surtout de la préparation : enduire, poncer et protéger avant la première couche.","Murs et plafonds, parquet, plinthes : c'est l'étape qui transforme un chantier en pièce où l'on a envie de vivre."],
      nl: ["Afwerking is wat u elke dag ziet. Goed schilderwerk hangt vooral af van de voorbereiding: plamuren, schuren en afdekken vóór de eerste laag.","Muren en plafonds, parket, plinten: dit is de stap die van een werf een ruimte maakt waar u graag woont."],
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
