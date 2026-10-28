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
  /** Deux-points : espace avant en français, pas en néerlandais. */
  deuxPoints: ' : ',

  whatsappMessage: 'Bonjour, je souhaiterais un devis pour…',

  entete: {
    accueilAria: 'BS Renove, accueil',
    tagline: 'Entreprise générale',
    ouvrirMenu: 'Ouvrir le menu',
    fermerMenu: 'Fermer le menu',
    menuAria: 'Menu principal',
    menu: 'Menu',
    fermer: 'Fermer',
    contactDirect: 'Nous joindre',
  },

  langues: {
    choisirAria: 'Choisir la langue',
    versNl: 'Lire cette page en néerlandais',
    versFr: 'Lire cette page en français',
  },

  piedDePage: {
    tva: 'TVA',
    mentionsLegales: 'Mentions légales',
    viePrivee: 'Vie privée',
    rejoindre: 'Rejoindre l’équipe',
    droits: 'Tous droits réservés',
    projet: 'Un projet en tête ?',
    zone: 'de Welle à toute la Belgique',
    entreprise: 'L’entreprise',
    credit: 'Site conçu par',
    creditQuestion: 'Un site comme celui-ci ?',
    creditSujet: 'Un site comme celui de BS Renove',
  },

  accessibilite: {
    allerAuContenu: 'Aller au contenu',
  },

  /** Marqueur visible tant qu'une information n'est pas confirmée par le client. */

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
      experienceDetail: 'de notre gérant, Sergiu Bivol, dans la construction',
      origine: { b: ' comme Bivol,', s: ' comme Sergiu :', fin: 'd’où BS Renove' },
      maisonAria: 'Dessin d’une maison en coupe : chaque pièce mène au service correspondant',
      maisonAide: 'Touchez une pièce',
      maisonAideSouris: 'Cliquez sur une pièce',
      nuit: 'Passer la maison en mode nuit',
      jour: 'Revenir au jour',
      noteNuit: 'et la nuit ?',
      noteJour: 'et le jour ?',
      maisonTout: 'et tout le reste !',
      ficheFermer: 'Fermer',
      fichePlus: 'Voir ce métier',
      ficheAutre: 'Essayez une autre pièce !',
      fichePhotoSeule: 'Ce qu’on ne voit plus une fois fini',
      fiches: {
        cave: 'Carrelage du sol et du local technique : une cave saine, facile à entretenir.',
        auvent: 'La petite toiture au-dessus de la porte d’entrée, de l’isolation aux tuiles.',
        allee: 'L’allée d’entrée, du terrassement aux pavés posés.',
      },
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
      titreDebut: 'Même maison.',
      titreSerif: 'Autre vie.',
      texte:
        'Faites glisser la poignée : la maison d’avant les travaux laisse place au résultat.',
      noteAvant: 'avant les travaux…',
      noteApres: '… et après !',
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
        { valeur: 100, prefixe: '', suffixe: '+', mot: '', texte: 'chantiers réalisés par notre gérant au fil des années' },
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


    faq: {
      surtitre: 'Questions fréquentes',
      titreDebut: 'Vos questions,',
      titreSerif: 'nos réponses.',
      autreQuestion: 'Une autre question ? Appelez-nous au',
      items: [
        {
          q: 'Intervenez-vous près de chez moi ?',
          r: 'Nous sommes basés à Welle et nous intervenons dans toute la Belgique.',
        },
        {
          q: "Le devis est-il gratuit ?",
          r: "Oui, le devis est gratuit, détaillé et sans engagement. Pour le préparer, le plus utile est de nous décrire les travaux et, si possible, de nous envoyer quelques photos.",
        },
        {
          q: "Combien coûte une rénovation ?",
          r: "Chaque chantier est différent : le prix dépend des travaux, des surfaces et des matériaux choisis. C’est pour ça que nous faisons un devis détaillé, gratuit, pour votre projet.",
        },
        {
          q: "Pouvez-vous faire un seul type de travaux ?",
          r: "Oui. Une salle de bain, une toiture, un escalier… ou toute la maison : nous prenons aussi bien un seul métier qu’un chantier complet.",
        },
        {
          q: 'Faut-il plusieurs entreprises pour une rénovation complète ?',
          r: 'Non. BS Renove est une entreprise générale : nous coordonnons tous les corps de métier, en interne ou avec nos indépendants.',
        },
        {
          q: "Comment se passe un chantier avec vous ?",
          r: "Vous nous racontez votre projet, nous regardons ensemble ce que vous voulez et l’état des lieux, vous recevez un devis détaillé, puis nous suivons le chantier jusqu’à la dernière finition.",
        },
        {
          q: "Combien de temps durent les travaux ?",
          r: "Cela dépend de l’ampleur du chantier. Nous en parlons avec vous au moment du devis, pour que vous sachiez à quoi vous attendre.",
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

  /** Le formulaire de devis, en deux étapes. */
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

    merciTitre: 'C’est envoyé à BS Renove !',
    merciTexte:
      'Votre demande nous est bien parvenue par email. Pour aller plus vite, envoyez-nous la même demande sur WhatsApp : elle est déjà écrite, il ne vous reste qu’à ajouter quelques photos.',
    merciWhatsApp: 'Envoyer sur WhatsApp',
    merciEmail: 'Par email',
    photosIntro: 'Bonjour, voici ma demande de devis envoyée sur le site, avec quelques photos :',
    sujetPhotos: 'Photos pour ma demande de devis',
    recommencer: 'Nouvelle demande',

    erreurTitre: 'L’envoi n’a pas fonctionné.',
    erreurTexte: 'Vous pouvez réessayer, ou nous appeler directement au',

    sujetFormulaire: 'Nouvelle demande de devis · site BS Renove',
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
      "BS Renove SRL est une entreprise générale de rénovation basée à Welle, active dans toute la Belgique. Que ce soit un chantier complet ou un seul métier, nous coordonnons tout nous-mêmes, du premier jour au dernier",
    capacitesTitre: 'Ce que nous savons faire',
    capacitesIntro:
      "Tous les corps de métier d'une rénovation, en interne ou avec nos indépendants de confiance",
    camionnettesAlt: 'Deux camionnettes blanches BS Renove, avec le logo bleu, garées dans une rue',
    camionnettesNote: 'Nos camionnettes, prêtes pour votre chantier',
  },

  rejoindreEquipe: {
    surtitre: 'Rejoindre l’équipe',
    titreDebut: 'Travaillons',
    titreSerif: 'ensemble.',
    texte:
      'Carreleur, plombier, couvreur, maçon… Quatre petites étapes pour vous présenter. Une question avant ? Appelez-nous ou écrivez-nous directement.',
    whatsappMessage: 'Bonjour, je souhaiterais rejoindre l’équipe BS Renove…',
    etapes: ['Votre métier', 'Votre expérience', 'Sur le chantier', 'Vos coordonnées'],
    q1: 'Quel métier exercez-vous ?',
    q1Aide: 'Plusieurs choix possibles',
    metiers: {
      carreleur: 'Carreleur',
      plombier: 'Plombier',
      electricien: 'Électricien',
      couvreur: 'Couvreur',
      macon: 'Maçon',
      peintre: 'Peintre',
      menuisier: 'Menuisier',
      plafonneur: 'Plafonneur',
      cuisiniste: 'Poseur de cuisines',
      chefChantier: 'Chef de chantier',
      polyvalent: 'Ouvrier polyvalent',
      autre: 'Autre métier',
    },
    metierAutre: 'Quel autre métier ?',
    metierAutreExemple: 'Ex. : façadier, ferrailleur…',
    erreurMetierAutre: 'Écrivez votre métier.',
    q2: 'Votre expérience',
    experience: 'Depuis combien de temps ?',
    experiences: ['Moins de 2 ans', '2 à 5 ans', '5 à 10 ans', 'Plus de 10 ans'],
    statut: 'Vous êtes',
    statuts: ['Salarié', 'Indépendant', 'Intérimaire', 'En formation'],
    recherche: 'Vous cherchez',
    recherches: ['Un temps plein', 'Un temps partiel', 'Des missions ponctuelles'],
    disponibilite: 'Disponible',
    disponibilites: ['Tout de suite', 'Dans le mois', 'Plus tard'],
    q3: 'Sur le chantier',
    permis: 'Permis de conduire',
    vehicule: 'Véhicule personnel',
    outils: 'Vos propres outils',
    outilsChoix: ['Oui', 'En partie', 'Non'],
    langues: 'Langues parlées',
    languesChoix: ['Français', 'Néerlandais', 'Anglais', 'Roumain'],
    languesAutres: 'Autres langues',
    languesAutresExemple: 'Ex. : italien, portugais…',
    oui: 'Oui',
    non: 'Non',
    q4: 'Où pouvons-nous vous joindre ?',
    nom: 'Votre nom',
    telephone: 'Téléphone',
    email: 'Email',
    commune: 'Où habitez-vous ?',
    communeExemple: 'Ex. : Alost',
    parcours: 'Votre parcours en quelques mots',
    parcoursExemple: 'Ex. : 6 ans de carrelage, surtout des salles de bain et des terrasses, habitué aux grands formats…',
    consentement: 'J’accepte que mes données soient utilisées pour étudier ma candidature.',
    envoyer: 'Envoyer ma candidature',
    erreurChoix: 'Choisissez au moins un métier.',
    erreurConsentement: 'Cochez la case pour que nous puissions étudier votre candidature.',
    merciTitre: 'Merci, votre candidature est envoyée !',
    merciTexte:
      'Nous revenons vers vous si votre profil correspond. Vous avez un CV ou des photos de vos chantiers ? Envoyez-les par WhatsApp ou par email : votre candidature y est déjà écrite.',
    cvWhatsApp: 'Mes photos par WhatsApp',
    cvEmail: 'Mon CV par email',
    cvIntro: 'Bonjour, voici mon CV (et des photos de mes chantiers) pour ma candidature envoyée sur le site :',
    sujetSuite: 'Mon CV pour ma candidature',
    sujetFormulaire: 'Nouvelle candidature · site BS Renove',
    recap: {
      metier: 'Métier',
      metier_autre: 'Autre métier',
      experience: 'Expérience',
      statut: 'Statut',
      recherche: 'Recherche',
      disponibilite: 'Disponible',
      permis: 'Permis',
      vehicule: 'Véhicule',
      outils: 'Outils',
      langues: 'Langues',
      langues_autres: 'Autres langues',
      nom: 'Nom',
      telephone: 'Téléphone',
      email: 'Email',
      commune: 'Commune',
      parcours: 'Parcours',
    },
  },

  servicesPage: {
    surtitre: 'Nos services',
    titre: 'Ce que nous faisons',
    intro:
      'Une entreprise générale : tous les corps de métier d’une rénovation, du premier devis à la dernière finition',
    grilleTitre: 'Tous nos travaux',
    exemplesTitre: 'Par exemple',
    toutSurCeMetier: 'Tout sur ce métier',
    devisPour: 'Demander un devis',
    avantChape: 'Ce qu’on ne voit plus une fois fini',
    rejoindreQuestion: 'Vous exercez ce métier ?',
    rejoindreBouton: 'Rejoindre l’équipe',
    // La page de chaque métier
    plusAvantApres: 'Plus d’avant/après',
    autresTitre: 'Nos autres métiers',
    tousLesServices: 'Tous nos services',
    titreFin: ' en Belgique · BS Renove',
    descriptionFin: 'Devis gratuit, partout en Belgique.',
  },

  legal: {
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
      titre: 'BS Renove · Entreprise de rénovation à Welle, Belgique',
      description:
        'Entreprise générale de rénovation à Welle : salles de bain, cuisines, carrelage, toiture, maçonnerie et extensions, partout en Belgique. Devis gratuit.',
    },
    services: {
      titre: 'Travaux de rénovation : salle de bain, cuisine, toiture · BS Renove',
      description:
        'Rénovation complète, salles de bain, cuisines, carrelage, terrasses, escaliers, toiture, maçonnerie et extensions, plomberie, électricité, peinture. Devis gratuit.',
    },
    realisations: {
      titre: 'Nos rénovations en photos avant/après · BS Renove',
      description:
        'Nos chantiers de rénovation en photos avant et après : maisons, salles de bain, cuisines, toitures et terrasses, à Woluwe-Saint-Pierre, Ostende, Knokke-Heist…',
    },
    contact: {
      titre: 'Devis gratuit pour vos travaux de rénovation · BS Renove',
      description:
        'Décrivez vos travaux de rénovation et recevez un devis gratuit : formulaire en deux étapes, téléphone ou WhatsApp. BS Renove, Welle, toute la Belgique.',
    },
    apropos: {
      titre: 'À propos · BS Renove, entreprise de rénovation à Welle',
      description:
        "BS Renove SRL, entreprise générale de rénovation à Welle, dirigée par Sergiu Bivol : 12 ans d'expérience, plus de 100 chantiers, dans toute la Belgique.",
    },
    rejoindre: {
      titre: 'Travailler chez BS Renove · Rejoindre l’équipe',
      description:
        'Carreleur, plombier, électricien, couvreur, maçon, peintre… Envoyez votre candidature à BS Renove, entreprise de rénovation à Welle.',
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
