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
| 3 | **Adresse définitive du site** (domaine acheté chez Wix) | `astro.config.mjs`, `robots.txt`, sitemap, balises canoniques, **et la redirection du formulaire de devis** | ⚠️ provisoire : `bs-renove.pages.dev` |
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

---

## 7. Ajouté en phase 3 : les pages réalisations

Les 5 projets existent en fichiers (`src/content/projets/`), mais **tout leur contenu
est provisoire**. Chaque `[À CONFIRMER]` visible à l'écran correspond à une ligne ici.

### Pour chacun des 5 projets

| Ce qui manque | Où ça s'affiche |
|---|---|
| Le récit en trois parties : au départ · les travaux · le résultat | page projet, et le « résultat » sert aussi de description pour Google |
| La durée du chantier, en semaines | pastille sur la page projet et sur l'accueil |
| Ce que montre chaque comparaison avant/après | légende sous le curseur |
| Ce que montre chaque photo de la galerie | texte alternatif, lu par les lecteurs d'écran et par Google |
| Le texte alternatif de la photo de couverture | partout où le projet apparaît |

Tout cela est à écrire **en français et en néerlandais**.

### Les communes sont bilingues

Les noms néerlandais utilisés sont : Oostende (Ostende), Sint-Pieters-Woluwe
(Woluwe-Saint-Pierre), Elsene (Ixelles), Watermaal-Bosvoorde (Watermael-Boitsfort).
Knokke s'écrit pareil dans les deux langues. **À faire confirmer par le relecteur néerlandophone.**

### Le projet mis en avant

Un seul projet porte `misEnAvant: true` : c'est lui qui apparaît sur la page d'accueil,
dans le hero et dans la section avant/après. Aujourd'hui c'est Knokke. À changer dans
le fichier YAML si le client préfère un autre chantier en vitrine.

---

## 8. Connu, à traiter en phase 5 (finitions)

- **Le sitemap ne déclare les versions FR/NL que pour l'accueil et /contact/.** Le module
  `@astrojs/sitemap` ne sait relier deux pages que si leur adresse est identique d'une langue
  à l'autre — or nos adresses sont traduites (`/services/` ↔ `/nl/diensten/`). Les balises
  `hreflang` dans le `<head>` de chaque page, elles, sont complètes et correctes : c'est
  ce que Google lit en priorité. À compléter proprement en phase 5.
- **Image de partage** (réseaux sociaux, 1200×630) : toujours manquante.
- **Données structurées** `HomeAndConstructionBusiness` : pas encore posées.

---

## 9. Ajouté en phase 4 : services, contact et formulaire

### Bloquant : la clé du formulaire

Le formulaire de devis passe par **Web3Forms**. Sans clé, il ne s'affiche pas :
un encadré visible invite à appeler ou à écrire sur WhatsApp. Aucun formulaire cassé.

**Comment l'obtenir** : aller sur https://web3forms.com, donner l'adresse email qui
doit recevoir les demandes, la clé arrive par email. Puis :

```
cp .env.example .env
# coller la clé dans .env, à la place de WEB3FORMS_KEY=
```

**La clé n'est pas un secret** : Web3Forms fonctionne sans serveur, donc elle est
forcément visible dans le code des pages de contact. Elle ne permet que d'envoyer
un message vers l'adresse email associée. Elle est mise dans `.env` pour pouvoir
la changer sans toucher au code, pas pour la cacher.

Le fichier `.env` n'est jamais envoyé sur GitHub. Il faudra aussi renseigner cette
clé chez l'hébergeur (Cloudflare Pages ou Netlify) au moment de la mise en ligne.

### Bloquant : la page vie privée

La case de consentement du formulaire renvoie vers `/vie-privee/`, **qui est encore
une page provisoire**. En l'état, on demande un consentement en pointant vers une page
vide : ce n'est pas conforme au RGPD. Cette page doit être écrite avant la mise en ligne.

Elle doit dire, au minimum :

- quelles données le formulaire collecte (nom, téléphone, email, commune, type de travaux, message) ;
- pourquoi (répondre à une demande de devis) ;
- combien de temps elles sont conservées ;
- que **Web3Forms** transmet le message et agit comme sous-traitant ;
- comment exercer ses droits — d'où la nécessité de **l'adresse email de l'entreprise**.

### À faire valider par le client : les textes des services

Les descriptions et les « exemples de travaux » des 8 services décrivent le métier,
pas l'entreprise : aucune promesse, aucun chiffre, aucune garantie. Ils restent
à relire par Sergiu, qui doit confirmer qu'il fait bien tout cela.

### ⚠ Deux services sortent des activités enregistrées

Le brief (§ 1) liste comme activités enregistrées : plomberie, menuiserie, carrelage,
toiture, maçonnerie et rejointoiement, restauration de bâtiments.

**L'électricité et la peinture n'y figurent pas.** Or le site les annonce comme services (§ 6 du brief).
En Belgique, les travaux électriques sont encadrés et l'installation doit être contrôlée
par un organisme agréé. **À vérifier avec Sergiu avant la mise en ligne** :

- soit ces activités sont bien enregistrées et le brief est incomplet ;
- soit il les sous-traite, et il faut le formuler autrement ;
- soit il faut retirer ces deux services du site.

### Détail

- Les pages de remerciement (`/contact/merci/` et `/nl/contact/bedankt/`) servent aux
  visiteurs dont le navigateur n'exécute pas le JavaScript. Elles sont en `noindex`.
- Le champ caché anti-robots (`botcheck`) est celui attendu par Web3Forms.
