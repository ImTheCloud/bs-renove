

Claude · MD
# BS Renove : site vitrine
 
## Le projet
 
Site vitrine de BS Renove SRL, entreprise générale de rénovation belge (siège à Denderleeuw, intervient dans toute la Belgique). Site en français et en néerlandais.
 
Objectif : qu'un propriétaire qui arrive sur le site ait confiance et prenne contact, par téléphone, WhatsApp ou formulaire de devis.
 
- Contenu, pages, textes et plan de travail : `docs/brief.md`
- Maquette de référence : `docs/maquette-c.html` (direction « C · Artisan, fond blanc », page d'accueil desktop). Lis son code pour les couleurs, tailles et formes exactes. Elle montre le style, pas chaque détail. Si elle contredit le brief (par exemple le nombre de services), **le brief gagne**. Il n'y a pas de maquette mobile : l'adapter selon la règle « Mobile d'abord » plus bas.
- Infos manquantes : `docs/contenu-manquant.md` (à créer et tenir à jour)
## Règles non négociables
 
- **Ne jamais inventer d'information sur l'entreprise** : années d'expérience, taille de l'équipe, garanties, assurances, avis clients, chiffres, certifications. Si une info manque, mettre un texte visible `[À CONFIRMER : …]` et l'ajouter à `docs/contenu-manquant.md`.
- **Projets : seulement la commune**, jamais la rue ni le numéro du client.
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
- **Projets** : content collection Astro, un fichier par projet avec les champs FR et NL.
- **Formulaire** : service externe (Web3Forms ou Formspree), clé dans une variable d'environnement, champ anti-spam caché.
- **JavaScript** : vanilla et minimal. Seuls éléments interactifs : curseur avant/après, menu mobile, formulaire, agrandissement des photos.
- **Polices** : Fontsource (ou fichiers woff2 locaux).
- **Sitemap** : `@astrojs/sitemap`.
- **Hébergement** : Cloudflare Pages ou Netlify, déployé depuis Git.
## Design : direction C, fond blanc
 
### Couleurs
 
```css
--color-bg: #FFFFFF;        /* fond de page */
--color-surface: #F3F5F8;   /* cartes, pastilles, points forts */
--color-surface-2: #EEF1F5; /* conteneurs secondaires, sélecteur de langue */
--color-ink: #1D2A4A;       /* titres, texte fort, bloc contact */
--color-accent: #2F5BD3;    /* boutons principaux, liens (provisoire : à caler sur le logo) */
--color-text: #4B5160;      /* texte courant */
--color-muted: #5F6573;     /* texte secondaire */
--color-border: #D5DAE1;
/* Sur le bloc contact (fond ink) : texte secondaire #D6DCEA, petits labels #B9C3DA */
```
 
Toutes les couleurs passent par ces variables : changer le bleu doit prendre une ligne.
 
### Typographie
 
- **Bricolage Grotesque** pour les titres, graisse 700 à 800, interlettrage serré (-0.02em à -0.035em).
- **Figtree** pour le texte, graisse 400 à 700.
- Tailles desktop → mobile : H1 76px → 44px · H2 58px → 36px · H3 26px → 22px · texte 17-19px → 16-17px · petits textes 14-15px.
### Formes
 
- Boutons et pastilles : 999px (pilules). Hauteur 52-60px, jamais moins de 48px sur mobile.
- Grandes photos : 32px · cartes : 28px · images dans les cartes : 20px · petits blocs : 18px · grands conteneurs : 36px.
- Ombre uniquement pour ce qui flotte sur une photo : `0 12px 32px rgba(29,42,74,0.14)`.
- Contenu max 1344px de large, marges latérales 48px sur desktop, 20px sur mobile.
### Boutons
 
- Principal : fond accent, texte blanc.
- Secondaire : fond blanc, bordure 1px `--color-border`, texte ink.
- Sur le bloc contact : principal fond blanc texte ink, secondaire contour blanc à 35 %.
### Icônes
 
SVG au trait (épaisseur 1.8), jamais d'emoji. Pour WhatsApp, une icône de bulle générique.
 
### Principes
 
- **L'élément marquant du site, c'est le curseur avant/après.** Le reste reste calme et propre.
- **Mouvement** : un seul moment soigné, l'arrivée du hero. Pas d'animation d'apparition sur chaque section. Respecter `prefers-reduced-motion`.
- **Mobile d'abord** : la plupart des visiteurs sont sur téléphone. Sur mobile, barre fixe en bas avec « Appeler » et « WhatsApp ».
- **Accessibilité** : contraste AA minimum, focus clavier visible, vrais `<button>` et `<a>`, texte alternatif sur chaque photo, curseur avant/après utilisable au clavier.
- **Performance** : Lighthouse ≥ 95 sur mobile, images en AVIF/WebP aux bonnes tailles, chargement différé sauf la photo du hero.
## Commandes
 
- `npm run dev` : serveur local
- `npm run build` : construction du site (doit passer à chaque fin de phase)
- `npm run preview` : aperçu du site construit
 

