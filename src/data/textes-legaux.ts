/**
 * Textes des pages Mentions légales et Vie privée.
 *
 * Tout ce qui n'est pas confirmé par le client apparaît en [À CONFIRMER].
 * Les deux pages portent la mention [À RELIRE] tant qu'un humain ne les a
 * pas validées (docs/brief.md § 9).
 *
 * Les faits viennent de src/data/entreprise.ts, jamais recopiés à la main.
 */
import type { Langue } from '~/i18n';

export interface BlocLegal {
  titre: Record<Langue, string>;
  /** Paragraphes. La marque {email} est remplacée à l'affichage. */
  paragraphes?: Record<Langue, string[]>;
  liste?: Record<Langue, string[]>;
}

export const mentionsLegales: BlocLegal[] = [
  {
    titre: { fr: "Éditeur du site", nl: 'Uitgever van de website' },
    paragraphes: {
      fr: [
        'Ce site est édité par BS Renove SRL, société à responsabilité limitée de droit belge.',
      ],
      nl: [
        'Deze website wordt uitgegeven door BS Renove SRL, een besloten vennootschap naar Belgisch recht.',
      ],
    },
  },
  {
    titre: { fr: 'Activité', nl: 'Activiteit' },
    paragraphes: {
      fr: [
        "Entreprise générale de construction et de rénovation. Zone d'intervention : toute la Belgique.",
      ],
      nl: [
        'Algemene bouw- en renovatieonderneming. Werkgebied: heel België.',
      ],
    },
  },
  {
    titre: { fr: 'Hébergement', nl: 'Hosting' },
    paragraphes: {
      fr: [
        "Le site est hébergé par [À CONFIRMER : hébergeur]. Aucune donnée n'est stockée sur le site lui-même : il ne comporte ni base de données, ni espace de connexion.",
      ],
      nl: [
        'De website wordt gehost door [TE BEVESTIGEN: hostingpartij]. Er worden geen gegevens op de website zelf bewaard: er is geen databank en geen aanmeldruimte.',
      ],
    },
  },
  {
    titre: { fr: 'Propriété intellectuelle', nl: 'Intellectuele eigendom' },
    paragraphes: {
      fr: [
        "Les textes et les photographies présentés sur ce site appartiennent à BS Renove SRL, sauf mention contraire. BS Renove SRL ne publie une photographie de chantier qu'avec l'accord préalable du propriétaire concerné, et ne mentionne que la commune, jamais l'adresse.",
        'Toute reproduction sans autorisation écrite préalable est interdite.',
      ],
      nl: [
        'De teksten en foto’s op deze website behoren toe aan BS Renove SRL, tenzij anders vermeld. BS Renove SRL publiceert een foto van een werf enkel met voorafgaande toestemming van de betrokken eigenaar, en vermeldt nooit meer dan de gemeente, nooit het adres.',
        'Elke reproductie zonder voorafgaande schriftelijke toestemming is verboden.',
      ],
    },
  },
  {
    titre: { fr: 'Responsabilité', nl: 'Aansprakelijkheid' },
    paragraphes: {
      fr: [
        "Les informations de ce site sont données à titre indicatif. Les descriptions de services ne constituent pas une offre contractuelle : seul un devis écrit et signé engage l'entreprise.",
      ],
      nl: [
        'De informatie op deze website is louter indicatief. De beschrijvingen van de diensten vormen geen contractueel aanbod: enkel een geschreven en ondertekende offerte verbindt de onderneming.',
      ],
    },
  },
];

export const viePrivee: BlocLegal[] = [
  {
    titre: { fr: 'Qui traite vos données', nl: 'Wie uw gegevens verwerkt' },
    paragraphes: {
      fr: [
        "Le responsable du traitement est BS Renove SRL, dont les coordonnées figurent en haut de cette page. Pour toute question sur vos données, écrivez à {email} ou appelez le {telephone}.",
      ],
      nl: [
        'De verwerkingsverantwoordelijke is BS Renove SRL, waarvan de gegevens bovenaan deze pagina staan. Voor elke vraag over uw gegevens kunt u schrijven naar {email} of bellen naar {telephone}.',
      ],
    },
  },
  {
    titre: { fr: 'Ce que nous recevons', nl: 'Wat wij ontvangen' },
    paragraphes: {
      fr: [
        "Ce site n'a ni formulaire ni base de données : il ne capte rien lui-même. Nous contacter se fait uniquement par un moyen que vous choisissez et déclenchez vous-même — téléphone, WhatsApp, ou un email (le bouton « Demander un devis » ouvre votre messagerie avec un texte pré-rempli, que vous complétez avant de l'envoyer vous-même). Nous ne recevons que ce que vous nous envoyez ainsi : par exemple votre nom, votre numéro, la commune du chantier et la description de votre projet, si vous les indiquez.",
      ],
      nl: [
        'Deze website heeft geen formulier en geen databank: hij verzamelt zelf niets. Ons contacteren gebeurt enkel via een middel dat u zelf kiest en zelf start — telefoon, WhatsApp, of een email (de knop "Offerte aanvragen" opent uw mailprogramma met een vooraf ingevulde tekst, die u zelf aanvult voor u ze verstuurt). Wij ontvangen enkel wat u ons zo zelf stuurt: bijvoorbeeld uw naam, uw nummer, de gemeente van de werf en de beschrijving van uw project, als u die vermeldt.',
      ],
    },
  },
  {
    titre: { fr: 'Pourquoi', nl: 'Waarom' },
    paragraphes: {
      fr: [
        "Ces informations servent uniquement à vous répondre et à établir un devis. Elles ne sont ni vendues, ni louées, ni utilisées pour de la publicité.",
      ],
      nl: [
        'Deze gegevens dienen uitsluitend om u te antwoorden en een offerte op te maken. Ze worden niet verkocht, niet verhuurd en niet voor reclame gebruikt.',
      ],
    },
  },
  {
    titre: { fr: 'Par où passent-elles', nl: 'Langs waar gaan ze' },
    paragraphes: {
      fr: [
        "Aucun service tiers n'intervient entre vous et nous : votre appel passe par votre opérateur téléphonique, votre message WhatsApp par les services de Meta, et votre email par votre propre messagerie puis la nôtre — chacun selon ses propres règles de confidentialité. Nous n'utilisons ce que nous recevons que pour répondre à votre demande.",
      ],
      nl: [
        'Er komt geen enkele derde partij tussen u en ons: uw telefoontje verloopt via uw telefoonoperator, uw WhatsApp-bericht via de diensten van Meta, en uw email via uw eigen mailprogramma en vervolgens het onze — elk volgens hun eigen privacyregels. Wij gebruiken wat we ontvangen enkel om uw vraag te beantwoorden.',
      ],
    },
  },
  {
    titre: { fr: 'Combien de temps', nl: 'Hoe lang' },
    paragraphes: {
      fr: [
        "Nous gardons vos messages le temps utile pour traiter votre demande et assurer le suivi si un devis débouche sur un chantier. Vous pouvez à tout moment demander leur effacement (voir « Vos droits » ci-dessous). Si un devis débouche sur un chantier, les documents liés sont conservés selon les obligations comptables belges.",
      ],
      nl: [
        'Wij bewaren uw berichten zolang nodig om uw vraag te behandelen en op te volgen als een offerte tot een werf leidt. U kunt op elk moment vragen om ze te wissen (zie "Uw rechten" hieronder). Als een offerte tot een werf leidt, worden de bijbehorende documenten bewaard volgens de Belgische boekhoudkundige verplichtingen.',
      ],
    },
  },
  {
    titre: { fr: 'Cookies', nl: 'Cookies' },
    paragraphes: {
      fr: [
        "Ce site ne dépose aucun cookie de suivi et n'utilise aucun outil de mesure d'audience. Les polices de caractères sont hébergées sur le site : votre visite n'est signalée à aucun service extérieur.",
      ],
      nl: [
        'Deze website plaatst geen enkele trackingcookie en gebruikt geen enkel meetinstrument voor bezoekersaantallen. De lettertypes worden op de website zelf gehost: uw bezoek wordt aan geen enkele externe dienst gemeld.',
      ],
    },
  },
  {
    titre: { fr: 'Vos droits', nl: 'Uw rechten' },
    paragraphes: {
      fr: [
        'Vous pouvez à tout moment demander :',
      ],
      nl: [
        'U kunt op elk moment vragen om:',
      ],
    },
    liste: {
      fr: [
        'à consulter les données que nous avons sur vous',
        'à les faire corriger',
        'à les faire effacer',
        "à limiter ou à vous opposer à leur utilisation",
        'à les recevoir dans un format réutilisable',
      ],
      nl: [
        'de gegevens in te kijken die wij over u hebben',
        'ze te laten verbeteren',
        'ze te laten wissen',
        'het gebruik ervan te beperken of u ertegen te verzetten',
        'ze te ontvangen in een herbruikbaar formaat',
      ],
    },
  },
  {
    titre: { fr: 'Une réclamation', nl: 'Een klacht' },
    paragraphes: {
      fr: [
        "Si notre réponse ne vous satisfait pas, vous pouvez saisir l'Autorité de protection des données, rue de la Presse 35, 1000 Bruxelles — autoriteprotectiondonnees.be",
      ],
      nl: [
        'Als ons antwoord u niet voldoet, kunt u terecht bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel — gegevensbeschermingsautoriteit.be',
      ],
    },
  },
];
