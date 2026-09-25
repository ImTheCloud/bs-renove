# Brief : site BS Renove

État du site après la refonte « Atelier » (septembre 2026). Les règles de design et de code sont dans `CLAUDE.md`, l'organisation du code dans `README.md`, le suivi avec le client dans `docs/suivi-client.md`.

## 1. L'entreprise (faits vérifiés)

- **Nom légal** : BS Renove SRL. Sur la camionnette : « Entreprise générale ».
- **Gérant** : Sergiu Bivol. « BS » = **B**ivol **S**ergiu.
- **Siège** : Elf Dagwand 67, 9473 Denderleeuw (Welle).
- **Numéro d'entreprise / TVA** : BE 1002.240.127.
- **Téléphone et WhatsApp** : 0485 38 43 90 (+32 485 38 43 90).
- **Email** : Bivol.sergiu@hotmail.com.
- **Zone d'intervention** : toute la Belgique.
- **Activités enregistrées** : plomberie, menuiserie, carrelage sols et murs, toiture, maçonnerie et rejointoiement, restauration de bâtiments.
- **Confirmé par Sergiu (22 septembre 2026)** : 12 ans de métier, devis gratuit, une douzaine de personnes avec des indépendants. Pas de garantie ni d'assurance à afficher. Aucun avis client.
- **Logo** : icône (bâtiments, maison, vague bleue) + « BS » en gras et « Renove » en italique bleu (`src/components/Logo.astro`). Bleu du logo : `#0066B4`.

## 2. Prise de contact

- **Formulaire de devis**, action principale (« Demander un devis gratuit » dans le haut de l'accueil) : 2 étapes. 1) type de travaux (tuiles, plusieurs choix + « Autre ») ; 2) nom, téléphone, email et un mot sur le projet (facultatifs), consentement vie privée. Pas d'adresse : elle se donne en parlant du devis. Après envoi, proposition d'envoyer des photos par WhatsApp.
- **Téléphone** : `tel:+32485384390`.
- **WhatsApp** : `https://wa.me/32485384390`, message pré-rempli (FR « Bonjour, je souhaiterais un devis pour… », NL « Hallo, ik zou graag een offerte voor… »). Pas dans le haut de l'accueil ; présent dans le dock mobile, le bloc devis et le pied de page.

## 3. Pages

| Page | FR | NL |
|---|---|---|
| Accueil | `/` | `/nl/` |
| Services | `/services/` | `/nl/diensten/` |
| Réalisations | `/realisations/` | `/nl/realisaties/` |
| À propos | `/a-propos/` | `/nl/over-ons/` |
| Contact et devis | `/contact/` | `/nl/contact/` |
| Rejoindre l'équipe | `/rejoindre-lequipe/` | `/nl/word-lid-van-ons-team/` |
| Mentions légales | `/mentions-legales/` | `/nl/juridische-informatie/` |
| Vie privée | `/vie-privee/` | `/nl/privacy/` |

Plus une page 404 dans les deux langues.

## 4. Accueil, section par section

1. **En-tête flottant** : logo, Services, Réalisations, À propos, Contact, FR/NL, « Demander un devis ». Mobile : bouton « Menu » (plein écran) et dock en bas (Appeler, WhatsApp, Devis).
2. **Hero** : « Votre maison, *refaite* de A à Z. », texte, « Demander un devis gratuit » (ordinateur seulement : sur téléphone, le dock du bas le propose), **12 ans de métier** en grand (« de notre gérant, Sergiu Bivol »), puis la note « **B** comme Bivol, **S** comme Sergiu : d’où BS Renove ». Pas de surtitre. Sur téléphone, le texte d’abord, la maison dessous. À droite, la **maison dessinée en coupe** : chaque pièce mène à son métier ou à ses avant/après ; mode nuit au clic sur le soleil. Dessous : les 11 métiers en pastilles.
3. **Bandeau** qui défile (les métiers).
4. **Avant/après** : la salle de bain de Watermael-Boitsfort en grand, puis 3 autres chantiers dessous (extension, toiture, cuisine) : 4 en tout, curseurs à faire glisser soi-même. La suite est sur la page Réalisations.
5. **Nos métiers** : liste des 11 métiers.
6. **Chapitre sombre** : chiffres (12 ans · 11 métiers · devis gratuit), puis « Comment ça se passe » en 4 étapes.
7. **FAQ** : 8 questions.
8. **Devis** : contacts directs et formulaire.
9. **Pied de page** : bande « rubalise » jaune, appel au devis, colonnes d'infos, mentions légales.

## 5. Les 11 métiers (`src/data/services.ts`)

Rénovation complète · Salles de bain · Cuisines · Carrelage · Terrasses et jardins · Escaliers · Toiture · Maçonnerie & extensions · Plomberie · Électricité · Peinture et finitions.

Page Services : une section par métier (texte, exemples de travaux, devis) avec l'avant/après où son travail se voit le mieux. L'Électricité montre une photo seule (le travail disparaît sous la chape). Les façades (rejointoiement, nettoyage) n'ont pas d'avant/après : elles figurent seulement sur la page À propos (`autresSavoirFaire`).

## 6. Réalisations : uniquement des avant/après

- Chaque comparaison avant/après est indépendante, avec sa pièce (catégorie, `src/data/categories.ts`) et sa commune (« Belgique » si inconnue). Pas de page par chantier, pas de photo « pendant ».
- Les paires sont rangées par chantier dans `src/content/projets/*.yaml` (voir `README.md` pour en ajouter une).
- Page Réalisations : toutes les paires, filtrables par pièce ; le filtre se lit dans l'adresse (`/realisations/#douche`). Les photos horizontales passent en 4/3 sur deux colonnes, à la même hauteur que les verticales.
- Réglages par paire : position de départ de la poignée (`depart`), cadrage de chaque photo (`cadrageAvant`, `cadrageApres`).

## 7. Curseur avant/après

Deux photos superposées, l'« après » se dévoile selon la poignée (ronde, jaune). Souris, doigt et clavier (flèches), basé sur un `<input type="range">`. Étiquettes « Avant » / « Après » (NL « Voor » / « Na »). Aucune librairie.

## 8. SEO et légal

- `title` et description propres à chaque page et langue, Open Graph, image de partage (provisoire).
- JSON-LD `HomeAndConstructionBusiness` sur l'accueil ; `hreflang` fr-BE, nl-BE, x-default ; `sitemap.xml` et `robots.txt`.
- Mentions légales et Vie privée : textes définitifs (hébergeur Netlify, RPM, Web3Forms).

## 9. Ton des textes

- Clair, direct, rassurant. Vouvoiement (« u » en néerlandais). Phrases courtes.
- Pas de superlatifs vides, pas de promesse inventée.
- Parler de ce que le propriétaire obtient.
- **Ne pas écrire « un seul interlocuteur »** (ni « interlocuteur unique », NL « één aanspreekpunt »).
