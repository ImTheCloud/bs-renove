/**
 * Textes des pages Mentions légales et Vie privée.
 *
 * Base : Code des sociétés et des associations (art. 2:20), Code de droit
 * économique (livres III, VI et XII) et RGPD (art. 13). Les faits sur
 * l'entreprise viennent de src/data/entreprise.ts (vérifiés dans la BCE).
 *
 * Marques remplacées à l'affichage : {email}, {telephone}, {hebergeur}.
 */
import type { Langue } from '~/i18n';

export interface BlocLegal {
  titre: Record<Langue, string>;
  paragraphes?: Record<Langue, string[]>;
  liste?: Record<Langue, string[]>;
  /**
   * Bloc affiché seulement dans certains cas : « web3forms » si le formulaire
   * envoie par Web3Forms (clé configurée), « email » sinon, « hebergeur » si
   * l'hébergeur est renseigné dans src/data/entreprise.ts.
   */
  si?: 'web3forms' | 'email' | 'hebergeur';
}

export const mentionsLegales: BlocLegal[] = [
  {
    titre: { fr: 'Éditeur du site', nl: 'Uitgever van de website' },
    paragraphes: {
      fr: ['Ce site est édité par BS Renove SRL, société à responsabilité limitée de droit belge, dont les données figurent ci-dessus.'],
      nl: ['Deze website wordt uitgegeven door BS Renove BV, besloten vennootschap naar Belgisch recht, waarvan de gegevens hierboven staan.'],
    },
  },
  {
    titre: { fr: 'Activité', nl: 'Activiteit' },
    paragraphes: {
      fr: [
        "Entreprise générale de construction et de rénovation, active dans toute la Belgique. Activités enregistrées à la Banque-Carrefour des Entreprises : toiture, menuiserie, maçonnerie, plomberie, carrelage et travaux de construction spécialisés.",
      ],
      nl: [
        'Algemene bouw- en renovatieonderneming, actief in heel België. Activiteiten ingeschreven in de Kruispuntbank van Ondernemingen: dakwerken, schrijnwerk, metselwerk, loodgieterij, tegelwerk en gespecialiseerde bouwwerkzaamheden.',
      ],
    },
  },
  {
    titre: { fr: 'Hébergement', nl: 'Hosting' },
    si: 'hebergeur',
    paragraphes: {
      fr: ['Le site est hébergé par {hebergeur}. Il ne comporte ni base de données, ni espace de connexion.'],
      nl: ['De website wordt gehost door {hebergeur}. Hij heeft geen databank en geen inlogzone.'],
    },
  },
  {
    titre: { fr: 'Photographies', nl: "Foto's" },
    paragraphes: {
      fr: [
        "Les photographies présentent des chantiers réalisés par BS Renove. Elles sont publiées sans adresse ni élément permettant d'identifier le logement ou ses occupants : seule la commune est indiquée. Aucune image n'a été créée ou modifiée par intelligence artificielle ; certains détails (numéros de maison, visages) sont masqués.",
        "Vous reconnaissez votre logement ou vous-même et souhaitez qu'une photo soit retirée ? Écrivez à {email} : elle sera retirée dans les plus brefs délais.",
      ],
      nl: [
        "De foto's tonen werven uitgevoerd door BS Renove. Ze worden gepubliceerd zonder adres of element waarmee de woning of de bewoners herkend kunnen worden: enkel de gemeente wordt vermeld. Geen enkele afbeelding werd gemaakt of bewerkt met artificiële intelligentie; sommige details (huisnummers, gezichten) zijn gemaskeerd.",
        'Herkent u uw woning of uzelf en wilt u dat een foto verwijderd wordt? Schrijf naar {email}: ze wordt zo snel mogelijk verwijderd.',
      ],
    },
  },
  {
    titre: { fr: 'Propriété intellectuelle', nl: 'Intellectuele eigendom' },
    paragraphes: {
      fr: ['Les textes, photographies et illustrations de ce site appartiennent à BS Renove SRL. Toute reproduction sans autorisation écrite préalable est interdite.'],
      nl: ['De teksten, foto\'s en illustraties van deze website zijn eigendom van BS Renove BV. Elke reproductie zonder voorafgaande schriftelijke toestemming is verboden.'],
    },
  },
  {
    titre: { fr: 'Responsabilité', nl: 'Aansprakelijkheid' },
    paragraphes: {
      fr: [
        "Les informations de ce site sont données à titre indicatif. Les descriptions des métiers ne constituent pas une offre : seul un devis écrit et accepté engage l'entreprise. Le devis est gratuit et sans engagement.",
      ],
      nl: [
        'De informatie op deze website is louter indicatief. De beschrijvingen van de vakgebieden vormen geen aanbod: enkel een schriftelijke en aanvaarde offerte verbindt de onderneming. De offerte is gratis en vrijblijvend.',
      ],
    },
  },
];

export const viePrivee: BlocLegal[] = [
  {
    titre: { fr: 'Qui traite vos données', nl: 'Wie uw gegevens verwerkt' },
    paragraphes: {
      fr: ['Le responsable du traitement est BS Renove SRL, dont les coordonnées figurent ci-dessus. Pour toute question sur vos données : {email} ou {telephone}.'],
      nl: ['De verwerkingsverantwoordelijke is BS Renove BV, waarvan de gegevens hierboven staan. Voor elke vraag over uw gegevens: {email} of {telephone}.'],
    },
  },
  {
    titre: { fr: 'Ce que nous recevons', nl: 'Wat wij ontvangen' },
    paragraphes: {
      fr: ['Uniquement ce que vous nous envoyez vous-même :'],
      nl: ['Enkel wat u ons zelf stuurt:'],
    },
    liste: {
      fr: [
        'par le formulaire de devis : le type de travaux, votre nom, votre téléphone et, si vous les indiquez, votre email et la description de votre projet ;',
        'par téléphone, WhatsApp ou email : votre numéro ou votre adresse, vos messages et les photos que vous choisissez d’envoyer ;',
        "par le formulaire de candidature (page « Rejoindre l'équipe ») : votre métier, votre expérience, votre statut, vos langues, votre permis, votre disponibilité, votre nom, votre téléphone et, si vous les indiquez, votre email, votre commune et votre parcours.",
      ],
      nl: [
        'via het offerteformulier: het type werken, uw naam, uw telefoonnummer en, als u ze invult, uw e-mailadres en de beschrijving van uw project;',
        "via telefoon, WhatsApp of e-mail: uw nummer of adres, uw berichten en de foto's die u zelf stuurt;",
        'via het sollicitatieformulier (pagina « Word lid van ons team »): uw vak, uw ervaring, uw statuut, uw talen, uw rijbewijs, uw beschikbaarheid, uw naam, uw telefoonnummer en, als u ze invult, uw e-mailadres, uw gemeente en uw loopbaan.',
      ],
    },
  },
  {
    titre: { fr: 'Pourquoi, et sur quelle base', nl: 'Waarom, en op welke basis' },
    paragraphes: {
      fr: [
        "Ces informations servent uniquement à vous répondre, à préparer un devis et, s'il est accepté, à réaliser le chantier. Elles ne sont ni vendues, ni louées, ni utilisées pour de la publicité.",
        "Base légale : les mesures précontractuelles prises à votre demande (préparer un devis), et votre consentement, donné en cochant la case du formulaire, que vous pouvez retirer à tout moment. Si un devis débouche sur un chantier, les documents du chantier sont conservés en vertu des obligations comptables et fiscales belges.",
      ],
      nl: [
        'Deze gegevens dienen enkel om u te antwoorden, een offerte op te maken en, als ze aanvaard wordt, de werf uit te voeren. Ze worden niet verkocht, niet verhuurd en niet voor reclame gebruikt.',
        'Rechtsgrond: de precontractuele maatregelen op uw verzoek (een offerte opmaken), en uw toestemming, gegeven door het vakje van het formulier aan te vinken, die u op elk moment kunt intrekken. Als een offerte tot een werf leidt, worden de documenten van de werf bewaard volgens de Belgische boekhoudkundige en fiscale verplichtingen.',
      ],
    },
  },
  {
    titre: { fr: 'Par où passent-elles', nl: 'Langs waar gaan ze' },
    si: 'web3forms',
    paragraphes: {
      fr: [
        "Les formulaires (devis et candidature) sont transmis par Web3Forms, un service qui transforme votre demande en email et nous l'envoie. Web3Forms agit comme sous-traitant et traite les données sur des serveurs situés hors de l'Union européenne (États-Unis). En cochant la case du formulaire, vous consentez expressément à ce transfert (article 49 du RGPD).",
        "Un appel passe par votre opérateur téléphonique, un message WhatsApp par les services de Meta, chacun selon ses propres règles de confidentialité.",
      ],
      nl: [
        'De formulieren (offerte en sollicitatie) worden doorgestuurd via Web3Forms, een dienst die uw aanvraag omzet in een e-mail en naar ons stuurt. Web3Forms treedt op als verwerker en verwerkt de gegevens op servers buiten de Europese Unie (Verenigde Staten). Door het vakje van het formulier aan te vinken, geeft u uitdrukkelijk toestemming voor deze doorgifte (artikel 49 van de AVG).',
        'Een telefoontje verloopt via uw telefoonoperator, een WhatsApp-bericht via de diensten van Meta, elk volgens hun eigen privacyregels.',
      ],
    },
  },
  {
    titre: { fr: 'Par où passent-elles', nl: 'Langs waar gaan ze' },
    si: 'email',
    paragraphes: {
      fr: [
        "Les formulaires n'envoient rien eux-mêmes : ils ouvrent votre messagerie avec la demande déjà écrite, et c'est vous qui l'envoyez, depuis votre propre adresse email, vers la nôtre. Aucun service tiers n'intervient entre vous et nous.",
        "Un appel passe par votre opérateur téléphonique, un message WhatsApp par les services de Meta, chacun selon ses propres règles de confidentialité.",
      ],
      nl: [
        'De formulieren versturen zelf niets: ze openen uw mailprogramma met de aanvraag al ingevuld, en u verstuurt ze zelf, vanaf uw eigen e-mailadres, naar het onze. Er komt geen enkele derde dienst tussen u en ons.',
        'Een telefoontje verloopt via uw telefoonoperator, een WhatsApp-bericht via de diensten van Meta, elk volgens hun eigen privacyregels.',
      ],
    },
  },
  {
    titre: { fr: 'Combien de temps', nl: 'Hoe lang' },
    paragraphes: {
      fr: [
        "Une demande de devis sans suite est effacée au plus tard 3 ans après notre dernier échange. Une candidature est effacée au plus tard 1 an après sa réception, sauf si vous nous demandez de la garder plus longtemps. Si un devis débouche sur un chantier, les documents du chantier sont conservés pendant la durée imposée par la loi (7 ans pour les documents comptables).",
      ],
      nl: [
        'Een offerteaanvraag zonder gevolg wordt uiterlijk 3 jaar na ons laatste contact gewist. Een sollicitatie wordt uiterlijk 1 jaar na ontvangst gewist, tenzij u ons vraagt ze langer te bewaren. Als een offerte tot een werf leidt, worden de documenten van de werf bewaard gedurende de wettelijke termijn (7 jaar voor boekhoudkundige stukken).',
      ],
    },
  },
  {
    titre: { fr: 'Cookies et visite du site', nl: 'Cookies en bezoek aan de website' },
    paragraphes: {
      fr: [
        "Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience ni de publicité. Les polices de caractères sont hébergées sur le site : votre visite n'est signalée à aucun service extérieur. Comme pour tout site, l'hébergeur enregistre techniquement l'adresse IP des visiteurs pour faire fonctionner et protéger le site.",
      ],
      nl: [
        'Deze website plaatst geen cookies en gebruikt geen enkel meet- of reclamehulpmiddel. De lettertypes worden op de website zelf gehost: uw bezoek wordt aan geen enkele externe dienst gemeld. Zoals voor elke website registreert de hostingprovider technisch het IP-adres van de bezoekers om de website te laten werken en te beveiligen.',
      ],
    },
  },
  {
    titre: { fr: 'Vos droits', nl: 'Uw rechten' },
    paragraphes: {
      fr: ['Vous pouvez à tout moment nous demander, à {email} :'],
      nl: ['U kunt ons op elk moment vragen, via {email}:'],
    },
    liste: {
      fr: [
        'de consulter les données que nous avons sur vous',
        'de les corriger',
        'de les effacer',
        "d'en limiter l'utilisation ou de vous y opposer",
        'de les recevoir dans un format réutilisable',
        'de retirer votre consentement',
      ],
      nl: [
        'de gegevens in te kijken die wij over u hebben',
        'ze te verbeteren',
        'ze te wissen',
        'het gebruik ervan te beperken of u ertegen te verzetten',
        'ze te ontvangen in een herbruikbaar formaat',
        'uw toestemming in te trekken',
      ],
    },
  },
  {
    titre: { fr: 'Une réclamation', nl: 'Een klacht' },
    paragraphes: {
      fr: ["Si notre réponse ne vous satisfait pas, vous pouvez saisir l'Autorité de protection des données, rue de la Presse 35, 1000 Bruxelles — autoriteprotectiondonnees.be"],
      nl: ['Als ons antwoord u niet voldoet, kunt u terecht bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel — gegevensbeschermingsautoriteit.be'],
    },
  },
];
