/**
 * Tous les textes d'interface en néerlandais.
 * Néerlandais standard de Belgique, vouvoiement avec « u ».
 * Les noms de clés restent en français : seules les valeurs sont traduites.
 */
import type { Traductions } from './fr';

export const nl: Traductions = {
  code: 'nl',
  htmlLang: 'nl-BE',

  nav: {
    services: 'Diensten',
    realisations: 'Realisaties',
    apropos: 'Over ons',
    contact: 'Contact',
  },

  actions: {
    devis: 'Offerte aanvragen',
    gratuit: 'Gratis offerte',
    whatsapp: 'Schrijf ons op WhatsApp',
    appeler: 'Bellen',
  },

  deuxPoints: ': ',

  whatsappMessage: 'Hallo, ik zou graag een offerte voor…',

  entete: {
    accueilAria: 'BS Renove, startpagina',
    tagline: 'Algemene aannemer',
    ouvrirMenu: 'Menu openen',
    fermerMenu: 'Menu sluiten',
    menuAria: 'Hoofdmenu',
    menu: 'Menu',
    fermer: 'Sluiten',
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
    zone: 'van Denderleeuw tot heel België',
    entreprise: 'De onderneming',
    credit: 'Website ontworpen door',
    creditQuestion: 'Een website zoals deze?',
    creditSujet: 'Een website zoals die van BS Renove',
  },

  accessibilite: {
    allerAuContenu: 'Naar de inhoud',
  },


  accueil: {
    hero: {
      surtitre: 'Algemene aannemer · Heel België',
      titreDebut: 'Uw woning,',
      titreSerif: 'vernieuwd',
      titreFin: 'van A tot Z.',
      texte:
        'Badkamer, keuken, dak, tegelwerk… Wij nemen uw hele werf voor onze rekening, van de eerste offerte tot de laatste afwerking.',
      devisGratuit: 'Gratis offerte aanvragen',
      experience: 'jaar ervaring',
      experienceDetail: 'van onze zaakvoerder, Sergiu Bivol, in de bouw',
      origine: { b: ' van Bivol,', s: ' van Sergiu:', fin: 'vandaar BS Renove' },
      maisonAria: 'Tekening van een huis in doorsnede: elke ruimte leidt naar de bijhorende dienst',
      maisonAide: 'Tik op een ruimte',
      maisonAideSouris: 'Klik op een ruimte',
      nuit: 'Het huis in nachtmodus zetten',
      jour: 'Terug naar de dag',
      noteNuit: 'en ’s nachts?',
      noteJour: 'en overdag?',
      maisonTout: 'en al de rest!',
      ficheFermer: 'Sluiten',
      fichePlus: 'Bekijk dit vak',
      ficheAutre: 'Probeer een andere ruimte!',
      fichePhotoSeule: 'Wat u na de werken niet meer ziet',
      fiches: {
        cave: 'Tegelwerk van de vloer en de technische ruimte: een gezonde kelder die makkelijk te onderhouden is.',
        auvent: 'Het kleine dak boven de voordeur, van isolatie tot pannen.',
        allee: 'De oprit, van grondwerk tot gelegde kasseien.',
      },
      pieces: {
        toiture: 'het dak',
        'salles-de-bain': 'de badkamer',
        cuisines: 'de keuken',
        carrelage: 'het tegelwerk',
        escaliers: 'de trap',
        terrasses: 'het terras',
        cave: 'de kelder',
        auvent: 'het kleine dak',
        plomberie: 'de loodgieterij',
        allee: 'de oprit',
        electricite: 'de elektriciteit',
        'peinture-finitions': 'het schilderwerk',
        'maconnerie-extensions': 'het metselwerk',
      },
      defiler: 'Scrollen',
    },

    bandeauAria: 'Onze vakgebieden',

    avantApres: {
      surtitre: 'Voor, na',
      titreDebut: 'Dezelfde ruimte.',
      titreSerif: 'Een nieuw leven.',
      texte:
        'Versleep de schuifknop: de badkamer midden in de werken maakt plaats voor het resultaat.',
      noteAvant: 'midden in de werken…',
      noteApres: '… en bijna klaar!',
      voirTout: 'Alle voor/na-foto’s',
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
        { valeur: 12, prefixe: '', suffixe: '', mot: '', texte: 'jaar ervaring van onze zaakvoerder in de bouw' },
        { valeur: 0, prefixe: '', suffixe: '', mot: '', texte: 'vakgebieden: tegelwerk, loodgieterij, trappen, dakwerken…' },
        { valeur: 0, prefixe: '', suffixe: '', mot: 'Gratis', texte: 'de offerte' },
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
          titre: 'De werf, tot het einde',
          texte:
            'Wij coördineren alle vakmensen en volgen de werf op tot de laatste afwerking.',
        },
      ],
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
          q: "Is de offerte gratis?",
          r: "Ja, de offerte is gratis, gedetailleerd en vrijblijvend. Om ze op te maken helpt het vooral als u de werken beschrijft en, indien mogelijk, een paar foto’s stuurt.",
        },
        {
          q: "Hoeveel kost een renovatie?",
          r: "Elke werf is anders: de prijs hangt af van de werken, de oppervlakte en de gekozen materialen. Daarom maken wij een gedetailleerde, gratis offerte voor uw project.",
        },
        {
          q: "Kunt u ook één soort werk doen?",
          r: "Ja. Een badkamer, een dak, een trap… of het hele huis: wij nemen zowel één vak als een volledige werf aan.",
        },
        {
          q: 'Heb ik meerdere aannemers nodig voor een volledige renovatie?',
          r: 'Nee. BS Renove is een algemene aannemer: wij coördineren alle vakmensen, intern of met onze zelfstandigen.',
        },
        {
          q: "Hoe verloopt een werf bij u?",
          r: "U vertelt ons over uw project, samen bekijken we wat u wilt en de huidige toestand, u krijgt een gedetailleerde offerte, en wij volgen de werf op tot de laatste afwerking.",
        },
        {
          q: "Hoe lang duren de werken?",
          r: "Dat hangt af van de omvang van de werf. We bespreken het met u bij de offerte, zodat u weet wat u kunt verwachten.",
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
        'Twee korte stappen, één minuut. Haast? Bel ons of schrijf ons rechtstreeks.',
      direct: 'Rechtstreeks',
    },

    pourquoi: {
      surtitre: 'Waarom BS Renove',
      texte:
        'Wij begeleiden u bij elke stap van uw project, voor een duidelijke en efficiënte uitvoering, zonder onaangename verrassingen',
      points: [
        'Gratis en gedetailleerde offerte',
        'Opvolging van de werf',
        'Kwaliteitsmaterialen',
        'Team van een twaalftal mensen',
      ],
    },

    contact: {
      labelTelephone: 'Telefoon',
      labelEmail: 'E-mail',
      labelZone: 'Werkgebied',
      valeurZone: 'Heel België',
    },
  },

  formulaire: {
    etape: 'Stap',
    sur: 'van',
    etapes: ['Uw werken', 'Uw gegevens'],

    q1: 'Aan welke werken denkt u?',
    q1Aide: 'Meerdere keuzes mogelijk',
    autre: 'Iets anders',

    message: 'Uw project in een paar woorden',
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
    facultatif: 'niet verplicht',

    erreurChoix: 'Kies minstens één type werken.',
    erreurChamp: 'Dit veld is verplicht.',
    erreurEmail: 'Dit e-mailadres lijkt niet volledig.',
    erreurConsentement: 'Vink het vakje aan zodat wij u kunnen antwoorden.',

    merciTitre: 'Bedankt, het is verstuurd!',
    merciTexte:
      'Uw aanvraag is goed vertrokken. Hebt u foto’s van de werf? Stuur ze via WhatsApp of e-mail, dat helpt het meest om de offerte voor te bereiden. Uw aanvraag staat er al in.',
    merciWhatsApp: 'Foto’s versturen',
    merciEmail: 'Via e-mail',
    photosIntro: 'Hallo, hier zijn foto’s voor mijn offerteaanvraag via de website:',
    sujetPhotos: 'Foto’s voor mijn offerteaanvraag',
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
    aucun: 'De eerste voor/na-foto’s volgen binnenkort',
    toutes: 'Alles bekijken',
    filtrerAria: 'Filteren op type ruimte',
  },

  aProposPage: {
    surtitre: 'Over ons',
    titre: 'Renoveren is ons vak',
    intro:
      'BS Renove SRL is een algemene renovatieonderneming met zetel in Denderleeuw, actief in heel België. Of het nu om een volledige werf of één vakgebied gaat, wij coördineren alles zelf, van de eerste tot de laatste dag',
    capacitesTitre: 'Wat wij kunnen doen',
    capacitesIntro:
      'Alle vakgebieden van een renovatie, intern of met onze vertrouwde zelfstandigen',
  },

  rejoindreEquipe: {
    surtitre: 'Word lid van ons team',
    titreDebut: 'Laten we',
    titreSerif: 'samenwerken.',
    texte:
      'Tegelzetter, loodgieter, dakdekker, metselaar… Vier korte stappen om u voor te stellen. Eerst een vraag? Bel ons of schrijf ons rechtstreeks.',
    whatsappMessage: 'Hallo, ik zou graag bij het team van BS Renove komen werken…',
    etapes: ['Uw vak', 'Uw ervaring', 'Op de werf', 'Uw gegevens'],
    q1: 'Welk vak oefent u uit?',
    q1Aide: 'Meerdere keuzes mogelijk',
    metiers: {
      carreleur: 'Tegelzetter',
      plombier: 'Loodgieter',
      electricien: 'Elektricien',
      couvreur: 'Dakdekker',
      macon: 'Metselaar',
      peintre: 'Schilder',
      menuisier: 'Schrijnwerker',
      plafonneur: 'Plafonneerder',
      cuisiniste: 'Keukenplaatser',
      chefChantier: 'Werfleider',
      polyvalent: 'Allround bouwvakker',
      autre: 'Ander vak',
    },
    q2: 'Uw ervaring',
    experience: 'Sinds hoelang?',
    experiences: ['Minder dan 2 jaar', '2 tot 5 jaar', '5 tot 10 jaar', 'Meer dan 10 jaar'],
    statut: 'U bent',
    statuts: ['Werknemer', 'Zelfstandige', 'Uitzendkracht', 'In opleiding'],
    recherche: 'U zoekt',
    recherches: ['Een voltijdse job', 'Een deeltijdse job', 'Losse opdrachten'],
    disponibilite: 'Beschikbaar',
    disponibilites: ['Meteen', 'Binnen de maand', 'Later'],
    q3: 'Op de werf',
    permis: 'Rijbewijs',
    vehicule: 'Eigen voertuig',
    outils: 'Eigen gereedschap',
    outilsChoix: ['Ja', 'Gedeeltelijk', 'Nee'],
    vca: 'VCA-attest (veiligheid)',
    vcaChoix: ['Ja', 'Bezig', 'Nee'],
    deplacements: 'Hoe ver kunt u zich verplaatsen?',
    deplacementsChoix: ['Dicht bij huis', 'In mijn provincie', 'Heel België'],
    langues: 'Talen',
    languesChoix: ['Frans', 'Nederlands', 'Engels', 'Roemeens'],
    languesAutres: 'Andere talen',
    languesAutresExemple: 'Bv.: Italiaans, Portugees…',
    oui: 'Ja',
    non: 'Nee',
    q4: 'Waar kunnen we u bereiken?',
    nom: 'Uw naam',
    telephone: 'Telefoon',
    email: 'E-mail',
    commune: 'Waar woont u?',
    communeExemple: 'Bv.: Aalst',
    parcours: 'Uw loopbaan in een paar woorden',
    parcoursExemple: 'Bv.: 6 jaar tegelwerk, vooral badkamers en terrassen, gewoon aan grote formaten…',
    consentement: 'Ik ga ermee akkoord dat mijn gegevens gebruikt worden om mijn sollicitatie te bekijken.',
    envoyer: 'Mijn sollicitatie versturen',
    erreurChoix: 'Kies minstens één vak.',
    erreurConsentement: 'Vink het vakje aan zodat wij uw sollicitatie kunnen bekijken.',
    merciTitre: 'Bedankt, uw sollicitatie is verstuurd!',
    merciTexte:
      'Wij nemen contact op als uw profiel past. Hebt u een cv of foto’s van uw werven? Stuur ze via WhatsApp of e-mail: uw sollicitatie staat er al in.',
    cvWhatsApp: 'Mijn foto’s via WhatsApp',
    cvEmail: 'Mijn cv via e-mail',
    cvIntro: 'Hallo, hier is mijn cv (en foto’s van mijn werven) voor mijn sollicitatie via de website:',
    sujetSuite: 'Mijn cv voor mijn sollicitatie',
    secoursTexte: 'Uw mailprogramma opent met uw sollicitatie al ingevuld: u hoeft ze enkel nog te versturen.',
    sujetFormulaire: 'Nieuwe sollicitatie · website BS Renove',
    sujetEmail: 'Sollicitatie via de website',
    recap: {
      metier: 'Vak',
      experience: 'Ervaring',
      statut: 'Statuut',
      recherche: 'Zoekt',
      disponibilite: 'Beschikbaar',
      permis: 'Rijbewijs',
      vehicule: 'Voertuig',
      outils: 'Gereedschap',
      vca: 'VCA',
      deplacements: 'Verplaatsingen',
      langues: 'Talen',
      langues_autres: 'Andere talen',
      nom: 'Naam',
      telephone: 'Telefoon',
      email: 'E-mail',
      commune: 'Gemeente',
      parcours: 'Loopbaan',
    },
  },

  servicesPage: {
    surtitre: 'Onze diensten',
    titre: 'Wat wij doen',
    intro:
      'Een algemene aannemer: alle vakgebieden van een renovatie, van de eerste offerte tot de laatste afwerking',
    grilleTitre: 'Al onze werken',
    exemplesTitre: 'Bijvoorbeeld',
    projetsLies: 'Bekijk de voor/na-foto’s',
    devisPour: 'Offerte aanvragen',
    avantChape: 'Wat u na de werken niet meer ziet',
    rejoindreQuestion: 'Oefent u dit vak uit?',
    rejoindreBouton: 'Word lid van ons team',
  },

  legal: {
    identite: 'De onderneming',
    nomLegal: 'Benaming',
    formeJuridique: 'Rechtsvorm',
    formeJuridiqueValeur: 'Besloten vennootschap (BV/SRL)',
    gerant: 'Zaakvoerder',
    siege: 'Maatschappelijke zetel',
    entreprise: 'Ondernemings- en btw-nummer',
    rpm: 'Ondernemingsrechtbank',
    telephone: 'Telefoon',
    email: 'E-mail',
    majLe: 'Laatst bijgewerkt',
    majValeur: '25 september 2026',
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
        'Volledige renovatie, badkamers, keukens, tegelwerk, terrassen, trappen, dakwerken, metselwerk en loodgieterij.',
    },
    realisations: {
      titre: 'Onze realisaties · BS Renove',
      description: 'Enkele recente werven in beeld, voor en na.',
    },
    contact: {
      titre: 'Contact en offerte · BS Renove',
      description:
        'Leg ons uw project uit en ontvang een gratis offerte. Via telefoon, WhatsApp of e-mail.',
    },
    apropos: {
      titre: 'Over ons · BS Renove',
      description:
        'Algemene renovatieonderneming in Denderleeuw, actief in heel België: alle vakgebieden van een renovatie.',
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
