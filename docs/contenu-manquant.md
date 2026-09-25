# Ce qui reste à confirmer

Liste à jour après la refonte et le nettoyage du 25 septembre 2026. L'historique détaillé des décisions est dans l'historique Git.

## 1. Bloquant pour la mise en ligne

| Quoi | Où | Action |
|---|---|---|
| **Adresse définitive du site** (domaine acheté chez Wix) | `SITE` dans `astro.config.mjs`, ligne `Sitemap:` de `public/robots.txt` | provisoire : `bs-renove.pages.dev` |
| **Clé Web3Forms** | `.env` (`WEB3FORMS_KEY=…`) et chez l'hébergeur | à recréer ; sans clé, le formulaire ouvre un email pré-rempli |
| **« 30+ chantiers terminés »** | chiffres de l'accueil (`accueil.chiffres` dans `src/i18n/fr.ts` et `nl.ts`) | valeur donnée par Claudiu, à confirmer par Sergiu |
| **Relecture des textes juridiques** | pages Mentions légales et Vie privée (`[À RELIRE]`) | par Sergiu ou son comptable ; RPM/RPR (« RPM Gand, division Dendermonde » ?) et nom de l'hébergeur à ajouter |

## 2. Communes à demander à Sergiu

Ces avant/après s'affichent avec « Belgique ». Remplacer `[À CONFIRMER : commune]` dans le fichier suffit.

| Fichier (`src/content/projets/`) | Ce que montre l'avant/après | Piste |
|---|---|---|
| `renovation-maison-58.yaml` | façade avant, entrée carrelée | probablement Woluwe-Saint-Pierre |
| `egouttage-allee.yaml` | égouttage puis allée carrelée | probablement la même maison |
| `extension-maison.yaml` | extension sur deux niveaux | — |
| `allee-paves.yaml` | allée d'entrée en pavés | — |
| `terrasse-jardin-carrelage.yaml` | terrasse de jardin | — |
| `salle-de-bain-douche-carrelage.yaml` | douche et double lavabo | — |
| `salle-de-bain-baignoire.yaml` | baignoire carrelée | — |
| `toiture-lucarne.yaml` | deux lucarnes | — |
| `toiture-tuiles-rouges.yaml` | toiture en tuiles rouges | — |
| `petite-toiture.yaml` | petite toiture le long d'une façade | — |
| `renovation-parquet-menuiseries.yaml` | séjour, parquet | — |

## 3. Textes à faire valider par Sergiu (FR et NL)

- Métiers ajoutés pendant la refonte : **Escaliers**, **Terrasses et jardins**, **Plomberie** ; **Peinture et finitions** mentionne maintenant le parquet ; exemples du **Carrelage** (« Salles de bain et cuisines ») et des **Terrasses** (« Allées et pavage »).
- « Comment ça se passe » : « sur place si c'est nécessaire » (étape 2) et « sans engagement » (étape 3).
- Les 4 questions de la FAQ.
- Toutes les légendes des avant/après (`legende` dans les fichiers de chantier).

## 4. À vérifier avec Sergiu

- **Électricité et peinture** ne figurent pas dans les activités enregistrées : les fait-il lui-même, les sous-traite-t-il, ou faut-il retirer ces métiers ?
- **Assurance décennale** : obligatoire en Belgique pour certains travaux (loi Peeters-Borsus, 2018). Rien n'est affiché, mais à vérifier avec son assureur ou comptable.
- **Escalier principal de Woluwe** (`chantier-26`) : la photo « après » montre-t-elle bien le travail terminé ?
- **Salle de bain avec baignoire** : les croisillons sont encore en place sur l'« après » ; une photo finie serait meilleure.
- **Email** : l'adresse est personnelle (Hotmail) ; une adresse au nom de l'entreprise serait plus professionnelle.
- **Durée de conservation** des demandes de devis : pas de durée fixe (choix de Sergiu). L'autorité belge recommande plutôt un délai (ex. 3 ans).

## 5. Photos souhaitées

- Un avant/après pour la **Plomberie** en intérieur, et un « après » pour l'**Électricité** (aujourd'hui une photo seule).
- La **cuisine d'Ixelles** et la **salle de bain de Knokke** : aucune paire avant/après, donc absentes du site.
- Une **image de partage** réelle (aujourd'hui générée à partir du logo, `scripts/generer-image-partage.mjs`).
- Pour les prochains avant/après : deux photos **prises du même endroit et dans le même sens**.

## 6. Technique

- **Page 404 néerlandaise** : l'hébergeur ne sert qu'une seule 404 par défaut ; à configurer au déploiement.
- **Mesure Lighthouse** à faire une fois le site en ligne.
- Le dossier d'origine « Rénovation Avenue manoir d'anjou » n'est plus dans Téléchargements (photos de Woluwe déjà importées, rien de perdu sur le site).
