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
      zone: 'Denderleeuw · overal in België',
      titreDebut: 'Uw woning, in goede',
      titreFin: 'handen.',
      texte:
        'Badkamers, keukens, tegelwerk, dakwerken en metselwerk. Wij begeleiden uw werf van de eerste offerte tot de laatste afwerking.',
      atouts: ['Gedetailleerde offerte', 'Eén aanspreekpunt', 'Nederlands · Français'],
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
        'Gedetailleerde offerte',
        'Opvolging van de werf',
        'Eén aanspreekpunt',
        'Kwaliteitsmaterialen',
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
      'Enkele recente projecten in beeld. Versleep de schuifknop om het verschil te zien.',
    voirLeProjet: 'Bekijk het project',
    commune: 'Gemeente',
    service: 'Type werken',
    duree: 'Duur',
    semaines: 'weken',
    aucun: 'De eerste projecten volgen binnenkort.',
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
        'Leg ons uw project uit en ontvang een eerste raming. Via telefoon, WhatsApp of het formulier.',
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
