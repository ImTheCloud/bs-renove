# BS Renove : site vitrine

## Le projet

Site vitrine de BS Renove SRL, entreprise générale de rénovation belge (siège à Denderleeuw, intervient dans toute la Belgique). Site en français et en néerlandais.

Objectif : qu'un propriétaire qui arrive sur le site ait confiance et prenne contact, par formulaire de devis, téléphone ou WhatsApp.

- Contenu, pages, textes : `docs/brief.md`
- Suivi avec le client (hors site) : `docs/suivi-client.md`
- Présentation du site : `README.md` (vitrine du dépôt, sans détail interne)
- Guide technique (lancer, modifier le contenu, mise en ligne, DNS) : `docs/guide-technique.md`

## Règles non négociables

- **Ne jamais inventer d'information sur l'entreprise** : années d'expérience, taille de l'équipe, garanties, assurances, avis clients, chiffres, certifications. Si une info manque, ne rien afficher et la noter dans `docs/suivi-client.md`. Le site est en production : **aucune mention « à confirmer », « à relire » ou provisoire** ne doit apparaître.
- **Photos : jamais d'adresse client.** Seule la commune est affichée (« Belgique » si elle est inconnue). Avant tout import, **masquer par un aplat** les numéros de maison, visages, plaques, coordonnées, puis vérifier à l'œil.
- **Photos dans `src/assets/`**, affichées avec `astro:assets`, importées **sans métadonnées** (sharp). Jamais dans `public/` : les originaux contiennent la position GPS de la maison.
- **Réalisations : uniquement des avant/après** (deux photos du même endroit). Pas de photo « pendant », pas de page par chantier. Seule exception : l'Électricité, qui montre une photo seule.
- **Pas d'image générée par IA présentée comme un chantier.** Ce qui manque est illustré en SVG.
- **Tout texte visible existe en FR et en NL.**
- **Pas de base de données, pas de backend.** Site 100 % statique.
- **Pas de cookies de suivi**, pas d'appel à Google Fonts (polices hébergées sur le site).
- **Ne pas écrire « un seul interlocuteur »** (ni équivalents) : jugé sans valeur ajoutée.
- À la fin de chaque changement : `npm run build` sans erreur, commit clair, push.
- Réponses courtes et directes, sans jargon.
- **README** : il présente le site (ce qu'il offre, captures, design, crédits), jamais la façon dont il a été développé ni les détails internes (DNS, Wix, clés, fichiers). Ne pas le mettre à jour à chaque changement : quand le projet approche d'une fin (livraison, mise en ligne, fin d'une série de modifications), **rappeler** à l'utilisateur qu'il faut le mettre à jour.

## Stack

- **Astro** (sortie statique, TypeScript), déployé depuis GitHub sur **Netlify** (`netlify.toml`). Domaine `bsrenovesrl.com` acheté chez Wix.
- **CSS** : variables dans `src/styles/tokens.css` + styles scoped des composants. Pas de framework CSS.
- **Langues** : FR par défaut sans préfixe (`/`), NL sous `/nl/`. Textes dans `src/i18n/fr.ts` et `nl.ts` (même structure). Le sélecteur FR/NL mène à la même page dans l'autre langue (visible directement dans l'en-tête sur mobile). À l'arrivée sur le site, la langue suit celle de l'appareil (NL si réglé en néerlandais, sinon FR) ; un choix fait avec le sélecteur est retenu et prime (script dans `BaseLayout.astro`).
- **Réalisations** : content collection `projets` (un fichier YAML par chantier), logique dans `src/data/projets.ts`.
- **Formulaire de devis** : 2 étapes, Web3Forms (clé `WEB3FORMS_KEY` dans `.env` et chez l'hébergeur), champ anti-spam caché. Sans clé, il ouvre un email pré-rempli avec toutes les réponses.
- **JavaScript** : vanilla + Lenis (défilement fluide). Moteur commun : `src/scripts/site.ts`.
- **Polices** : Fontsource (Bricolage Grotesque, Figtree, Instrument Serif, Caveat).

## Design : direction « Atelier »

### Couleurs (`src/styles/tokens.css`)

- Papier `#F5F2EC` (fond), surfaces `#ECE7DE` / `#E3DDD1`
- Bleu nuit `#0F1626` : titres, boutons (principal, menu), sections sombres, mode nuit, bloc devis. **Jamais de noir** et **un seul bleu nuit partout** (demande du client) : pas de variante plus claire ni de transparence sur les fonds sombres (cartes = bordure seule) ; seul le survol du bouton principal passe à `#1F3056`
- Bleu du logo `#0066B4` : mots en italique, liens, annotations, « 12 ans » du hero ; `#7CBCFF` sur fond sombre
- Jaune marqueur `#FFD447` : surlignages, pastilles de flèche, points de la maison (jamais du texte sur fond clair)
- WhatsApp `#0E8449`

Essayé et refusé par le client : tout passer au bleu du logo (trop sage).

### Typographie

**Bricolage Grotesque** (titres), **Instrument Serif italique** (fin des titres, en bleu), **Figtree** (texte), **Caveat** (annotations manuscrites). Tailles fluides (`clamp`).

### Éléments signature

- **Maison en coupe (SVG)** dans le hero (`MaisonCoupe.astro`) : se trace à l'arrivée, visite guidée des pièces. **Un clic sur une pièce ouvre sa fiche sans changer de page** (métier, petit avant/après à faire glisser, « Voir ce métier », « Devis gratuit » qui coche le métier dans le formulaire). Ordinateur : fiche flottante à côté de la pièce ; téléphone : panneau qui monte du bas de l'écran. Sans JavaScript, chaque pièce reste un lien. Côté rue à gauche (porte, petite toiture, allée pavée), jardin à droite (terrasse, arbre), cave au sous-sol. **Mode nuit** au clic sur le soleil (lune, étoiles, fenêtres allumées, boutons jaunes, logo aux traits clairs).
- **Hero** : « Demander un devis gratuit » + « 12 ans de métier » en grand. Pas de WhatsApp dans le hero.
- **Curseurs avant/après partout** (accueil : une seule section, 4 au maximum ; page Réalisations : tous) : on fait glisser le trait soi-même. Pas d'animation pilotée par le défilement ni de défilement horizontal (refusés par le client). Chiffres qui comptent, FAQ en accordéon, formulaire en 2 étapes, pied de page avec bande « rubalise » jaune.

### Mouvement

Apparitions au défilement, titres mot par mot, Lenis, transitions entre pages. **Tout se coupe avec `prefers-reduced-motion`**, et le contenu reste utilisable sans JavaScript.

### Principes

- **Tous les téléphones** : chaque changement est testé sur Android (Chrome) **et** iPhone (Safari/WebKit), petits et grands écrans. Les curseurs avant/après ne bloquent jamais le défilement : geste vertical = la page défile, horizontal = la poignée bouge.
- Mobile d'abord : dock flottant en bas (Appeler, WhatsApp, Devis). Menu mobile : panneau **clair** (papier) ; en-tête = logo à gauche, FR/NL, puis pilule bleu nuit « Menu » / « Fermer » écrit en entier avec pastille jaune. La barre d'en-tête passe toujours au-dessus du panneau (z-index), testé avec WebKit (Safari). Favicon rond blanc avec le logo (`public/favicon.png`). Zones tactiles ≥ 44 px.
- Accessibilité : contraste AA, focus clavier visible, vrais `<button>`/`<a>`, texte alternatif, curseurs utilisables au clavier.
- Performance : images en WebP aux bonnes tailles (qualité 70), chargement différé sauf le haut de page.

## Commandes

- `npm run dev` : serveur local (après un changement de schéma ou d'images : `rm -rf .astro` puis relancer)
- `npm run build` : vérification des types + construction du site
- `npm run preview` : aperçu du site construit
