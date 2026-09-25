# BS Renove : site vitrine

Site statique (Astro) de BS Renove SRL, entreprise générale de rénovation en Belgique, en français et en néerlandais.

```bash
npm install
npm run dev      # serveur local (http://localhost:4321)
npm run build    # vérification des types + construction dans dist/
npm run preview  # aperçu du site construit
```

Si le serveur local affiche des erreurs après un changement de photos ou de schéma : `rm -rf .astro` puis relancer `npm run dev`.

## Organisation

```
src/
├── pages/              Une page par adresse (FR à la racine, NL sous nl/)
├── layouts/            BaseLayout : <head>, SEO, hreflang, en-tête, pied de page
├── components/
│   ├── accueil/        Les sections de la page d'accueil (Hero, MaisonCoupe…)
│   ├── sections/       Le contenu des pages intérieures (Services, Réalisations…)
│   └── *.astro         Briques communes (Bouton, Icon, Logo, CurseurAvantApres…)
├── content/projets/    Un fichier YAML par chantier : sa commune et ses avant/après
├── data/
│   ├── entreprise.ts   Faits vérifiés sur l'entreprise (adresse, téléphone, TVA…)
│   ├── services.ts     Les 11 métiers (textes FR/NL, icônes)
│   ├── categories.ts   Les types de pièce des avant/après (filtres)
│   ├── projets.ts      Les avant/après : vitrine, accueil, par métier
│   └── textes-legaux.ts
├── i18n/               Tous les textes d'interface (fr.ts et nl.ts, même structure)
├── scripts/site.ts     Défilement fluide, apparitions
├── styles/             tokens.css (couleurs, tailles) et global.css
└── assets/             Photos (sans métadonnées) et logo
scripts/                Outils locaux : import de photos, tags Finder, image de partage
docs/                   Brief et informations à confirmer avec le client
```

## Ajouter un avant/après

1. Importer les deux photos **sans métadonnées** dans `src/assets/projets/<chantier>/` :
   `node scripts/importer-photos.mjs <dossier> <chantier>`.
   Masquer d'abord tout numéro de maison, visage ou plaque.
2. Ajouter la paire dans `src/content/projets/<chantier>.yaml` :

```yaml
avantApres:
  - avant: ../../assets/projets/<chantier>/avant-1.jpg
    apres: ../../assets/projets/<chantier>/apres-1.jpg
    legende:
      fr: Ce qui a été fait
      nl: Wat er gedaan is
    categorie: salle-de-bain   # voir src/data/categories.ts
    # Facultatif : depart (position de la poignée, %), cadrageAvant / cadrageApres (ex. « 50% 20% »)
```

La paire apparaît automatiquement sur la page Réalisations et dans le métier correspondant (`CATEGORIES_PAR_SERVICE` dans `src/data/projets.ts`). Pour la mettre sur l'accueil, ajouter son identifiant (`<chantier>/<nom de la photo après>`) à `IDS_ACCUEIL`.

## Formulaire de devis

Envoi par Web3Forms : mettre la clé dans `.env` (`WEB3FORMS_KEY=…`) et chez l'hébergeur. Sans clé, le formulaire ouvre la messagerie du visiteur avec la demande déjà écrite.
