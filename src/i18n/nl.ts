/**
 * Tous les textes d'interface en néerlandais.
 * À FAIRE RELIRE PAR UN NÉERLANDOPHONE NATIF (voir docs/contenu-manquant.md).
 * Néerlandais standard de Belgique, vouvoiement avec « u ».
 * Les noms de clés restent en français : seules les valeurs sont traduites.
 */
import type { Traductions } from './fr';

export const nl: Traductions = {
  code: 'nl',
  htmlLang: 'nl-BE',
  nomLangue: 'Nederlands',

  nav: {
    services: 'Diensten',
    realisations: 'Realisaties',
    apropos: 'Over ons',
    contact: 'Contact',
  },

  actions: {
    devis: 'Offerte aanvragen',
    whatsapp: 'Schrijf ons op WhatsApp',
    whatsappCourt: 'WhatsApp',
    appeler: 'Bellen',
    appelerLong: 'of bel',
  },

  whatsappMessage: 'Hallo, ik zou graag een offerte voor…',

  entete: {
    accueilAria: 'BS Renove, startpagina',
    tagline: 'Algemene aannemer',
    ouvrirMenu: 'Menu openen',
    fermerMenu: 'Menu sluiten',
    menuAria: 'Hoofdmenu',
    menu: 'Menu',
    contactDirect: 'Contacteer ons',
  },

  langues: {
    choisirAria: 'Taal kiezen',
    versNl: 'Deze pagina in het Nederlands lezen',
    versFr: 'Deze pagina in het Frans lezen',
  },

  piedDePage: {
    siege: 'Maatschappelijke zetel',
    tva: 'btw',
    mentionsLegales: 'Juridische informatie',
    viePrivee: 'Privacy',
    rejoindre: 'Word lid van ons team',
    droits: 'Alle rechten voorbehouden',
    projet: 'Een project in gedachten?',
  },

  accessibilite: {
    allerAuContenu: 'Naar de inhoud',
  },

  enConstruction: {
    etiquette: 'In opbouw',
    texte: 'Deze pagina komt binnenkort. Bel ons ondertussen of schrijf ons op WhatsApp',
  },

  aConfirmer: 'TE BEVESTIGEN',

  photos: {
    aVenir: 'Foto volgt',
    principale: 'De mooiste realisatie, in liggend formaat',
    service: 'Foto van de dienst',
    avant: 'Foto voor',
    apres: 'Foto na, zelfde hoek',
    gerant: 'Foto van Sergiu op een werf',
  },

  accueil: {
    hero: {
      surtitre: 'Algemene aannemer · Heel België',
      titreDebut: 'Uw woning,',
      titreSerif: 'vernieuwd',
      titreFin: 'van A tot Z.',
      texte:
        'Badkamer, keuken, dak, tegelwerk… Eén aanspreekpunt voor uw hele werf, van de eerste offerte tot de laatste afwerking.',
      faits: ['12 jaar ervaring', 'Gratis offerte', 'Nederlands · Français'],
      maisonAria: 'Tekening van een huis in doorsnede: elke ruimte leidt naar de bijhorende dienst',
      maisonAide: 'Tik op een ruimte',
      maisonAideSouris: 'Beweeg over een ruimte',
      maisonTout: 'en al de rest!',
      pieces: {
        toiture: 'het dak',
        'salles-de-bain': 'de badkamer',
        cuisines: 'de keuken',
        carrelage: 'het tegelwerk',
        electricite: 'de elektriciteit',
        'peinture-finitions': 'het schilderwerk',
        'maconnerie-facades': 'muren & gevels',
      },
      defiler: 'Scrollen',
    },

    bandeauAria: 'Onze vakgebieden',

    avantApres: {
      surtitre: 'Voor, na',
      titreDebut: 'Dezelfde ruimte.',
      titreSerif: 'Een nieuw leven.',
      texte:
        'Scroll verder, of neem de schuifknop vast: de oude badkamer maakt plaats voor die van vandaag.',
      noteAvant: 'de dag dat we aankomen…',
      noteApres: '… en de dag dat we vertrekken!',
      voirProjet: 'Bekijk deze werf',
      voirTout: 'Alle voor/na-foto’s',
      autresProjets: 'Andere projecten',
      avant: 'Voor',
      apres: 'Na',
      curseurLabel: 'Voor en na vergelijken',
      curseurAide: 'Gebruik de pijltjestoetsen links en rechts om te vergelijken',
    },

    services: {
      surtitre: 'Onze vakgebieden',
      titreDebut: 'Alles wat een huis',
      titreSerif: 'nodig heeft.',
      texte:
        'Eén vak of het hele huis: wij coördineren de vakmensen, intern of met onze vertrouwde zelfstandigen.',
      voirTout: 'Al onze diensten',
    },

    chiffres: {
      surtitre: 'In een paar cijfers',
      items: [
        { valeur: 12, prefixe: '', suffixe: '', texte: 'jaar ervaring in de bouw' },
        { valeur: 12, prefixe: '±', suffixe: '', texte: 'mensen op onze werven, met onze zelfstandigen' },
        { valeur: 1, prefixe: '', suffixe: '', texte: 'aanspreekpunt, van offerte tot afwerking' },
        { valeur: 0, prefixe: '', suffixe: ' €', texte: 'voor de offerte: gratis en gedetailleerd' },
      ],
    },

    methode: {
      surtitre: 'Hoe het verloopt',
      titreDebut: 'Eenvoudig,',
      titreSerif: 'van begin tot einde.',
      etapes: [
        {
          titre: 'U vertelt ons uw plan',
          texte:
            'Via telefoon, WhatsApp of het formulier. Een paar foto’s van de ruimte helpen ons al enorm.',
        },
        {
          titre: 'We bekijken het samen',
          texte:
            'We overlopen wat u wilt en in welke staat de ruimte is, ter plaatse als dat nodig is.',
        },
        {
          titre: 'Gratis, gedetailleerde offerte',
          texte: 'U krijgt een duidelijke offerte, vrijblijvend, om met kennis van zaken te beslissen.',
        },
        {
          titre: 'Eén aanspreekpunt',
          texte:
            'Wij coördineren alle vakmensen en volgen de werf op tot de laatste afwerking.',
        },
      ],
    },

    projets: {
      surtitre: 'Realisaties',
      titreDebut: 'Werven,',
      titreSerif: 'geen beloftes.',
      voirTout: 'Alle realisaties',
      glisser: 'schuif →',
      aideSouris: 'Beweeg over een foto om het resultaat te zien',
      aideToucher: 'Tik op een foto om het resultaat te zien',
      basculer: 'Voor of na tonen',
    },

    faq: {
      surtitre: 'Veelgestelde vragen',
      titreDebut: 'Uw vragen,',
      titreSerif: 'onze antwoorden.',
      autreQuestion: 'Een andere vraag? Bel ons op',
      items: [
        {
          q: 'Werkt u ook in mijn buurt?',
          r: 'Wij zijn gevestigd in Denderleeuw en werken in heel België.',
        },
        {
          q: 'Is de offerte betalend?',
          r: 'Nee, de offerte is gratis en gedetailleerd. Om ze op te maken helpt het vooral als u de werken beschrijft en, indien mogelijk, een paar foto’s stuurt.',
        },
        {
          q: 'Heb ik meerdere aannemers nodig voor een volledige renovatie?',
          r: 'Nee. BS Renove is een algemene aannemer: wij coördineren alle vakmensen, intern of met onze zelfstandigen. U hebt één aanspreekpunt van begin tot einde.',
        },
        {
          q: 'Spreekt u Nederlands?',
          r: 'Ja. U kunt ons aanspreken in het Nederlands of in het Frans, via telefoon, WhatsApp of e-mail.',
        },
        {
          q: 'Hoe stuur ik foto’s van mijn werf?',
          r: 'Het eenvoudigst is via WhatsApp. Foto’s van de ruimte en een paar afmetingen helpen ons uw project te begrijpen, nog voor we elkaar zien.',
        },
      ],
    },

    devis: {
      surtitre: 'Gratis offerte',
      titreDebut: 'Laten we praten over',
      titreSerif: 'uw project.',
      texte:
        'Drie korte stappen, twee minuten. Haast? Bel ons of schrijf ons rechtstreeks.',
      direct: 'Rechtstreeks',
    },

    pourquoi: {
      surtitre: 'Waarom BS Renove',
      titre: 'Eén project. Eén aanspreekpunt',
      texte:
        'Wij begeleiden u bij elke stap van uw project, voor een duidelijke en efficiënte uitvoering, zonder onaangename verrassingen',
      points: [
        'Gratis en gedetailleerde offerte',
        'Opvolging van de werf',
        'Eén aanspreekpunt',
        'Kwaliteitsmaterialen',
        'Team van een twaalftal mensen',
      ],
    },

    contact: {
      titre: 'Hebt u een project? Laten we erover praten',
      texte:
        'Bouwen, renoveren of verbouwen: leg ons uw project uit en ontvang een eerste raming',
      labelTelephone: 'Telefoon',
      labelEmail: 'E-mail',
      labelZone: 'Werkgebied',
      valeurZone: 'Heel België',
    },
  },

  formulaire: {
    etape: 'Stap',
    sur: 'van',
    etapes: ['Uw werken', 'Uw project', 'Uw gegevens'],

    q1: 'Aan welke werken denkt u?',
    q1Aide: 'Meerdere keuzes mogelijk',
    autre: 'Iets anders',

    q2: 'Vertel ons over uw project',
    commune: 'Gemeente van de werf',
    communeAide: 'Enkel de gemeente, geen adres nodig',
    delai: 'Wanneer wilt u beginnen?',
    delais: ['Zo snel mogelijk', 'Binnen 3 maanden', 'Binnen 6 maanden', 'Nog niet beslist'],
    message: 'Uw project in een paar woorden',
    messageAide: 'Niet verplicht, maar het helpt ons de offerte voor te bereiden',
    messageExemple:
      'Bv.: de badkamer boven vernieuwen, ongeveer 6 m², een inloopdouche in plaats van het bad…',

    q3: 'Waar kunnen we u antwoorden?',
    nom: 'Uw naam',
    telephone: 'Telefoon',
    email: 'E-mail',
    consentement: 'Ik ga ermee akkoord dat mijn gegevens gebruikt worden om mijn vraag te beantwoorden.',
    consentementLien: 'Privacy',

    suivant: 'Verder',
    precedent: 'Terug',
    envoyer: 'Mijn aanvraag versturen',
    envoiEnCours: 'Versturen…',
    obligatoire: 'verplicht',
    facultatif: 'niet verplicht',

    erreurChoix: 'Kies minstens één type werken.',
    erreurChamp: 'Dit veld is verplicht.',
    erreurEmail: 'Dit e-mailadres lijkt niet volledig.',
    erreurConsentement: 'Vink het vakje aan zodat wij u kunnen antwoorden.',

    merciTitre: 'Bedankt, het is verstuurd!',
    merciTexte:
      'Uw aanvraag is goed vertrokken. Hebt u foto’s van de werf? Stuur ze via WhatsApp, dat helpt het meest om de offerte voor te bereiden.',
    merciWhatsApp: 'Foto’s versturen',
    recommencer: 'Nieuwe aanvraag',

    secoursTitre: 'Bijna klaar!',
    secoursLien: 'E-mail openen',
    secoursTexte:
      'Uw mailprogramma opent met uw aanvraag al ingevuld: u hoeft ze enkel nog te versturen. Opent er niets? Bel ons of schrijf ons op WhatsApp.',

    erreurTitre: 'Het versturen is mislukt.',
    erreurTexte: 'U kunt het opnieuw proberen, of ons rechtstreeks bellen op',

    sujetEmail: 'Offerteaanvraag via de website',
    recap: {
      travaux: 'Werken',
      commune: 'Gemeente',
      delai: 'Gewenste start',
      message: 'Project',
      nom: 'Naam',
      telephone: 'Telefoon',
      email: 'E-mail',
    },
  },

  realisations: {
    surtitre: 'Realisaties',
    titre: 'Werven, geen beloftes',
    intro:
      'Versleep de schuifknop om het verschil te zien. Filter op ruimte om direct te vinden wat u zoekt',
    voirLeProjet: 'Bekijk de volledige werf',
    commune: 'Gemeente',
    service: 'Type werken',
    duree: 'Duur',
    semaines: 'weken',
    aucun: 'De eerste voor/na-foto’s volgen binnenkort',
    toutes: 'Alles bekijken',
    filtrerAria: 'Filteren op type ruimte',
  },

  aProposPage: {
    surtitre: 'Over ons',
    titre: 'Eén project. Eén aanspreekpunt',
    intro:
      'BS Renove SRL is een algemene renovatieonderneming met zetel in Denderleeuw, actief in heel België. Of het nu om een volledige werf of één vakgebied gaat, wij coördineren alles zelf: u hebt maar één persoon nodig, van de eerste tot de laatste dag',
    capacitesTitre: 'Wat wij kunnen doen',
    capacitesIntro:
      'Alle vakgebieden van een renovatie, intern of met onze vertrouwde zelfstandigen',
  },

  rejoindreEquipe: {
    surtitre: 'Word lid van ons team',
    titre: 'Wilt u met ons werken',
    intro:
      'Stuur ons uw kandidatuur, met uw vak en uw ervaring. Wij nemen contact op als een profiel zoals het uwe ons interesseert',
    candidatureTitre: 'Kandidatuur versturen per email',
    candidatureTexte:
      'Eén klik opent uw mailprogramma met een kant-en-klare email: u hoeft alleen nog uw gegevens en ervaring aan te vullen',
    bouton: 'Mijn kandidatuur versturen',
    sujetEmail: 'Kandidatuur',
    corpsEmail:
      'Hallo,\n\nIk wil graag bij het team van BS Renove komen werken.\n\nNaam: \nTelefoon: \nVak / ervaring: \nBeschikbaarheid: \n\n\nAlvast bedankt,',
  },

  projet: {
    retour: 'Alle realisaties',
    avantApres: 'Voor, na',
    recitTitre: 'De werf',
    depart: 'Bij de start',
    travaux: 'De werken',
    resultat: 'Het resultaat',
    galerie: 'In beeld',
    agrandir: 'Foto vergroten',
    fermer: 'Sluiten',
    precedente: 'Vorige foto',
    suivante: 'Volgende foto',
    similaireTitre: 'Een gelijkaardig project?',
    similaireTexte:
      'Vertel ons wat u in gedachten hebt, wij komen bij u terug met een eerste raming',
  },

  servicesPage: {
    surtitre: 'Onze diensten',
    titre: 'Wat wij doen',
    intro:
      'Een algemene aannemer, dus één aanspreekpunt van de eerste offerte tot de laatste afwerking',
    grilleTitre: 'Al onze werken',
    grilleIntro: 'Een overzicht van onze vakgebieden, klik op een kaart voor de details',
    exemplesTitre: 'Bijvoorbeeld',
    projetsLies: 'Bekijk de voor/na-foto’s',
    devisPour: 'Offerte aanvragen',
  },

  contactPage: {
    surtitre: 'Contact',
    titre: 'Laten we over uw project praten',
    intro:
      'Beschrijf ons wat u in gedachten hebt. Wij komen bij u terug met een eerste raming',
    devisTitre: 'Offerte aanvragen via email',
    devisTexte:
      'Eén klik opent uw mailprogramma met een kant-en-klare email: u hoeft enkel uw gegevens en uw project te beschrijven',
    ouTitre: 'Sneller',
    ouTexte: 'Telefoon en WhatsApp blijven het meest rechtstreeks',
  },

  /** Onderwerp en inhoud van de vooraf ingevulde mail achter elke "offerte"-knop. */
  devisEmail: {
    sujet: 'Offerteaanvraag',
    corps: `Hallo,

Ik zou graag een offerte ontvangen voor de volgende werken:

Naam:
Telefoon:
Gemeente van de werf:
Type werken:
Beschrijving van het project:


Alvast bedankt,`,
  },

  legal: {
    aRelire: 'NA TE LEZEN',
    aRelireTexte:
      'Deze teksten zijn een vertrekpunt. Ze moeten worden nagelezen en goedgekeurd vóór de publicatie',
    identite: 'De onderneming',
    nomLegal: 'Benaming',
    formeJuridique: 'Rechtsvorm',
    formeJuridiqueValeur: 'Besloten vennootschap (BV/SRL)',
    gerant: 'Zaakvoerder',
    siege: 'Maatschappelijke zetel',
    entreprise: 'Ondernemings- en btw-nummer',
    rpm: 'RPR',
    telephone: 'Telefoon',
    email: 'E-mail',
    majLe: 'Laatst bijgewerkt',
    majValeur: '21 september 2026',
  },

  pages: {
    accueil: {
      titre: 'BS Renove · Algemene aannemer voor renovatie in België',
      description:
        'Badkamers, keukens, tegelwerk, dakwerken en metselwerk. Wij begeleiden uw werf van de eerste offerte tot de laatste afwerking.',
    },
    services: {
      titre: 'Onze diensten · BS Renove',
      description:
        'Volledige renovatie, badkamers, keukens, tegelwerk, dakwerken, metselwerk, elektriciteit en schilderwerk.',
    },
    realisations: {
      titre: 'Onze realisaties · BS Renove',
      description: 'Enkele recente werven in beeld, voor en na.',
    },
    contact: {
      titre: 'Contact en offerte · BS Renove',
      description:
        'Leg ons uw project uit en ontvang een eerste raming. Via telefoon, WhatsApp of email.',
    },
    apropos: {
      titre: 'Over ons · BS Renove',
      description:
        'Algemene renovatieonderneming in Denderleeuw, actief in heel België: alle vakgebieden, één aanspreekpunt.',
    },
    rejoindre: {
      titre: 'Word lid van ons team · BS Renove',
      description: 'Stuur uw kandidatuur naar BS Renove, algemene renovatieonderneming.',
    },
    mentionsLegales: {
      titre: 'Juridische informatie · BS Renove',
      description: 'Juridische gegevens van BS Renove SRL.',
    },
    viePrivee: {
      titre: 'Privacy · BS Renove',
      description: 'Hoe BS Renove uw persoonsgegevens verwerkt.',
    },
    erreur404: {
      titre: 'Pagina niet gevonden',
      description: 'Deze pagina bestaat niet of werd verplaatst.',
      h1: 'Deze pagina bestaat niet',
      texte: 'De link is misschien verouderd, of het adres bevat een fout',
      retour: 'Terug naar de startpagina',
    },
  },
};
