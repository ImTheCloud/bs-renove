# Contenu manquant

Tout ce qu'il faut demander au client avant la mise en ligne.
Tant qu'une ligne est ici, le site affiche un texte `[À CONFIRMER : …]` ou ne montre rien du tout.

Mis à jour le 21 septembre 2026 (fin de la phase 2).

---

## 1. Bloquant pour la mise en ligne

| # | Ce qui manque | Où ça sert | État |
|---|---|---|---|
| 1 | **Adresse email** de l'entreprise | bloc contact, pied de page, mentions légales, vie privée | ❌ absent |
| 2 | **Logo en fichier** (SVG de préférence) + le vrai bleu du logo | partout | ❌ logo texte provisoire |
| 3 | **Adresse définitive du site** (domaine acheté chez Wix) | `astro.config.mjs`, `robots.txt`, sitemap, balises canoniques | ⚠️ provisoire : `bs-renove.pages.dev` |
| 4 | **Relecture néerlandaise par un natif** | tout le site | ❌ jamais relu |

### Détail

**1. Email.** Aucun email n'a été communiqué. Il est obligatoire dans les mentions légales
et dans la page vie privée (contact pour les droits RGPD). Pour l'instant `entreprise.email`
vaut `null` dans `src/data/entreprise.ts` : aucun email inventé n'apparaît nulle part.

**2. Logo.** En attendant, `src/components/Logo.astro` affiche « BS Renove » en texte,
avec « Entreprise générale » dessous. Pour le remplacer : coller le SVG dans ce fichier,
sans changer le nom du composant. Le bleu `--color-accent: #2f5bd3` de
`src/styles/tokens.css` est provisoire et devra être calé sur celui du logo — une seule ligne à changer.

**3. Adresse du site.** Le domaine est acheté chez Wix mais pas encore branché.
Valeur provisoire à trois endroits : la constante `SITE` dans `astro.config.mjs`,
et la ligne `Sitemap:` de `public/robots.txt`.

**4. Néerlandais.** Tous les textes NL de `src/i18n/nl.ts` ont été écrits sans relecture
par un néerlandophone. À faire relire en entier. Points à vérifier en priorité :

- « Algemene aannemer » comme traduction de « Entreprise générale »
- « Offerte aanvragen » pour le bouton principal
- le vouvoiement avec « u », cohérent partout
- « Maatschappelijke zetel », « btw », « Juridische informatie »

---

## 2. Informations sur l'entreprise, à ne pas inventer

Rien de tout ceci n'est écrit sur le site tant que le client ne l'a pas confirmé.

| Information | Où ça servirait | État |
|---|---|---|
| Années d'expérience de Sergiu | badge du hero « [X] ans de métier » | ❌ à demander |
| Taille de l'équipe | section « Pourquoi BS Renove » | ❌ ne pas écrire « notre équipe » |
| Garantie sur les travaux | arguments, bloc contact | ❌ ne rien afficher |
| Devis gratuit (oui / non) | boutons, page contact | ❌ ne rien affirmer |
| Assurance (responsabilité, décennale) | page contact, mentions légales | ❌ ne rien afficher |
| Avis clients | — | ❌ aucun : pas de section avis prévue |

---

## 3. Photos

| Photo | Où | État |
|---|---|---|
| Photo principale du hero (la plus belle réalisation, format horizontal) | accueil | ❌ manquante |
| Photo de Sergiu sur un chantier | section « Pourquoi BS Renove » | ❌ manquante |
| Une photo par service (8 services) | accueil et page services | ❌ manquantes |
| Paires avant / après, même angle | accueil, pages projets | ❌ manquantes |
| Photos de détails et de chantier | pages projets | ❌ manquantes |
| Image de partage (réseaux sociaux, 1200×630) | balises Open Graph | ❌ manquante |

**Deux règles pour les photos :**

1. Elles vont dans `src/assets/`, **jamais** dans `public/`. Les fichiers d'origine
   contiennent souvent la position GPS de la maison du client.
2. Sur le site, on ne cite **que la commune** : jamais la rue ni le numéro.

---

## 4. Projets à sélectionner

Cinq projets candidats, à confirmer avec le client (et à accompagner de leurs photos) :

- Salle de bain · Knokke
- Rénovation intérieure · Ostende
- Toiture · Woluwe-Saint-Pierre
- Cuisine · Ixelles
- Salle de bain · Watermael-Boitsfort

Pour chacun il faut : la commune, le service lié, la durée (optionnelle),
et le récit en trois parties (au départ · les travaux · le résultat), en FR **et** en NL.

---

## 5. Textes juridiques

- **Mentions légales** : squelette seulement. Il manque l'email. À relire par le client.
- **Vie privée** : dépend du service de formulaire retenu (Web3Forms ou Formspree), qui n'est
  pas encore choisi. Il faudra dire quelles données sont collectées, pourquoi, combien de temps
  et par quel service elles transitent.
- Les deux pages porteront la mention `[À RELIRE]` tant qu'un humain ne les a pas validées.

---

## 6. Technique, à décider plus tard

| Sujet | Décision attendue | Phase |
|---|---|---|
| Service de formulaire | Web3Forms ou Formspree | 4 |
| Clé du formulaire | à mettre dans `.env` (jamais sur GitHub) | 4 |
| Hébergement | Cloudflare Pages ou Netlify | 6 |
| Page 404 en néerlandais | l'hébergeur ne sert qu'un seul fichier 404 par défaut ; à configurer si on veut une 404 NL séparée | 6 |
