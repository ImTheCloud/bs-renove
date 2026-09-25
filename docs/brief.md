

Brief · MD
# Brief : site BS Renove
 
## 1. L'entreprise (faits vérifiés)
 
- **Nom légal** : BS Renove SRL. Sur la camionnette : « Entreprise générale ».
- **Gérant** : Sergiu Bivol.
- **Siège** : Elf Dagwand 67, 9473 Denderleeuw (Welle).
- **Numéro d'entreprise / TVA** : BE 1002.240.127.
- **Téléphone** : 0485 38 43 90 (international : +32 485 38 43 90).
- **WhatsApp** : même numéro que le téléphone.
- **Zone d'intervention** : toute la Belgique.
- **Langues du site** : français (par défaut) et néerlandais.
- **Activités enregistrées** : plomberie, menuiserie, carrelage sols et murs, toiture, maçonnerie et rejointoiement, restauration de bâtiments.
- **Logo** : blanc, bleu et gris (bâtiments, maison et vague bleue). Fichier pas encore reçu. En attendant : logo texte « BS Renove » (« BS » en ink gras, « Renove » en gris) avec « Entreprise générale » en petit dessous. Le logo doit être un composant unique, facile à remplacer par le SVG.
## 2. À confirmer (placeholder visible tant que ce n'est pas confirmé)
 
- Email → `[À CONFIRMER : email]`
- Années d'expérience de Sergiu → `[X] ans`
- Taille de l'équipe → ne pas écrire « notre équipe » tant que ce n'est pas confirmé.
- Garantie des travaux, devis gratuit, assurance → ne rien afficher tant que ce n'est pas confirmé.
- Avis clients → aucun pour l'instant : pas de section avis sur le site, et pas de composant prévu.
- Photo de Sergiu sur un chantier → pour la section « Pourquoi BS Renove ».
- Logo en fichier (SVG idéalement) et vrai bleu du logo.
## 3. Prise de contact
 
Trois moyens, partout sur le site :
 
- **Appeler** : `tel:+32485384390`
- **WhatsApp** : `https://wa.me/32485384390` avec un message pré-rempli (FR : « Bonjour, je souhaiterais un devis pour… » · NL : « Hallo, ik zou graag een offerte voor… »)
- **Formulaire de devis** (2 étapes, 25 septembre 2026) : 1) type de travaux (tuiles, plusieurs choix + « Autre ») ; 2) nom, téléphone, email (facultatif), un mot sur le projet (facultatif), case de consentement vie privée. Pas de commune ni d’adresse : elle se donne en parlant du devis. Après envoi : message de confirmation clair, qui propose aussi d'envoyer des photos du chantier par WhatsApp.
Action principale sur tout le site : **« Demander un devis »**.
 
## 4. Pages
 
| Page | FR | NL |
|---|---|---|
| Accueil | `/` | `/nl/` |
| Services | `/services/` | `/nl/diensten/` |
| Réalisations | `/realisations/` | `/nl/realisaties/` |
| Contact et devis | `/contact/` | `/nl/contact/` |
| Mentions légales | `/mentions-legales/` | `/nl/juridische-informatie/` |
| À propos | `/a-propos/` | `/nl/over-ons/` |
| Rejoindre l’équipe | `/rejoindre-lequipe/` | `/nl/word-lid-van-ons-team/` |
| Vie privée | `/vie-privee/` | `/nl/privacy/` |
 
Plus une page 404 dans les deux langues.
 
## 5. Accueil, section par section (refonte de septembre 2026)

1. **En-tête flottant** : logo, Services, Réalisations, À propos, Contact, sélecteur FR/NL, bouton « Demander un devis ». Sur mobile : bouton « Menu » (panneau plein écran) et dock flottant en bas (Appeler, WhatsApp, Devis).
2. **Hero** : « Votre maison, *refaite* de A à Z. », texte, boutons Devis et WhatsApp, faits confirmés (12 ans de métier · Devis gratuit · Français · Nederlands). À droite : **la maison dessinée en coupe**, chaque pièce mène à son service. En dessous : les 10 métiers en pastilles.
3. **Bandeau** qui défile (les métiers, façon rubalise de chantier).
4. **Avant/après en vitrine**, piloté par le défilement (salle de bain de Watermael-Boitsfort).
5. **Nos métiers** : grande liste des 10 services.
6. **Chapitre sombre** : 4 chiffres (12 ans · 30+ chantiers, à confirmer · 10 métiers · devis gratuit), puis « Comment ça se passe » en 4 étapes.
7. **Réalisations** : bande de cartes avant/après qui basculent de l'avant à l'après.
8. **FAQ** (4 questions, réponses tirées de faits confirmés).
9. **Devis** : titre, contacts directs, formulaire en 2 étapes.
10. **Pied de page** (fond clair) : bande jaune « rubalise » qui défile, appel au devis et WhatsApp, colonnes d’infos, logo et mentions légales.

## 6. Services
 
| Service | Phrase courte (FR) |
|---|---|
| Rénovation complète | Maison ou appartement, on reprend tout de A à Z. |
| Salles de bain | Carrelage, sanitaires et plomberie, clé en main. |
| Cuisines | Pose, menuiserie et finitions, adaptées à votre espace. |
| Carrelage | Sols et murs, à l'intérieur comme à l'extérieur. |
| Terrasses et jardins | Carrelage de terrasse et de jardin, sur une base solide. (ajouté le 25 septembre 2026) |
| Escaliers | Rénovation et habillage d’escaliers. (ajouté le 25 septembre 2026) |
| Toiture | Rénovation et réparation de toitures. |
| Maçonnerie & façades | Gros œuvre, maçonnerie et rejointoiement. |
| Électricité | Installation et rénovation électrique pour votre maison. |
| Peinture et finitions | Peinture des murs et plafonds, et finitions intérieures. |
 
Page Services : une section par service (photo, court texte, exemples de travaux, lien vers les projets liés, bouton devis). Textes sobres, sans promesse inventée.
 
## 7. Réalisations : des avant/après indépendants

Décision du 25 septembre 2026 : **plus de page par chantier**. Les photos isolées
(détails, chantier en cours) n'intéressaient pas, et certaines pages montraient deux
fois la même image. Chaque comparaison avant/après vit seule, avec sa pièce et sa
commune, même quand plusieurs viennent du même chantier.

- Les paires sont rangées dans `src/content/projets/<chantier>.yaml` (champ `avantApres`) :
  photo avant, photo après, légende FR/NL, type de pièce (`src/data/categories.ts`).
  Le fichier du chantier donne la commune, affichée à côté de chaque paire.
- Une paire dont l'« après » n'est pas fini porte `enCours: true` : elle n'est pas affichée.
- Les autres champs de ces fichiers (récit, galerie, couverture, durée) ne sont plus affichés.
- **Page Réalisations** : le mur de tous les avant/après, filtrable par pièce ; le filtre
  se lit dans l'adresse (`/realisations/#salle-de-bain`).
- **Accueil** : une paire en vitrine + une sélection de 8 (liste dans `src/data/projets.ts`).
- **Services** : chaque métier montre ses avant/après (correspondance métier → pièces dans
  `src/data/projets.ts`) ; sans avant/après, un panneau illustré.

## 8. Curseur avant/après
 
- Deux photos superposées ; la photo « après » se dévoile selon la position de la poignée.
- Poignée ronde jaune avec deux flèches, trait vertical blanc.
- Fonctionne à la souris, au doigt et au clavier (flèches gauche/droite). Basé sur un `<input type="range">` avec le libellé « Comparer avant et après ».
- Étiquettes « Avant » / « Après » (NL : « Voor » / « Na »).
- Position de départ : 50 %.
- Aucune librairie externe.
## 9. SEO et légal
 
- `title` et meta description propres à chaque page et chaque langue, balises Open Graph, image de partage.
- Données structurées JSON-LD `HomeAndConstructionBusiness` : nom, adresse, téléphone, zone desservie (Belgique), numéro de TVA, URL.
- `hreflang` fr-BE, nl-BE et x-default.
- `sitemap.xml` et `robots.txt`.
- **Mentions légales** : nom, forme juridique, adresse du siège, numéro d'entreprise/TVA, email, téléphone.
- **Vie privée** : données collectées par le formulaire (lesquelles, pourquoi, combien de temps, service utilisé), droits RGPD, contact. Textes juridiques marqués `[À RELIRE]`.
## 10. Ton des textes
 
- Clair, direct, rassurant. Vouvoiement. Phrases courtes.
- Pas de superlatifs vides (« leader », « n°1 », « le meilleur »).
- Parler de ce que le propriétaire obtient, pas du jargon du métier.
- Néerlandais : néerlandais standard de Belgique, vouvoiement avec « u ».
- **Ne pas écrire « un seul interlocuteur »** (ni « interlocuteur unique », « une seule personne à appeler », NL « één aanspreekpunt ») : retiré de tout le site le 25 septembre 2026, jugé sans valeur ajoutée.
## 11. Plan de travail (une phase à la fois)
 
1. **Mise en place** : projet Astro, tokens, polices, layout, en-tête, pied de page, FR/NL, composant Logo, `docs/contenu-manquant.md`.
2. **Accueil complet** avec placeholders, desktop et mobile.
3. **Réalisations** : collection, liste, page projet, curseur avant/après.
4. **Services, contact et formulaire.**
5. **Finitions** : SEO, pages légales, 404, performance, accessibilité.
6. **Mise en ligne sur une adresse de test**, pour montrer le site au client.
7. **Plus tard** : vraies photos, vrais textes, logo, puis branchement du domaine (acheté chez Wix).
 
