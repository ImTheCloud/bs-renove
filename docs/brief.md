

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
- **Formulaire de devis** : Nom, Téléphone, Email, Commune du chantier, Type de travaux (liste des services + « Autre »), Message, case de consentement vie privée. Après envoi : message de confirmation clair, qui propose aussi d'envoyer des photos du chantier par WhatsApp.
Action principale sur tout le site : **« Demander un devis »**.
 
## 4. Pages
 
| Page | FR | NL |
|---|---|---|
| Accueil | `/` | `/nl/` |
| Services | `/services/` | `/nl/diensten/` |
| Réalisations | `/realisations/` | `/nl/realisaties/` |
| Page projet | `/realisations/[slug]/` | `/nl/realisaties/[slug]/` |
| Contact et devis | `/contact/` | `/nl/contact/` |
| Mentions légales | `/mentions-legales/` | `/nl/juridische-informatie/` |
| Vie privée | `/vie-privee/` | `/nl/privacy/` |
 
Plus une page 404 dans les deux langues.
 
## 5. Accueil, section par section (comme la maquette C)
 
1. **En-tête** : logo, liens (Services, Réalisations, À propos → section « Pourquoi », Contact), sélecteur FR/NL en pilule, bouton « Demander un devis ». Sur mobile : menu et bouton d'appel.
2. **Hero** :
   - À gauche : pastille « Denderleeuw · partout en Belgique », titre « Votre maison, entre de bonnes mains. », texte « Salles de bain, cuisines, carrelage, toiture et maçonnerie. On s'occupe de votre chantier du premier devis jusqu'à la dernière finition. », boutons « Demander un devis » et « Écrire sur WhatsApp », ligne « ou appelez le 0485 38 43 90 », trois pastilles : Devis détaillé · Un seul interlocuteur · Français · Nederlands.
   - À droite : grande photo arrondie (la plus belle réalisation), badge flottant « [X] ans de métier dans la construction », étiquette du projet (ex. « Salle de bain · Knokke »).
3. **Services** : titre « Tout pour votre rénovation, au même endroit. », 8 cartes (photo, titre, une phrase), 4 par ligne sur desktop, bouton « Tous nos services ».
4. **Avant / après** : grand curseur avant/après dans un conteneur gris clair arrondi. À droite : titre du projet, 2-3 phrases, pastilles (durée, types de travaux), liste « Autres projets » avec miniatures.
5. **Pourquoi BS Renove** : photo de Sergiu sur un chantier, titre « Un projet. Un seul interlocuteur. », texte « Nous vous accompagnons à chaque étape de votre projet, pour une réalisation claire, efficace et sans mauvaises surprises. », quatre points : Devis détaillé · Suivi du chantier · Interlocuteur unique · Matériaux de qualité.
6. **Bloc contact** (fond ink, grands coins arrondis) : titre « Vous avez un projet ? Parlons-en. », texte « Construction, rénovation ou transformation : expliquez-nous votre projet et recevez une première estimation. », boutons devis, WhatsApp et appeler, trois tuiles : téléphone, email, zone d'intervention.
7. **Pied de page** : nom légal, adresse du siège, numéro de TVA, liens mentions légales et vie privée, sélecteur de langue.
## 6. Services
 
| Service | Phrase courte (FR) |
|---|---|
| Rénovation complète | Maison ou appartement, on reprend tout de A à Z. |
| Salles de bain | Carrelage, sanitaires et plomberie, clé en main. |
| Cuisines | Pose, menuiserie et finitions, adaptées à votre espace. |
| Carrelage | Sols et murs, à l'intérieur comme à l'extérieur. |
| Toiture | Rénovation et réparation de toitures. |
| Maçonnerie & façades | Gros œuvre, maçonnerie et rejointoiement. |
| Électricité | Installation et rénovation électrique pour votre maison. |
| Peinture et finitions | Peinture des murs et plafonds, et finitions intérieures. |
 
Page Services : une section par service (photo, court texte, exemples de travaux, lien vers les projets liés, bouton devis). Textes sobres, sans promesse inventée.
 
## 7. Réalisations
 
Chaque projet est un fichier dans `src/content/projets/` avec :
 
- slug, titre FR/NL, commune, service lié, durée (optionnelle)
- récit FR/NL en trois parties : au départ · les travaux · le résultat
- photo de couverture, paires avant/après, photos de détails, photos de chantier
- ordre d'affichage, projet mis en avant (oui/non)
Photos dans `src/assets/projets/<slug>/`, nommées `cover.jpg`, `avant-1.jpg`, `apres-1.jpg`, `detail-1.jpg`, `chantier-1.jpg`…
 
Projets candidats, en attendant la sélection finale (créer les fichiers avec placeholders) :
 
- Salle de bain · Knokke
- Rénovation intérieure · Ostende
- Toiture · Woluwe-Saint-Pierre
- Cuisine · Ixelles
- Salle de bain · Watermael-Boitsfort
**Page projet** : grande photo, un curseur avant/après par paire, le récit, une galerie (détails et chantier) avec agrandissement accessible, bouton « Un projet similaire ? Demander un devis ».
 
## 8. Curseur avant/après
 
- Deux photos superposées ; la photo « après » se dévoile selon la position de la poignée.
- Poignée ronde blanche avec deux flèches, trait vertical blanc.
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
## 11. Plan de travail (une phase à la fois)
 
1. **Mise en place** : projet Astro, tokens, polices, layout, en-tête, pied de page, FR/NL, composant Logo, `docs/contenu-manquant.md`.
2. **Accueil complet** avec placeholders, desktop et mobile.
3. **Réalisations** : collection, liste, page projet, curseur avant/après.
4. **Services, contact et formulaire.**
5. **Finitions** : SEO, pages légales, 404, performance, accessibilité.
6. **Mise en ligne sur une adresse de test**, pour montrer le site au client.
7. **Plus tard** : vraies photos, vrais textes, logo, puis branchement du domaine (acheté chez Wix).
 
