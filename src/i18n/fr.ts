/** Tous les textes d'interface en français. Le NL suit la même structure. */
export const fr = {
  code: 'fr',
  htmlLang: 'fr-BE',
  nomLangue: 'Français',

  nav: {
    services: 'Services',
    realisations: 'Réalisations',
    apropos: 'À propos',
    contact: 'Contact',
  },

  actions: {
    devis: 'Demander un devis',
    whatsapp: 'Écrire sur WhatsApp',
    whatsappCourt: 'WhatsApp',
    appeler: 'Appeler',
    appelerLong: 'ou appelez le',
  },

  /** Message déjà écrit quand on ouvre WhatsApp. */
  whatsappMessage: 'Bonjour, je souhaiterais un devis pour…',

  entete: {
    accueilAria: 'BS Renove, accueil',
    tagline: 'Entreprise générale',
    ouvrirMenu: 'Ouvrir le menu',
    fermerMenu: 'Fermer le menu',
    menuAria: 'Menu principal',
  },

  langues: {
    choisirAria: 'Choisir la langue',
    versNl: 'Lire cette page en néerlandais',
    versFr: 'Lire cette page en français',
  },

  piedDePage: {
    siege: 'Siège social',
    tva: 'TVA',
    mentionsLegales: 'Mentions légales',
    viePrivee: 'Vie privée',
    droits: 'Tous droits réservés.',
  },

  accessibilite: {
    allerAuContenu: 'Aller au contenu',
  },

  enConstruction: {
    etiquette: 'En construction',
    texte: 'Cette page arrive bientôt. En attendant, appelez-nous ou écrivez-nous sur WhatsApp.',
  },

  pages: {
    accueil: {
      titre: 'BS Renove · Entreprise générale de rénovation en Belgique',
      description:
        "Salles de bain, cuisines, carrelage, toiture et maçonnerie. On s'occupe de votre chantier du premier devis jusqu'à la dernière finition.",
    },
    services: {
      titre: 'Nos services · BS Renove',
      description:
        'Rénovation complète, salles de bain, cuisines, carrelage, toiture, maçonnerie, électricité et peinture.',
    },
    realisations: {
      titre: 'Nos réalisations · BS Renove',
      description: 'Quelques chantiers récents, en photos, avant et après.',
    },
    contact: {
      titre: 'Contact et devis · BS Renove',
      description:
        'Expliquez-nous votre projet et recevez une première estimation. Par téléphone, WhatsApp ou formulaire.',
    },
    mentionsLegales: {
      titre: 'Mentions légales · BS Renove',
      description: 'Informations légales de BS Renove SRL.',
    },
    viePrivee: {
      titre: 'Vie privée · BS Renove',
      description: 'Comment BS Renove traite vos données personnelles.',
    },
    erreur404: {
      titre: 'Page introuvable',
      description: "Cette page n'existe pas ou a été déplacée.",
      h1: 'Cette page n’existe pas.',
      texte: 'Le lien est peut-être ancien, ou l’adresse comporte une erreur.',
      retour: "Retour à l'accueil",
    },
  },
};

export type Traductions = typeof fr;
