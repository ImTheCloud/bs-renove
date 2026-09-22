/** Tous les textes d'interface en français. Le NL suit exactement la même structure. */
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

  /** Marqueur visible tant qu'une information n'est pas confirmée par le client. */
  aConfirmer: 'À CONFIRMER',

  /** Blocs « photo à venir », en attendant les vraies photos. */
  photos: {
    aVenir: 'Photo à venir',
    principale: 'La plus belle réalisation, en format horizontal',
    service: 'Photo du service',
    avant: 'Photo avant',
    apres: 'Photo après, même angle',
    gerant: 'Photo de Sergiu sur un chantier',
  },

  accueil: {
    hero: {
      zone: 'Intervient dans toute la Belgique',
      titreDebut: 'Votre maison, entre de bonnes',
      titreFin: 'mains.',
      texte:
        "Salles de bain, cuisines, carrelage, toiture et maçonnerie. On s'occupe de votre chantier du premier devis jusqu'à la dernière finition.",
      atouts: ['Devis gratuit', 'Un seul interlocuteur', 'Français · Nederlands'],
      badgeUnite: 'ans',
      badgeTexte: 'de métier dans la construction',

    },

    services: {
      surtitre: 'Nos services',
      titre: 'Tout pour votre rénovation, au même endroit.',
      bouton: 'Tous nos services',
    },

    avantApres: {
      surtitre: 'Avant, après',
      autresProjets: 'Autres projets',
      avant: 'Avant',
      apres: 'Après',
      curseurLabel: 'Comparer avant et après',
      curseurAide: 'Utilisez les flèches gauche et droite pour comparer.',
    },

    pourquoi: {
      surtitre: 'Pourquoi BS Renove',
      titre: 'Un projet. Un seul interlocuteur.',
      texte:
        'Nous vous accompagnons à chaque étape de votre projet, pour une réalisation claire, efficace et sans mauvaises surprises.',
      points: [
        'Devis gratuit et détaillé',
        'Suivi du chantier',
        'Interlocuteur unique',
        'Matériaux de qualité',
        "Équipe d'une douzaine de personnes",
      ],
    },

    contact: {
      titre: 'Vous avez un projet ? Parlons-en.',
      texte:
        'Construction, rénovation ou transformation : expliquez-nous votre projet et recevez une première estimation.',
      labelTelephone: 'Téléphone',
      labelEmail: 'Email',
      labelZone: "Zone d'intervention",
      valeurZone: 'Toute la Belgique',
    },
  },

  realisations: {
    surtitre: 'Réalisations',
    titre: 'Des chantiers, pas des promesses.',
    intro:
      'Quelques projets récents, en photos. Faites glisser le curseur pour voir la différence.',
    voirLeProjet: 'Voir le projet',
    commune: 'Commune',
    service: 'Type de travaux',
    duree: 'Durée',
    semaines: 'semaines',
    aucun: 'Les premiers projets arrivent bientôt.',
  },

  projet: {
    retour: 'Toutes les réalisations',
    avantApres: 'Avant, après',
    recitTitre: 'Le chantier',
    depart: 'Au départ',
    travaux: 'Les travaux',
    resultat: 'Le résultat',
    galerie: 'En images',
    agrandir: 'Agrandir la photo',
    fermer: 'Fermer',
    precedente: 'Photo précédente',
    suivante: 'Photo suivante',
    similaireTitre: 'Un projet similaire ?',
    similaireTexte:
      'Expliquez-nous ce que vous avez en tête, nous revenons vers vous avec une première estimation.',
  },

  servicesPage: {
    surtitre: 'Nos services',
    titre: 'Ce que nous faisons.',
    intro:
      'Une entreprise générale, donc un seul interlocuteur du premier devis à la dernière finition.',
    exemplesTitre: 'Par exemple',
    projetsLies: 'Voir les projets',
    devisPour: 'Demander un devis',
  },

  contactPage: {
    surtitre: 'Contact',
    titre: 'Parlons de votre projet.',
    intro:
      'Décrivez-nous ce que vous avez en tête. Nous revenons vers vous avec une première estimation.',
    devisTitre: 'Demander un devis par email',
    devisTexte:
      'Un clic ouvre votre messagerie avec un email déjà prêt : il ne reste qu’à compléter vos coordonnées et le décrire.',
    ouTitre: 'Plus rapide',
    ouTexte: 'Le téléphone et WhatsApp restent le plus direct.',
  },

  /** Le sujet et le corps du mail pré-rempli derrière chaque bouton « devis ». */
  devisEmail: {
    sujet: 'Demande de devis',
    corps: `Bonjour,

Je souhaite recevoir un devis pour les travaux suivants :

Nom :
Téléphone :
Commune du chantier :
Type de travaux :
Description du projet :


Merci d'avance,`,
  },

  legal: {
    aRelire: 'À RELIRE',
    aRelireTexte:
      'Ces textes sont un point de départ. Ils doivent être relus et validés avant la mise en ligne.',
    identite: "L'entreprise",
    nomLegal: 'Dénomination',
    formeJuridique: 'Forme juridique',
    formeJuridiqueValeur: 'Société à responsabilité limitée (SRL)',
    gerant: 'Gérant',
    siege: 'Siège social',
    entreprise: "Numéro d'entreprise et TVA",
    rpm: 'RPM',
    telephone: 'Téléphone',
    email: 'Email',
    majLe: 'Dernière mise à jour',
    majValeur: '21 septembre 2026',
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
