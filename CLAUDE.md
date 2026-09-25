# BS Renove : site vitrine

## Le projet

Site vitrine de BS Renove SRL, entreprise générale de rénovation belge (siège à Denderleeuw, intervient dans toute la Belgique). Site en français et en néerlandais.

Objectif : qu'un propriétaire qui arrive sur le site ait confiance et prenne contact, par formulaire de devis, téléphone ou WhatsApp.

- Contenu, pages, textes : `docs/brief.md`
- Ce qui reste à confirmer avec le client : `docs/contenu-manquant.md` (à tenir à jour)
- Architecture du code : `README.md`

## Règles non négociables

- **Ne jamais inventer d'information sur l'entreprise** : années d'expérience, taille de l'équipe, garanties, assurances, avis clients, chiffres, certifications. Si une info manque, ne rien afficher (ou un texte visible `[À CONFIRMER : …]`) et l'ajouter à `docs/contenu-manquant.md`.
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

## Stack

- **Astro** (sortie statique, TypeScript), déployé depuis Git (Cloudflare Pages ou Netlify).
- **CSS** : variables dans `src/styles/tokens.css` + styles scoped des composants. Pas de framework CSS.
- **Langues** : FR par défaut sans préfixe (`/`), NL sous `/nl/`. Textes dans `src/i18n/fr.ts` et `nl.ts` (même structure). Le sélecteur FR/NL mène à la même page dans l'autre langue.
- **Réalisations** : content collection `projets` (un fichier YAML par chantier), logique dans `src/data/projets.ts`.
- **Formulaire de devis** : 2 étapes, Web3Forms (clé `WEB3FORMS_KEY` dans `.env` et chez l'hébergeur), champ anti-spam caché. Sans clé, il ouvre un email pré-rempli avec toutes les réponses.
- **JavaScript** : vanilla + Lenis (défilement fluide). Moteur commun : `src/scripts/site.ts`.
- **Polices** : Fontsource (Bricolage Grotesque, Figtree, Instrument Serif, Caveat).

## Design : direction « Atelier »

### Couleurs (`src/styles/tokens.css`)

- Papier `#F5F2EC` (fond), surfaces `#ECE7DE` / `#E3DDD1`
- Encre `#121418` : titres, bouton principal, sections sombres
- Bleu du logo `#0066B4` : mots en italique, liens, annotations, « 12 ans » du hero ; `#7CBCFF` sur fond sombre
- Jaune marqueur `#FFD447` : surlignages, pastilles de flèche, points de la maison (jamais du texte sur fond clair)
- Bleu nuit `#0F1626` : mode nuit de l'accueil, bloc devis
- WhatsApp `#0E8449`

Essayé et refusé par le client : tout passer au bleu du logo (trop sage).

### Typographie

**Bricolage Grotesque** (titres), **Instrument Serif italique** (fin des titres, en bleu), **Figtree** (texte), **Caveat** (annotations manuscrites). Tailles fluides (`clamp`).

### Éléments signature

- **Maison en coupe (SVG)** dans le hero (`MaisonCoupe.astro`) : se trace à l'arrivée, visite guidée des pièces, chaque pièce mène à son métier ou à ses avant/après. Côté rue à gauche (porte, petite toiture, allée pavée), jardin à droite (terrasse, arbre), cave au sous-sol. **Mode nuit** au clic sur le soleil (lune, étoiles, fenêtres allumées, boutons jaunes, logo aux traits clairs).
- **Hero** : « Demander un devis gratuit » + « 12 ans de métier » en grand. Pas de WhatsApp dans le hero.
- **Curseurs avant/après partout** (accueil : une seule section, 4 au maximum ; page Réalisations : tous) : on fait glisser le trait soi-même. Pas d'animation pilotée par le défilement ni de défilement horizontal (refusés par le client). Chiffres qui comptent, FAQ en accordéon, formulaire en 2 étapes, pied de page avec bande « rubalise » jaune.

### Mouvement

Apparitions au défilement, titres mot par mot, Lenis, transitions entre pages. **Tout se coupe avec `prefers-reduced-motion`**, et le contenu reste utilisable sans JavaScript.

### Principes

- Mobile d'abord : dock flottant en bas (Appeler, WhatsApp, Devis). Zones tactiles ≥ 44 px.
- Accessibilité : contraste AA, focus clavier visible, vrais `<button>`/`<a>`, texte alternatif, curseurs utilisables au clavier.
- Performance : images en WebP aux bonnes tailles (qualité 70), chargement différé sauf le haut de page.

## Commandes

- `npm run dev` : serveur local (après un changement de schéma ou d'images : `rm -rf .astro` puis relancer)
- `npm run build` : vérification des types + construction du site
- `npm run preview` : aperçu du site construit
