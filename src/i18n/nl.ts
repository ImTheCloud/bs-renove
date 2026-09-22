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
    droits: 'Alle rechten voorbehouden.',
  },

  accessibilite: {
    allerAuContenu: 'Naar de inhoud',
  },

  enConstruction: {
    etiquette: 'In opbouw',
    texte: 'Deze pagina komt binnenkort. Bel ons ondertussen of schrijf ons op WhatsApp.',
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
      zone: 'Actief in heel België',
      titreDebut: 'Uw woning, in goede',
      titreFin: 'handen.',
      texte:
        'Badkamers, keukens, tegelwerk, dakwerken en metselwerk. Wij begeleiden uw werf van de eerste offerte tot de laatste afwerking.',
      atouts: ['Gratis offerte', 'Eén aanspreekpunt', 'Nederlands · Français'],
      badgeUnite: 'jaar',
      badgeTexte: 'ervaring in de bouw',

    },

    services: {
      surtitre: 'Onze diensten',
      titre: 'Alles voor uw renovatie, op één plek.',
      bouton: 'Al onze diensten',
    },

    avantApres: {
      surtitre: 'Voor, na',
      voirTout: 'Bekijk al onze voor/na-foto’s',
      autresProjets: 'Andere projecten',
      avant: 'Voor',
      apres: 'Na',
      curseurLabel: 'Voor en na vergelijken',
      curseurAide: 'Gebruik de pijltjestoetsen links en rechts om te vergelijken.',
    },

    pourquoi: {
      surtitre: 'Waarom BS Renove',
      titre: 'Eén project. Eén aanspreekpunt.',
      texte:
        'Wij begeleiden u bij elke stap van uw project, voor een duidelijke en efficiënte uitvoering, zonder onaangename verrassingen.',
      points: [
        'Gratis en gedetailleerde offerte',
        'Opvolging van de werf',
        'Eén aanspreekpunt',
        'Kwaliteitsmaterialen',
        'Team van een twaalftal mensen',
      ],
    },

    contact: {
      titre: 'Hebt u een project? Laten we erover praten.',
      texte:
        'Bouwen, renoveren of verbouwen: leg ons uw project uit en ontvang een eerste raming.',
      labelTelephone: 'Telefoon',
      labelEmail: 'E-mail',
      labelZone: 'Werkgebied',
      valeurZone: 'Heel België',
    },
  },

  realisations: {
    surtitre: 'Realisaties',
    titre: 'Werven, geen beloftes.',
    intro:
      'Versleep de schuifknop om het verschil te zien. Filter op ruimte om direct te vinden wat u zoekt.',
    voirLeProjet: 'Bekijk de volledige werf',
    commune: 'Gemeente',
    service: 'Type werken',
    duree: 'Duur',
    semaines: 'weken',
    aucun: 'De eerste voor/na-foto’s volgen binnenkort.',
    toutes: 'Alles bekijken',
    filtrerAria: 'Filteren op type ruimte',
  },

  aProposPage: {
    surtitre: 'Over ons',
    titre: 'Eén project. Eén aanspreekpunt.',
    intro:
      'BS Renove SRL is een algemene renovatieonderneming met zetel in Denderleeuw, actief in heel België. Of het nu om een volledige werf of één vakgebied gaat, wij coördineren alles zelf: u hebt maar één persoon nodig, van de eerste tot de laatste dag.',
    capacitesTitre: 'Wat wij kunnen doen',
    capacitesIntro:
      'Alle vakgebieden van een renovatie, intern of met onze vertrouwde zelfstandigen.',
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
      'Vertel ons wat u in gedachten hebt, wij komen bij u terug met een eerste raming.',
  },

  servicesPage: {
    surtitre: 'Onze diensten',
    titre: 'Wat wij doen.',
    intro:
      'Een algemene aannemer, dus één aanspreekpunt van de eerste offerte tot de laatste afwerking.',
    exemplesTitre: 'Bijvoorbeeld',
    projetsLies: 'Bekijk de projecten',
    devisPour: 'Offerte aanvragen',
  },

  contactPage: {
    surtitre: 'Contact',
    titre: 'Laten we over uw project praten.',
    intro:
      'Beschrijf ons wat u in gedachten hebt. Wij komen bij u terug met een eerste raming.',
    devisTitre: 'Offerte aanvragen via email',
    devisTexte:
      'Eén klik opent uw mailprogramma met een kant-en-klare email: u hoeft enkel uw gegevens en uw project te beschrijven.',
    ouTitre: 'Sneller',
    ouTexte: 'Telefoon en WhatsApp blijven het meest rechtstreeks.',
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
      'Deze teksten zijn een vertrekpunt. Ze moeten worden nagelezen en goedgekeurd vóór de publicatie.',
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
      h1: 'Deze pagina bestaat niet.',
      texte: 'De link is misschien verouderd, of het adres bevat een fout.',
      retour: 'Terug naar de startpagina',
    },
  },
};
