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
    titre: { fr: 'Ce que nous collectons', nl: 'Wat wij verzamelen' },
    paragraphes: {
      fr: [
        'Uniquement ce que vous écrivez vous-même dans le formulaire de demande de devis :',
      ],
      nl: [
        'Enkel wat u zelf in het offerteformulier invult:',
      ],
    },
    liste: {
      fr: [
        'votre nom',
        'votre numéro de téléphone',
        'votre adresse email',
        'la commune du chantier',
        'le type de travaux',
        'le message que vous rédigez',
      ],
      nl: [
        'uw naam',
        'uw telefoonnummer',
        'uw e-mailadres',
        'de gemeente van de werf',
        'het type werken',
        'het bericht dat u schrijft',
      ],
    },
  },
  {
    titre: { fr: 'Pourquoi', nl: 'Waarom' },
    paragraphes: {
      fr: [
        "Ces informations servent uniquement à répondre à votre demande et à établir un devis. Elles ne sont ni vendues, ni louées, ni utilisées pour de la publicité.",
        "La base légale du formulaire est votre consentement, donné en cochant sa case : vous pouvez le retirer à tout moment, ce qui entraîne l'effacement de votre demande. Si un devis débouche sur un chantier, les documents liés à ce chantier reposent sur une autre base, une obligation légale (la comptabilité belge), qui ne dépend pas de ce consentement et ne peut pas être effacée sur demande.",
      ],
      nl: [
        'Deze gegevens dienen uitsluitend om uw vraag te beantwoorden en een offerte op te maken. Ze worden niet verkocht, niet verhuurd en niet voor reclame gebruikt.',
        'De rechtsgrond van het formulier is uw toestemming, gegeven door het vakje aan te vinken: u kunt ze op elk moment intrekken, wat leidt tot het wissen van uw aanvraag. Als een offerte tot een werf leidt, berusten de documenten van die werf op een andere grond, een wettelijke verplichting (de Belgische boekhouding), die niet van deze toestemming afhangt en niet op verzoek kan worden gewist.',
      ],
    },
  },
  {
    titre: { fr: 'Par où passent-elles', nl: 'Langs waar gaan ze' },
    paragraphes: {
      fr: [
        "Le formulaire est transmis par Web3Forms, un service qui transforme votre message en email et nous l'envoie. Web3Forms agit comme sous-traitant et traite les données sur des serveurs situés hors de l'Union européenne (États-Unis). Le service peut en conserver une copie technique limitée dans le temps ; il ne l'utilise pas à d'autres fins que cette transmission. [À CONFIRMER : la garantie de transfert requise par le RGPD avec ce prestataire n'est pas encore formalisée — voir docs/contenu-manquant.md.]",
        "Le message nous parvient ensuite par email, sur la boîte de l'entreprise.",
        "Si vous nous contactez par téléphone ou par WhatsApp plutôt que par le formulaire, cet échange (votre numéro, vos messages, vos éventuelles photos) passe par les services de l'opérateur téléphonique et de WhatsApp (Meta), selon leurs propres règles de confidentialité, et nous ne l'utilisons que pour répondre à votre demande.",
      ],
      nl: [
        'Het formulier wordt doorgestuurd via Web3Forms, een dienst die uw bericht omzet in een e-mail en naar ons verstuurt. Web3Forms treedt op als verwerker en verwerkt de gegevens op servers buiten de Europese Unie (Verenigde Staten). De dienst kan een technische kopie gedurende beperkte tijd bewaren; hij gebruikt ze niet voor andere doeleinden dan deze verzending. [TE BEVESTIGEN: de door de AVG vereiste overdrachtsgarantie met deze leverancier is nog niet geformaliseerd — zie docs/contenu-manquant.md.]',
        'Het bericht komt vervolgens per e-mail bij ons toe, op de mailbox van de onderneming.',
        'Als u ons contacteert via telefoon of WhatsApp in plaats van het formulier, verloopt die uitwisseling (uw nummer, uw berichten, eventuele foto’s) via de diensten van de telefoonoperator en van WhatsApp (Meta), volgens hun eigen privacyregels, en gebruiken wij ze enkel om uw vraag te beantwoorden.',
      ],
    },
  },
  {
    titre: { fr: 'Combien de temps', nl: 'Hoe lang' },
    paragraphes: {
      fr: [
        "[À CONFIRMER : durée de conservation]. Passé ce délai, les échanges sont supprimés. Si un devis débouche sur un chantier, les documents liés sont conservés selon les obligations comptables belges.",
      ],
      nl: [
        '[TE BEVESTIGEN: bewaartermijn]. Na die termijn worden de uitwisselingen verwijderd. Als een offerte tot een werf leidt, worden de bijbehorende documenten bewaard volgens de Belgische boekhoudkundige verplichtingen.',
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
        'à retirer votre consentement',
      ],
      nl: [
        'de gegevens in te kijken die wij over u hebben',
        'ze te laten verbeteren',
        'ze te laten wissen',
        'het gebruik ervan te beperken of u ertegen te verzetten',
        'ze te ontvangen in een herbruikbaar formaat',
        'uw toestemming in te trekken',
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
