# Contenu manquant

Tout ce qu'il faut demander au client avant la mise en ligne.
Tant qu'une ligne est ici, le site affiche un texte `[À CONFIRMER : …]` ou ne montre rien du tout.

Mis à jour le 21 septembre 2026 (fin de la phase 2).

---

## 1. Bloquant pour la mise en ligne

| # | Ce qui manque | Où ça sert | État |
|---|---|---|---|
| 1 | **Logo en fichier** (SVG de préférence) + le vrai bleu du logo | partout | ❌ logo texte provisoire |
| 2 | **Adresse définitive du site** (domaine acheté chez Wix) | `astro.config.mjs`, `robots.txt`, sitemap, balises canoniques, **et la redirection du formulaire de devis** | ⚠️ provisoire : `bs-renove.pages.dev` |
| 3 | **Relecture néerlandaise par un natif** | tout le site | ❌ jamais relu |

### Détail

**1. Email — ✅ reçu le 22 septembre 2026** : `Bivol.sergiu@hotmail.com`, renseigné dans
`src/data/entreprise.ts`. Comme tout le site lit cette seule valeur, il n'y avait qu'un
fichier à modifier : les 8 endroits qui affichaient `[À CONFIRMER : email]` l'affichent
maintenant automatiquement (bloc contact, pied de page, mentions légales, vie privée…).
C'est une adresse personnelle (Hotmail) plutôt qu'une adresse professionnelle : à voir avec
Sergiu s'il préfère en créer une dédiée à l'entreprise plus tard.

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

---

## 10. Ajouté en phase 5 : SEO, pages légales, performance

Les pages **Mentions légales** et **Vie privée** sont maintenant écrites en entier,
dans les deux langues. Elles portent la mention `[À RELIRE]` en haut, visible.

### Ce qui manque encore dans ces pages

| Ce qui manque | Où | Pourquoi ça bloque |
|---|---|---|
| **L'adresse email** | les deux pages, et le formulaire | Obligatoire par la loi belge dans les mentions légales, et c'est le contact pour exercer ses droits RGPD |
| **La durée de conservation** des demandes | page vie privée | Le RGPD impose de l'indiquer. Une durée courante est de 3 ans après le dernier contact, mais c'est à Sergiu de décider |
| **Le nom de l'hébergeur** | mentions légales | Connu une fois choisi entre Cloudflare Pages et Netlify |
| **Une relecture par un humain** | les deux pages | Ce sont des textes juridiques. Je les ai écrits à partir des faits connus, mais je ne suis pas juriste |

### Fait, et vérifié

- **Données structurées** `HomeAndConstructionBusiness` sur l'accueil FR et NL :
  nom, adresse, téléphone, numéro de TVA, zone desservie, gérant. L'email n'y figure
  pas tant qu'il n'est pas connu — un champ absent vaut mieux qu'un champ faux.
- **Sitemap** : les 22 adresses déclarent désormais leurs versions française et
  néerlandaise. L'option toute faite d'Astro n'y arrivait pas parce que nos adresses
  sont traduites ; les correspondances sont maintenant construites à partir de la
  même table que le sélecteur de langue.
- **Image de partage** (1200 × 630) : provisoire, faite avec le logo texte et les
  couleurs du site. `scripts/generer-image-partage.mjs` la regénère.
  **À remplacer par une vraie photo de chantier** dès qu'on en a une.
- **Polices préchargées** : le texte s'affiche sans attendre la lecture du CSS.
- **Accessibilité** : les 26 pages contrôlées une par une. Aucun titre manquant ou
  mal ordonné, aucun lien sans intitulé, aucune zone tactile trop petite, aucun
  débordement horizontal.
- **Performance mesurée** sur téléphone milieu de gamme en 4G lente : premier
  affichage à ~360 ms, aucun décalage de mise en page (CLS 0), aucun fichier
  JavaScript séparé à télécharger.

### Reste à faire pour finir la phase 5

- Remplacer l'image de partage par une photo réelle.
- Mesurer avec Lighthouse une fois le site en ligne : les chiffres ci-dessus viennent
  d'un serveur local, la réalité dépendra de l'hébergeur.

---

## 11. Corrections juridiques (relecture indépendante, 21 septembre 2026)

Une relecture séparée a trouvé 3 affirmations fausses ou trompeuses dans les pages
légales. Corrigées, mais deux points restent à trancher avec un professionnel :

- **RPM / RPR** (numéro du tribunal de l'entreprise) : `[À CONFIRMER]` sur la page
  mentions légales. Se déduit probablement du siège (Denderleeuw → arrondissement de
  Dendermonde → « RPM Gand, division Dendermonde »), mais à faire confirmer par le
  comptable de Sergiu avant de l'écrire en dur.
- **Transfert de données hors UE** : le formulaire passe par Web3Forms, dont les
  serveurs sont aux États-Unis. La page vie privée le dit maintenant, mais la garantie
  de transfert qu'exige le RGPD (clauses contractuelles types ou équivalent) n'est pas
  formalisée avec ce prestataire. À vérifier avant la mise en ligne — éventuellement en
  choisissant un service basé dans l'UE si le sujet est sensible pour le client.

Corrigé aussi : la base légale se contredisait elle-même (consentement retirable à
tout moment vs conservation comptable obligatoire), les mentions légales affirmaient
un accord des propriétaires qui n'est pas encore une réalité (reformulé en politique
de l'entreprise plutôt qu'en fait accompli), et les données structurées déclaraient
Sergiu « fondateur » alors que le seul fait vérifié est qu'il est gérant.

---

## 12. Photos reçues du client (21 septembre 2026)

872 photos reçues (exports WhatsApp, donc sans date ni position GPS — WhatsApp les
efface à la compression). Triées en plusieurs temps : analyse technique (netteté,
doublons) sur les 872, puis classification visuelle par lecture réelle des photos,
dossier par dossier.

### Fait le 21 septembre : 6 projets avaient de vraies photos — **annulé depuis**

Sergiu a jugé cette première sélection automatique inutilisable (« il n'y a rien
qui va ») : trop de chantiers en désordre, pas assez de résultats finis et soignés.
**Toutes les photos de cette première passe ont été retirées des 7 projets** (retour
à l'état `[À CONFIRMER]` partout). Voir § 13 pour ce qui les remplace.

**Une photo avait été écartée et supprimée à cette occasion** : elle montrait le
numéro de la maison sur la façade, ainsi qu'un email personnel sur la camionnette.

### Reste à trier : 632 photos, dans 9 dossiers sans commune connue

Le nom de ces dossiers ne précise pas d'adresse, et sans GPS je ne peux pas deviner
la commune — ce serait inventer une information sur le domicile d'un client.

| Dossier | Photos | Ce qu'il montre |
|---|---|---|
| Rénovations / Rénovations 2 | 200 | à examiner |
| Rénovation intérieur / 2 / extérieur | 222 | à examiner |
| Travaux / Travaux generale lartigue | 118 | à examiner |
| Carrelage sur plusieurs endroits | 86 | carrelage à divers endroits — utilisable comme photos génériques du service Carrelage, sans lien à une commune |
| Travaux Av coloniale, 1170 watermael | 84 | commune connue (Watermael-Boitsfort) mais le dossier mélange deux adresses différentes (2 photos montrent une façade voisine, avec le panneau d'un bureau d'architectes) — à trier avant import |
| Autres | 6 | à examiner |

**À demander à Claudiu / Sergiu** : à quelle commune (et éventuellement quel
projet déjà listé) correspond chaque dossier ? Une fois su, le même pipeline
(tri technique → lecture visuelle → sélection → import) peut être relancé dessus.

### Les photos originales

Toujours dans `~/Downloads`, intactes. Rien n'a été supprimé de ce dossier : les
9 dossiers non triés en ont encore besoin, et même les 7 dossiers déjà traités
gardent leurs photos non retenues, au cas où un meilleur choix serait souhaité
plus tard (par exemple une fois le récit de chaque projet connu).

---

## 13. Tri par tags Finder (22 septembre 2026)

Après le rejet de la première sélection (§ 12), Sergiu a proposé une meilleure
méthode : il classe lui-même les photos avec des tags Finder (couleur, puis noms
personnalisés par pièce/type de travaux) directement sur son Mac, et je les lis
par programme pour construire le contenu. Deux outils permanents ont été écrits
pour ça, dans `scripts/` :

- `scanner-tags-finder.mjs` : parcourt un dossier et liste chaque photo taguée
  avec ses tags.
- `decoder-tags-finder.mjs` : lit le tag Finder d'un fichier (format binaire
  propriétaire d'Apple, que `plutil` ne sait pas lire).

**À réutiliser telles quelles la prochaine fois que Sergiu tague de nouvelles
photos** : `node scripts/scanner-tags-finder.mjs ~/Downloads sortie.json`.

### Découverte : deux gros dossiers non triés en faisaient partie

Les dossiers « Rénovation intérieur 2 » et « Rénovation intérieur extérieur »
(198 photos, listés comme « à examiner » au § 12) sont en réalité **le même
chantier** que le petit dossier tagué « Avenue Manoir d'Anjou, Woluwe-Saint-Pierre » :
Sergiu l'a confirmé en taguant les trois dossiers ensemble. Un des plus gros
blocages du tri précédent est donc résolu.

### 14 tags traités → 2 projets enrichis

| Projet | Tags utilisés | Couverture | Avant/après | Galerie |
|---|---|---|---|---|
| `renovation-woluwe-saint-pierre` | Plomberie, Electriciter, Sale De Bain, Toilette, Chambres, Escaliers, Escalier Garage, Plafond, CuisinesInterieur, Terasse exterieur, TerrasseGarage, ToitPorte | ✅ | ✅ 6 paires | 9 photos |
| `cuisine-ixelles` | Orange (chambre avec le même parquet que la cuisine, même adresse) | — *(inchangée)* | — | +3 photos |

Le récit (`recit.depart/travaux/resultat`), la description de la photo de
couverture (`couvertureAlt`) et la durée du chantier restent `[À CONFIRMER]`
pour `renovation-woluwe-saint-pierre` : je peux décrire ce qu'une photo montre,
pas raconter le chantier vu par le propriétaire. `cuisine-ixelles` n'a toujours
aucune photo de la cuisine elle-même (seulement de la chambre voisine, avec le
même parquet) : sa couverture, son récit et sa légende avant/après restent donc
`[À CONFIRMER]` aussi, en attendant de vraies photos de la cuisine.

Un 14ᵉ tag (« Parquet/fenetre/vitre/plafond », posé sur un chantier sans adresse
connue) a servi de photo d'illustration pour le service **Rénovation complète**
(`src/data/services-photos.ts`) plutôt que pour un projet : impossible de le
présenter comme une réalisation sans savoir où c'est.

### Photos écartées pour la vie privée (7 au total, ce round)

Repérées à l'œil, une par une, avant tout import — jamais seulement à partir du
texte généré automatiquement :

- **Terasse exterieur** (5 photos) : numéro de maison « 58 » visible sur la
  façade (3 photos), plaques d'immatriculation lisibles et numéro de téléphone
  de l'entreprise affiché sur une camionnette (1 photo), personne et véhicule
  visibles au loin (1 photo).
- **Parquet/fenetre/vitre/plafond** (4 photos) : sacs de gravats d'un fournisseur
  avec coordonnées lisibles (1 photo), plan du logement scotché sur une porte,
  visible en arrière-plan (3 photos).

Les paires avant/après qui utilisaient une de ces photos ont été écartées avec ;
des photos propres du même tag ont servi à la place quand c'était possible
(c'est le cas pour la terrasse et pour le parquet, tous deux présents dans la
galerie finale avec d'autres clichés).

### Reste à faire

- Les **5 projets de la première sélection** (Knokke, Ostende, toiture Woluwe,
  Watermael-Boitsfort) sont toujours sans aucune photo : à retraiter avec la
  méthode des tags Finder quand Sergiu aura le temps de les taguer.
- Les **9 dossiers sans commune connue** du § 12 (632 photos) n'ont pas bougé.
- `cuisine-ixelles` a besoin de vraies photos de la cuisine elle-même.
- Le récit de `renovation-woluwe-saint-pierre` (au départ / travaux / résultat)
  et sa durée en semaines, à écrire avec Sergiu.
- **Sergiu a prévenu qu'il continuerait à taguer des photos au fil de l'eau** :
  relancer le même pipeline (scanner → lecture visuelle personnelle → sélection →
  `sharp` pour nettoyer les métadonnées → import) à chaque nouveau lot.

### ⚠ Blocage technique du poste, sans rapport avec le site (contourné)

Sur cette machine, la commande `git` du système (`/usr/bin/git`) échoue avec
*« You have not agreed to the Xcode license agreements »* tant que personne n'a
lancé `sudo xcodebuild -license accept` dans un Terminal (mot de passe requis).
En attendant, le git livré avec Xcode fonctionne directement sans ce blocage :
`/Applications/Xcode.app/Contents/Developer/usr/bin/git`.
