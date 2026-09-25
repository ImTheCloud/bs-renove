

Claude · MD
# BS Renove : site vitrine
 
## Le projet
 
Site vitrine de BS Renove SRL, entreprise générale de rénovation belge (siège à Denderleeuw, intervient dans toute la Belgique). Site en français et en néerlandais.
 
Objectif : qu'un propriétaire qui arrive sur le site ait confiance et prenne contact, par téléphone, WhatsApp ou formulaire de devis.
 
- Contenu, pages, textes et plan de travail : `docs/brief.md`
- Ancienne maquette : `docs/maquette-c.html`, **abandonnée** depuis la refonte (voir « Design »). Ne plus s'en servir comme référence.
- Infos manquantes : `docs/contenu-manquant.md` (à créer et tenir à jour)
## Règles non négociables
 
- **Ne jamais inventer d'information sur l'entreprise** : années d'expérience, taille de l'équipe, garanties, assurances, avis clients, chiffres, certifications. Si une info manque, mettre un texte visible `[À CONFIRMER : …]` et l'ajouter à `docs/contenu-manquant.md`.
- **Avant/après : seulement la commune**, jamais la rue ni le numéro du client.
- **Photos : toujours dans `src/assets/`** et affichées avec `astro:assets` (`<Image>` / `<Picture>`). Jamais dans `public/` : les originaux peuvent contenir la position GPS de la maison du client.
- **Tout texte visible existe en FR et en NL.** Chaque texte NL est à faire relire par un natif : le noter dans `docs/contenu-manquant.md`.
- **Pas de base de données, pas de backend.** Site 100 % statique.
- **Pas de cookies de suivi**, pas d'appel à Google Fonts (polices hébergées sur le site).
- **Une phase à la fois** : avant de coder, propose un plan court et attends mon accord. À la fin, `npm run build` doit passer sans erreur, puis résume simplement ce qui est fait et ce qui reste.
- **À la fin de chaque phase** : `npm run build` sans erreur, puis un commit clair et un push sur GitHub.
- Explique tes choix simplement, sans jargon.
## Stack
 
- **Astro** (dernière version stable), sortie statique, TypeScript.
- **CSS** : variables CSS dans `src/styles/tokens.css` + styles scoped des composants Astro. Pas de framework CSS lourd, pas de librairie de composants.
- **Langues** : routage i18n intégré d'Astro. FR par défaut sans préfixe (`/`), NL sous `/nl/`. Textes d'interface dans `src/i18n/fr.ts` et `src/i18n/nl.ts`. Balises `hreflang`. Le sélecteur FR/NL mène à la même page dans l'autre langue.
- **Réalisations** : uniquement des avant/après indépendants, pas de page par chantier. Content collection `projets` (un fichier par chantier, qui range les paires et donne la commune) ; logique dans `src/data/projets.ts`. Détail : `docs/brief.md` § 7.
- **Formulaire de devis** : 3 étapes, Web3Forms (clé `WEB3FORMS_KEY` dans `.env` et chez l'hébergeur), champ anti-spam caché. Sans clé, il ouvre un email pré-rempli avec toutes les réponses.
- **JavaScript** : vanilla, plus Lenis pour le défilement fluide. Le moteur commun est dans `src/scripts/site.ts` (apparitions, scènes pilotées par le défilement).
- **Polices** : Fontsource (Bricolage Grotesque, Figtree, Instrument Serif, Caveat), hébergées sur le site.
- **Sitemap** : `@astrojs/sitemap`.
- **Hébergement** : Cloudflare Pages ou Netlify, déployé depuis Git.
## Design : direction « Atelier » (refonte de septembre 2026)

La maquette `docs/maquette-c.html` (direction C, fond blanc) est **abandonnée** : le site a été entièrement refait. Référence aimée par le client : https://ark-eng.be (annotations manuscrites, fond crème, surlignages).

### Couleurs

Toutes dans `src/styles/tokens.css` : changer une couleur prend une ligne.

- Papier `#F5F2EC` (fond), surfaces `#ECE7DE` / `#E3DDD1`
- Encre `#121418` (titres, sections sombres, bouton principal)
- Bleu du logo `#0066B4` (mots en italique, liens, annotations) ; `#7CBCFF` sur fond sombre
- Jaune marqueur `#FFD447` (surlignages, pastilles de flèche, états actifs) : jamais comme couleur de texte sur fond clair
- WhatsApp `#0E8449`

### Typographie

- **Bricolage Grotesque** (titres, 700, interlettrage très serré), **Instrument Serif italique** (les derniers mots d'un titre, en bleu ou en jaune), **Figtree** (texte), **Caveat** (annotations écrites à la main, avec petites flèches).
- Tailles fluides (`clamp`) dans les tokens.

### Éléments signature

- **Maison en coupe dessinée en SVG** dans le hero (`src/components/accueil/MaisonCoupe.astro`) : se trace à l'arrivée, visite guidée des pièces, chaque pièce mène au service. **Mode nuit** : un clic sur le soleil passe le haut de l'accueil en nuit (fond bleu nuit, lune, étoiles, fenêtres et lampe allumées), un clic sur la lune revient au jour.
- **Avant/après piloté par le défilement** sur l'accueil (section épinglée).
- Bandeau « rubalise » qui défile, liste des métiers avec photo qui suit la souris, chiffres qui comptent, réalisations en défilement horizontal, FAQ en accordéon, formulaire de devis en 3 étapes.
- Grain de papier léger sur toute la page, fond millimétré derrière les en-têtes.

### Mouvement

- Animations au défilement autorisées (apparitions, titres mot par mot), défilement fluide (Lenis), transitions entre pages (`@view-transition`).
- **Tout se coupe avec `prefers-reduced-motion`**, et tout le contenu reste visible et utilisable sans JavaScript.

### Principes qui restent

- Mobile d'abord : dock flottant en bas (Appeler, WhatsApp, Devis). Zones tactiles d'au moins 44-48px.
- Accessibilité : contraste AA, focus clavier visible, vrais `<button>` et `<a>`, texte alternatif sur chaque photo, curseur avant/après au clavier.
- Photos : **seuls les avant/après sont affichés** (les photos isolées de chantier ne le sont plus). **Pas d'image générée par IA présentée comme un chantier** ; ce qui manque est illustré en SVG (dessins, icônes), jamais inventé.

## Commandes
 
- `npm run dev` : serveur local
- `npm run build` : construction du site (doit passer à chaque fin de phase)
- `npm run preview` : aperçu du site construit
 

