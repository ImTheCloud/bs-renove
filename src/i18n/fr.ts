/** Tous les textes d'interface en français. Le NL suit exactement la même structure. */
export const fr = {
  code: 'fr',
  htmlLang: 'fr-BE',

  nav: {
    services: 'Services',
    realisations: 'Réalisations',
    apropos: 'À propos',
    contact: 'Contact',
  },

  actions: {
    devis: 'Demander un devis',
    gratuit: 'Devis gratuit',
    whatsapp: 'Écrire sur WhatsApp',
    appeler: 'Appeler',
  },

  /** Message déjà écrit quand on ouvre WhatsApp. */
  whatsappMessage: 'Bonjour, je souhaiterais un devis pour…',

  entete: {
    accueilAria: 'BS Renove, accueil',
    tagline: 'Entreprise générale',
    ouvrirMenu: 'Ouvrir le menu',
    fermerMenu: 'Fermer le menu',
    menuAria: 'Menu principal',
    menu: 'Menu',
    contactDirect: 'Nous joindre',
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
    rejoindre: 'Rejoindre l’équipe',
    droits: 'Tous droits réservés',
    projet: 'Un projet en tête ?',
    zone: 'de Denderleeuw à toute la Belgique',
    entreprise: 'L’entreprise',
  },

  accessibilite: {
    allerAuContenu: 'Aller au contenu',
  },

  /** Marqueur visible tant qu'une information n'est pas confirmée par le client. */
  aConfirmer: 'À CONFIRMER',

  accueil: {
    hero: {
      surtitre: 'Entreprise générale · Toute la Belgique',
      titreDebut: 'Votre maison,',
      titreSerif: 'refaite',
      titreFin: 'de A à Z.',
      texte:
        'Salle de bain, cuisine, toiture, carrelage… Nous prenons en charge tout votre chantier, du premier devis à la dernière finition.',
      devisGratuit: 'Demander un devis gratuit',
      experience: 'ans d’expérience',
      experienceDetail: 'de notre gérant dans la construction',
      maisonAria: 'Dessin d’une maison en coupe : chaque pièce mène au service correspondant',
      maisonAide: 'Touchez une pièce',
      maisonAideSouris: 'Survolez une pièce',
      nuit: 'Passer la maison en mode nuit',
      jour: 'Revenir au jour',
      noteNuit: 'et la nuit ?',
      noteJour: 'et le jour ?',
      maisonTout: 'et tout le reste !',
      pieces: {
        toiture: 'la toiture',
        'salles-de-bain': 'la salle de bain',
        cuisines: 'la cuisine',
        carrelage: 'le carrelage',
        escaliers: 'l’escalier',
        terrasses: 'la terrasse',
        cave: 'la cave',
        auvent: 'la petite toiture',
        plomberie: 'la plomberie',
        allee: 'l’allée',
        electricite: 'l’électricité',
        'peinture-finitions': 'la peinture',
        'maconnerie-extensions': 'la maçonnerie',
      },
      defiler: 'Défiler',
    },

    bandeauAria: 'Nos métiers',

    avantApres: {
      surtitre: 'Avant, après',
      titreDebut: 'Même pièce.',
      titreSerif: 'Autre vie.',
      texte:
        'Faites glisser la poignée : la salle de bain en plein chantier laisse place au résultat.',
      noteAvant: 'en plein chantier…',
      noteApres: '… et presque terminée !',
      voirTout: 'Tous les avant/après',
      avant: 'Avant',
      apres: 'Après',
      curseurLabel: 'Comparer avant et après',
      curseurAide: 'Utilisez les flèches gauche et droite pour comparer',
    },

    services: {
      surtitre: 'Nos métiers',
      titreDebut: 'Tout ce qu’une maison',
      titreSerif: 'demande.',
      texte:
        'Un seul métier ou toute la maison : nous coordonnons les corps de métier, en interne ou avec nos indépendants de confiance.',
      voirTout: 'Tous nos services',
    },

    chiffres: {
      surtitre: 'En quelques chiffres',
      items: [
        { valeur: 12, prefixe: '', suffixe: '', mot: '', texte: 'ans d’expérience de notre gérant dans la construction' },
        { valeur: 0, prefixe: '', suffixe: '', mot: '', texte: 'métiers : carrelage, plomberie, escaliers, toiture…' },
        { valeur: 0, prefixe: '', suffixe: '', mot: 'Gratuit', texte: 'le devis' },
      ],
    },

    methode: {
      surtitre: 'Comment ça se passe',
      titreDebut: 'Simple,',
      titreSerif: 'du début à la fin.',
      etapes: [
        {
          titre: 'Vous nous racontez',
          texte:
            'Par téléphone, WhatsApp ou avec le formulaire. Quelques photos de la pièce nous aident déjà beaucoup.',
        },
        {
          titre: 'On regarde ensemble',
          texte:
            'Nous faisons le point sur ce que vous voulez et sur l’état des lieux, sur place si c’est nécessaire.',
        },
        {
          titre: 'Devis gratuit et détaillé',
          texte: 'Vous recevez un devis clair, sans engagement, pour décider en connaissance de cause.',
        },
        {
          titre: 'Le chantier, jusqu’au bout',
          texte:
            'Nous coordonnons tous les corps de métier et suivons le chantier jusqu’à la dernière finition.',
        },
      ],
    },

    projets: {
      surtitre: 'Réalisations',
      titreDebut: 'Des chantiers,',
      titreSerif: 'pas des promesses.',
      voirTout: 'Toutes les réalisations',
      aide: 'Faites glisser le trait pour comparer',
    },

    faq: {
      surtitre: 'Questions fréquentes',
      titreDebut: 'Vos questions,',
      titreSerif: 'nos réponses.',
      autreQuestion: 'Une autre question ? Appelez-nous au',
      items: [
        {
          q: 'Intervenez-vous près de chez moi ?',
          r: 'Nous sommes basés à Denderleeuw et nous intervenons dans toute la Belgique.',
        },
        {
          q: 'Le devis est-il payant ?',
          r: 'Non, le devis est gratuit et détaillé. Pour le préparer, le plus utile est de nous décrire les travaux et, si possible, de nous envoyer quelques photos.',
        },
        {
          q: 'Faut-il plusieurs entreprises pour une rénovation complète ?',
          r: 'Non. BS Renove est une entreprise générale : nous coordonnons tous les corps de métier, en interne ou avec nos indépendants.',
        },
        {
          q: 'Comment vous envoyer des photos de mon chantier ?',
          r: 'Le plus simple est WhatsApp. Des photos de la pièce et quelques mesures nous aident à comprendre votre projet avant même de nous voir.',
        },
      ],
    },

    devis: {
      surtitre: 'Devis gratuit',
      titreDebut: 'Parlons de',
      titreSerif: 'votre projet.',
      texte:
        'Deux petites étapes, une minute. Plus pressé ? Appelez-nous ou écrivez-nous directement.',
      direct: 'En direct',
    },

    pourquoi: {
      surtitre: 'Pourquoi BS Renove',
      texte:
        'Nous vous accompagnons à chaque étape de votre projet, pour une réalisation claire, efficace et sans mauvaises surprises',
      points: [
        'Devis gratuit et détaillé',
        'Suivi du chantier',
        'Matériaux de qualité',
        "Équipe d'une douzaine de personnes",
      ],
    },

    contact: {
      labelTelephone: 'Téléphone',
      labelEmail: 'Email',
      labelZone: "Zone d'intervention",
      valeurZone: 'Toute la Belgique',
    },
  },

  /** Le formulaire de devis, en trois étapes. */
  formulaire: {
    etape: 'Étape',
    sur: 'sur',
    etapes: ['Vos travaux', 'Vos coordonnées'],

    q1: 'Quels travaux avez-vous en tête ?',
    q1Aide: 'Plusieurs choix possibles',
    autre: 'Autre chose',

    message: 'Votre projet en quelques mots',
    messageExemple:
      'Ex. : refaire la salle de bain à l’étage, environ 6 m², une douche à l’italienne à la place de la baignoire…',

    q3: 'Où pouvons-nous vous répondre ?',
    nom: 'Votre nom',
    telephone: 'Téléphone',
    email: 'Email',
    consentement: 'J’accepte que mes données soient utilisées pour répondre à ma demande.',
    consentementLien: 'Vie privée',

    suivant: 'Continuer',
    precedent: 'Retour',
    envoyer: 'Envoyer ma demande',
    envoiEnCours: 'Envoi…',
    facultatif: 'facultatif',

    erreurChoix: 'Choisissez au moins un type de travaux.',
    erreurChamp: 'Ce champ est obligatoire.',
    erreurEmail: 'Cette adresse email ne semble pas complète.',
    erreurConsentement: 'Cochez la case pour que nous puissions vous répondre.',

    merciTitre: 'Merci, c’est envoyé !',
    merciTexte:
      'Votre demande est bien partie. Vous avez des photos du chantier ? Envoyez-les par WhatsApp, c’est ce qui aide le plus à préparer le devis.',
    merciWhatsApp: 'Envoyer des photos',
    recommencer: 'Nouvelle demande',

    secoursTitre: 'Presque fini !',
    secoursLien: 'Ouvrir l’email',
    secoursTexte:
      'Votre messagerie s’ouvre avec votre demande déjà écrite : il ne reste qu’à l’envoyer. Rien ne s’ouvre ? Appelez-nous ou écrivez-nous sur WhatsApp.',

    erreurTitre: 'L’envoi n’a pas fonctionné.',
    erreurTexte: 'Vous pouvez réessayer, ou nous appeler directement au',

    sujetEmail: 'Demande de devis via le site',
    recap: {
      travaux: 'Travaux',
      message: 'Projet',
      nom: 'Nom',
      telephone: 'Téléphone',
      email: 'Email',
    },
  },

  realisations: {
    surtitre: 'Réalisations',
    titre: 'Des chantiers, pas des promesses',
    intro:
      'Faites glisser le curseur pour voir la différence. Filtrez par pièce pour aller droit à ce qui vous intéresse',
    aucun: 'Les premiers avant/après arrivent bientôt',
    toutes: 'Tout voir',
    filtrerAria: 'Filtrer par type de pièce',
  },

  aProposPage: {
    surtitre: 'À propos',
    titre: 'Rénover, c’est notre métier',
    intro:
      "BS Renove SRL est une entreprise générale de rénovation basée à Denderleeuw, active dans toute la Belgique. Que ce soit un chantier complet ou un seul métier, nous coordonnons tout nous-mêmes, du premier jour au dernier",
    capacitesTitre: 'Ce que nous savons faire',
    capacitesIntro:
      "Tous les corps de métier d'une rénovation, en interne ou avec nos indépendants de confiance",
  },

  rejoindreEquipe: {
    surtitre: 'Rejoindre l’équipe',
    titre: 'Vous voulez travailler avec nous',
    intro:
      'Envoyez-nous votre candidature, avec votre métier et votre expérience. Nous revenons vers vous si un profil comme le vôtre nous intéresse',
    candidatureTitre: 'Envoyer une candidature par email',
    candidatureTexte:
      'Un clic ouvre votre messagerie avec un email déjà prêt : il ne reste qu’à compléter vos coordonnées et votre parcours',
    bouton: 'Envoyer ma candidature',
    sujetEmail: 'Candidature',
    corpsEmail:
      'Bonjour,\n\nJe souhaite rejoindre l’équipe BS Renove.\n\nNom : \nTéléphone : \nMétier / expérience : \nDisponibilité : \n\n\nMerci d’avance,',
  },

  servicesPage: {
    surtitre: 'Nos services',
    titre: 'Ce que nous faisons',
    intro:
      'Une entreprise générale : tous les corps de métier d’une rénovation, du premier devis à la dernière finition',
    grilleTitre: 'Tous nos travaux',
    exemplesTitre: 'Par exemple',
    projetsLies: 'Voir les avant/après',
    devisPour: 'Demander un devis',
    avantChape: 'Ce qu’on ne voit plus une fois fini',
  },

  legal: {
    aRelire: 'À RELIRE',
    aRelireTexte:
      'Ces textes sont un point de départ. Ils doivent être relus et validés avant la mise en ligne',
    identite: "L'entreprise",
    nomLegal: 'Dénomination',
    formeJuridique: 'Forme juridique',
    formeJuridiqueValeur: 'Société à responsabilité limitée (SRL)',
    gerant: 'Gérant',
    siege: 'Siège social',
    entreprise: "Numéro d'entreprise et TVA",
    rpm: 'Tribunal de l’entreprise',
    telephone: 'Téléphone',
    email: 'Email',
    majLe: 'Dernière mise à jour',
    majValeur: '25 septembre 2026',
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
        'Rénovation complète, salles de bain, cuisines, carrelage, terrasses, escaliers, toiture, maçonnerie et plomberie.',
    },
    realisations: {
      titre: 'Nos réalisations · BS Renove',
      description: 'Quelques chantiers récents, en photos, avant et après.',
    },
    contact: {
      titre: 'Contact et devis · BS Renove',
      description:
        'Expliquez-nous votre projet et recevez une première estimation. Par téléphone, WhatsApp ou email.',
    },
    apropos: {
      titre: 'À propos · BS Renove',
      description:
        "Entreprise générale de rénovation à Denderleeuw, active dans toute la Belgique : tous les corps de métier d’une rénovation.",
    },
    rejoindre: {
      titre: 'Rejoindre l’équipe · BS Renove',
      description: 'Envoyez votre candidature à BS Renove, entreprise générale de rénovation.',
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
      h1: 'Cette page n’existe pas',
      texte: 'Le lien est peut-être ancien, ou l’adresse comporte une erreur',
      retour: "Retour à l'accueil",
    },
  },
};

export type Traductions = typeof fr;
