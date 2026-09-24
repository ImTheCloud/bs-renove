# Contenu manquant

Tout ce qu'il faut demander au client avant la mise en ligne.
Tant qu'une ligne est ici, le site affiche un texte `[À CONFIRMER : …]` ou ne montre rien du tout.

Mis à jour le 21 septembre 2026 (fin de la phase 2).

---

## 1. Bloquant pour la mise en ligne

| # | Ce qui manque | Où ça sert | État |
|---|---|---|---|
| 1 | ~~Logo en fichier~~ | partout | ✅ reçu, voir détail |
| 2 | **Adresse définitive du site** (domaine acheté chez Wix) | `astro.config.mjs`, `robots.txt`, sitemap, balises canoniques, **et la redirection du formulaire de devis** | ⚠️ provisoire : `bs-renove.pages.dev` |
| 3 | ~~Relecture néerlandaise par un natif~~ | tout le site | ✅ Sergiu a dit que ce n'était pas la peine (22 septembre 2026) — voir note |

### Détail

**1. Email — ✅ reçu le 22 septembre 2026** : `Bivol.sergiu@hotmail.com`, renseigné dans
`src/data/entreprise.ts`. Comme tout le site lit cette seule valeur, il n'y avait qu'un
fichier à modifier : les 8 endroits qui affichaient `[À CONFIRMER : email]` l'affichent
maintenant automatiquement (bloc contact, pied de page, mentions légales, vie privée…).
C'est une adresse personnelle (Hotmail) plutôt qu'une adresse professionnelle : à voir avec
Sergiu s'il préfère en créer une dédiée à l'entreprise plus tard.

**2. Logo — ✅ reçu le 22 septembre 2026**, `src/assets/marque/icone-logo.png`, affiché
via `src/components/Logo.astro` à côté du nom « BS Renove », en-tête et pied de page.
Le fichier reçu avait un fond blanc opaque ; détouré (fond transparent) le même jour à
la demande de Sergiu, s'affiche maintenant proprement sur n'importe quel fond. La couleur
`--color-accent: #0066b4` de `src/styles/tokens.css` est calée sur le bleu du logo
(mesurée directement sur le fichier).

**3. Adresse du site.** Le domaine est acheté chez Wix mais pas encore branché.
Valeur provisoire à trois endroits : la constante `SITE` dans `astro.config.mjs`,
et la ligne `Sitemap:` de `public/robots.txt`.

**4. Néerlandais — ✅ Sergiu a dit que ça allait (22 septembre 2026).** Tous les textes
NL de `src/i18n/nl.ts` ont été écrits par moi, sans relecture par un néerlandophone natif
au sens strict — mais Sergiu, à qui j'ai signalé ce point, a répondu que c'était bon
comme ça. Je ne relance donc plus cette demande. Si un jour quelqu'un veut quand même
relire en détail, les points à vérifier en priorité restent :

- « Algemene aannemer » comme traduction de « Entreprise générale »
- « Offerte aanvragen » pour le bouton principal
- le vouvoiement avec « u », cohérent partout
- « Maatschappelijke zetel », « btw », « Juridische informatie »

---

## 2. Informations sur l'entreprise, à ne pas inventer

Rien de tout ceci n'est écrit sur le site tant que le client ne l'a pas confirmé.

| Information | Où ça servirait | État |
|---|---|---|
| ~~Années d'expérience de Sergiu~~ | badge du hero | ✅ 12 ans, voir détail |
| ~~Taille de l'équipe~~ | section « Pourquoi BS Renove » | ✅ voir détail |
| Garantie sur les travaux | arguments, bloc contact | ✅ **tranché** : rien à afficher, ça dépend du chantier — ne pas redemander |
| ~~Devis gratuit (oui / non)~~ | boutons, page contact | ✅ oui, voir détail |
| ~~Assurance (responsabilité, décennale)~~ | page contact, mentions légales | ✅ **non**, voir détail |
| Avis clients | — | ❌ aucun : pas de section avis prévue |

### Détail (reçu le 22 septembre 2026, par message à Sergiu)

- **Années d'expérience : 12 ans.** Dans `src/data/entreprise.ts`
  (`anneesExperience`), affiché dans le badge du hero (`Hero.astro`).
- **Équipe : une douzaine de personnes, avec des indépendants.** Sergiu ne
  salarie pas tout le monde en direct, il travaille aussi avec des
  indépendants — phrase choisie pour rester exacte (« Équipe d'une douzaine
  de personnes », pas « nos employés »). Ajouté à la liste « Pourquoi BS
  Renove » sur l'accueil.
- **Garantie : pas de réponse à afficher.** Sergiu ne veut rien affirmer
  ici parce que ça dépend du chantier — ce n'est pas une info qui manque
  encore, c'est une décision de ne rien dire. Le site n'affiche donc rien
  sur ce sujet, comme avant, mais **ne plus reposer la question**.
- **Devis gratuit : oui.** Ajouté dans les atouts du hero (« Devis gratuit »)
  et dans la liste « Pourquoi BS Renove » (« Devis gratuit et détaillé »).
- **Assurance (responsabilité civile, décennale) : non.** Rien n'est affiché sur le
  site à ce sujet — il n'y avait déjà rien avant, ça reste comme ça. Une remarque,
  pas une action à faire : en Belgique, une assurance décennale est **obligatoire**
  pour certains travaux touchant à la stabilité d'un logement (loi Peeters-Borsus,
  2018). Je ne suis pas juriste et ce n'est pas à moi de trancher si ça concerne
  BS Renove, mais ça vaut la peine que Sergiu vérifie avec son assureur ou son
  comptable — indépendamment de ce qui est écrit sur le site.

---

## 3. Photos

*(Tableau d'origine, avant qu'aucune photo n'existe. Mis à jour le 22 septembre —
voir §§ 12 à 14 pour le détail de ce qui a été ajouté depuis.)*

| Photo | Où | État |
|---|---|---|
| ~~Photo principale du hero~~ | accueil | ✅ celle de Woluwe-Saint-Pierre |
| Photo de Sergiu sur un chantier | section « Pourquoi BS Renove » | ❌ toujours manquante |
| ~~Une photo par service~~ | accueil et page services | ✅ 6 services sur 8 ; les 2 restants sont masqués plutôt que d'afficher un cadre vide (§ 15) |
| ~~Paires avant / après~~ | accueil, pages projets | ✅ plusieurs, sur 4 des 5 projets publiés |
| ~~Photos de détails et de chantier~~ | pages projets | ✅ une centaine au total |
| ~~Image de partage~~ | balises Open Graph | ✅ générée (provisoire : logo + couleurs, pas une vraie photo) |

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
- ~~Vie privée : dépend du service de formulaire retenu~~ — plus de service de formulaire
  du tout depuis le 22 septembre (§ 16), la page est réécrite en conséquence.
- Les deux pages porteront la mention `[À RELIRE]` tant qu'un humain ne les a pas validées.

---

## 6. Technique, à décider plus tard

| Sujet | Décision attendue | Phase |
|---|---|---|
| ~~Service de formulaire~~ | abandonné le 22 septembre au profit d'un simple lien email, § 16 | 4 |
| Hébergement | Cloudflare Pages ou Netlify | 6 |
| Page 404 en néerlandais | l'hébergeur ne sert qu'un seul fichier 404 par défaut ; à configurer si on veut une 404 NL séparée | 6 |

---

## 7. Ajouté en phase 3 : les pages réalisations

> **Obsolète depuis le 25 septembre 2026 (§ 18)** : il n'y a plus de page par chantier.
> Les récits, durées, légendes de galerie et couvertures ci-dessous ne sont plus demandés.

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

*(Cette section décrit le formulaire Web3Forms tel qu'il a existé un temps.
Il n'existe plus depuis le 22 septembre 2026 — remplacé par un simple lien
email, voir § 16. Gardé ici pour mémoire, pas pour action.)*

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
- ~~**Transfert de données hors UE**~~ — ✅ tranché le 22 septembre 2026, voir § 13.

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

### Round 2 : accueil et services enrichis (22 septembre 2026, plus tard)

Après un premier retour de Sergiu (« je pensais qu'on avait plus de photos que
ça, je n'en vois pas dans service »), deuxième passe sur le même matériel déjà
trié, plutôt qu'une nouvelle collecte :

- **Le hero et le curseur avant/après de l'accueil** (l'élément le plus visible
  du site) montraient le projet Knokke, qui n'a aucune photo — l'accueil avait
  donc l'air vide au premier coup d'œil. Basculé sur `renovation-woluwe-saint-pierre`
  (`misEnAvant`), qui en a. Un simple réglage, zéro nouvelle photo nécessaire.
- **9 photos de plus dans la galerie Woluwe-Saint-Pierre**, puisées parmi les
  « meilleures » déjà validées par le tri mais pas encore utilisées (local
  technique, gaines électriques, deux pièces supplémentaires, plafond en
  chantier avec l'équipe au travail, etc.) : 16 photos de galerie + 6 paires
  avant/après au total sur ce projet, sans redescendre sous la barre qualité.
- **3 services de plus ont une vraie photo** : Électricité, Toiture, Cuisines
  (avant : seuls Salles de bain, Carrelage et Rénovation complète en avaient).
  Restent sans photo, honnêtement : Maçonnerie & façades et Peinture &
  finitions — aucune photo du lot ne montre vraiment ça, mieux vaut le
  placeholder « photo à venir » qu'une photo qui ne correspond pas.

La structure du site (une page par projet + une page par service) n'a pas
changé : elle permet déjà d'ajouter facilement un nouveau projet quand un
nouveau tag arrive, ce qui était la vraie question posée.

### Round 3 : plus de pages vides accessibles (22 septembre 2026, encore plus tard)

Sergiu est tombé sur une vraie incohérence : la page Services montrait une
photo réelle de cuisine (empruntée au chantier de Woluwe-Saint-Pierre) sur la
carte « Cuisines », mais le bouton « Voir le projet » renvoyait vers
`cuisine-ixelles` — le seul projet marqué comme service « cuisines » — qui lui
n'a aucune vraie photo de cuisine (juste une chambre voisine avec le même
parquet). Le même problème touchait en fait la plupart des 8 services, parce
que 5 des 7 projets n'ont encore aucune vraie photo.

**Changement de règle** (`src/data/projets.ts`) : un projet n'apparaît nulle
part sur le site public (page Réalisations, accueil, « voir le projet », page
d'un autre projet) **tant qu'il n'a pas de vraie photo de couverture**. Rien
n'est supprimé — les fichiers restent dans `src/content/projets/` — mais un
visiteur ne peut plus tomber sur une page presque vide en cliquant quelque
part. Dès qu'un projet reçoit une couverture, il réapparaît automatiquement
partout, sans autre changement à faire.

Conséquence immédiate : seul `renovation-woluwe-saint-pierre` est publié pour
l'instant (18 pages construites au lieu de 28). C'est volontaire et normal :
les 5 autres projets (Knokke, Ostende, toiture Woluwe, Watermael-Boitsfort)
attendent encore leurs vraies photos (§ 12), et `cuisine-ixelles` attend une
vraie photo de la cuisine elle-même (§ 13). Rien n'a été perdu : les 3 photos
de chambre déjà ajoutées à `cuisine-ixelles` restent dans le fichier, prêtes
à apparaître dès qu'une couverture est ajoutée.

**La page Services montre maintenant plusieurs vraies photos par métier**
(2 à 3, selon ce qu'on a), peu importe de quel projet elles viennent — plus
besoin de cliquer pour se rendre compte qu'il n'y a rien. Le bouton
« Voir le projet » ne s'affiche que quand un vrai projet publié correspond
à ce service exact (aujourd'hui, seulement pour Rénovation complète, qui
pointe vers Woluwe-Saint-Pierre).

### Round 4 : (presque) toutes les photos triées sont maintenant sur le site (22 septembre 2026, encore plus tard)

Sergiu a corrigé le tir : il voulait que je récupère **toutes** les photos
valables de chaque tag, pas seulement une sélection resserrée — lui-même
trierait et couperait ensuite. Les rounds précédents n'avaient utilisé que
les « meilleures » photos présélectionnées par tag (39 sur 114). Ce round
ajoute les **54 photos restantes** des 14 tags (celles qui n'étaient ni déjà
utilisées, ni écartées pour la vie privée), vérifiées une par une avant
import — même processus que les rounds précédents, juste sans le filtre de
« joliesse ».

**renovation-woluwe-saint-pierre** passe de 18 à **64 photos de galerie**
(+ toujours 6 paires avant/après et la couverture) : plomberie, électricité,
salle de bain, chambres, escaliers (intérieur et garage), plafond, cuisine,
local technique et terrasse — le chantier au complet, chantier compris (pas
seulement le résultat fini).

**cuisine-ixelles** : 1 photo de plus (façade de l'armoire), toujours en
attente d'une vraie photo de la cuisine elle-même pour être publiée.

**Nouveau projet : `renovation-parquet-menuiseries`.** Le tag
« Parquet/fenetre/vitre/plafond » (sans adresse connue) devient un projet à
part entière plutôt qu'une simple photo de service — c'est ce que Sergiu
avait décrit dès le départ (« c'est un autre projet »). Sa commune affiche
`[À CONFIRMER : commune]` tant qu'elle n'est pas connue ; le reste
(couverture, galerie, un résumé des travaux basé sur ce que Sergiu a décrit)
est rempli. Comme il a une couverture, il apparaît déjà publiquement sur le
site — à la différence de `cuisine-ixelles`.

**Pas de nouvelles paires avant/après forcées** : pour rester honnête, je
n'ai créé une comparaison avant/après que quand j'étais sûr que l'avant et
l'après montraient la même pièce. Pour le reste (la plupart des nouvelles
photos), chaque photo est présentée seule, avec une légende qui dit ce
qu'elle montre — pas de fausse paire.

### Photos toujours écartées pour la vie privée dans ce round

Comme avant, vérifiées à l'œil une par une avant tout import (pas seulement
sur base du champ automatique) : aucune nouvelle photo à risque trouvée
dans ce lot de 54 — les 13 déjà identifiées lors des rounds précédents
restent les seules écartées sur l'ensemble des 14 tags.

### Chiffres à jour

- 114 photos analysées sur les 14 tags de ce round.
- 13 écartées pour la vie privée (numéro de maison, plaques, documents
  avec coordonnées).
- 101 utilisables, dont **101 sont maintenant sur le site** (65 pour Woluwe
  en comptant couverture et paires, 4 pour Ixelles, 9 pour le nouveau projet,
  plus 1 réutilisée comme photo de service Rénovation complète — certaines
  photos servent à plusieurs endroits).
- **Poids total des images optimisées du site : 19 Mo** (WebP, chargement
  différé sauf la photo principale de chaque page). Sur un chantier aussi
  complet que Woluwe, ça fait une page riche — normal vu le nombre de
  corps de métier documentés.

### ⚠ Blocage technique du poste, sans rapport avec le site (contourné)

Sur cette machine, la commande `git` du système (`/usr/bin/git`) échoue avec
*« You have not agreed to the Xcode license agreements »* tant que personne n'a
lancé `sudo xcodebuild -license accept` dans un Terminal (mot de passe requis).
En attendant, le git livré avec Xcode fonctionne directement sans ce blocage :
`/Applications/Xcode.app/Contents/Developer/usr/bin/git`.

---

## 13. Décisions RGPD tranchées par Sergiu (22 septembre 2026)

Deux points de la page vie privée étaient encore ouverts (§ 11). Sergiu a tranché
les deux, par message :

- **Durée de conservation des demandes de devis : pas de durée fixe.** Sergiu garde
  les données sans limite de temps prédéfinie. La page vie privée le dit maintenant
  clairement, en s'appuyant sur ce qui existait déjà : le visiteur peut à tout moment
  demander l'effacement ou retirer son consentement (section « Vos droits »), ce qui
  reste le mécanisme qui fait qu'une donnée finit par être supprimée si on le demande.
  **Remarque, pas une objection** : l'autorité belge de protection des données (APD)
  recommande en général de fixer une durée déterminée plutôt que de garder « sans
  limite » — beaucoup de sites s'en sortent avec un délai raisonnable (ex. 3 ans après
  le dernier contact). Ce n'est pas strictement interdit de ne pas en fixer une, mais
  c'est plus fragile si un jour l'APD pose la question. À vous de voir si vous préférez
  rester ainsi ou fixer un chiffre.
- ~~Transfert des données vers les États-Unis (Web3Forms)~~ : **ce sujet a disparu tout
  seul le 22 septembre** en même temps que Web3Forms (§ 16) — plus de formulaire, plus
  de service tiers, donc plus de transfert à expliquer.

---

## 14. Dernier lot de photos : le site est complet (22 septembre 2026, soir)

Sergiu a prévenu : ces 6 derniers tags sont les derniers, plus aucune photo à
attendre. 32 photos vérifiées une par une (aucune écartée pour la vie privée
cette fois), et les 3 derniers projets encore vides ont enfin de vraies photos.

| Projet | Avant | Après ce round |
|---|---|---|
| `renovation-interieure-ostende` | vide | ✅ publié — 15 photos (salle de bain + toiture) |
| `salle-de-bain-watermael-boitsfort` | vide | ✅ publié — couverture + 1 paire avant/après |
| `toiture-woluwe-saint-pierre` | vide | ✅ publié — couverture + 3 photos |

**Les 7 projets du départ ont maintenant tous de vraies photos, sauf
`cuisine-ixelles`** (qui attend toujours une vraie photo de la cuisine
elle-même — voir § 13). Le site public passe de 2 à 5 projets visibles.

Le tag « WoluweSaintPierre_Toit » correspond à une **autre adresse** que le
grand chantier « Avenue Manoir d'Anjou » déjà utilisé pour
`renovation-woluwe-saint-pierre` (le dossier source s'appelle « Toit Palmier »)
— les deux sont restés bien séparés, aucune photo mélangée entre les deux
chantiers de Woluwe-Saint-Pierre.

Deux tags sans adresse (« Vitres », « Toitures ») ont servi à enrichir les
photos de service (Rénovation complète, Toiture), comme le tag « Parquet »
plus tôt — jamais présentés comme une réalisation avec une commune inventée.

**Erreur trouvée et corrigée en cours de route** : la couverture du projet
`renovation-parquet-menuiseries` montrait par erreur une photo de plafond en
travaux au lieu de la belle pièce avec parquet et portes-fenêtres prévue.
Repéré en comparant le rendu du site aux photos sources, corrigé avant la mise
en ligne (la photo de plafond n'est pas perdue : elle est maintenant dans la
galerie du même projet, correctement légendée).

### Couleur du site calée sur le logo

Le bleu `--color-accent` était provisoire depuis le début (`#2f5bd3`, choisi
au hasard en attendant le logo). Sergiu a envoyé le logo dans ce round : le
bleu du site est maintenant `#0066b4`, la couleur dominante du logo
(mesurée directement sur le fichier, pas approximée à l'œil). Contraste
vérifié : 5,9:1 sur fond blanc, largement au-dessus du minimum accessible
(4,5:1). Un seul endroit à changer si Sergiu préfère une autre nuance :
`src/styles/tokens.css`.

### Vérification visuelle mobile et desktop

Le site a été vérifié avec des captures d'écran réelles (mobile 390px et
desktop 1440px), pas seulement en lisant le code — conformément à la
consigne « mobile d'abord ». Vérifiés : le hero et sa photo, la barre fixe
« Appeler / WhatsApp » sur mobile, le curseur avant/après, la grille de
photos par service, les pages projet. Rien de cassé trouvé après la
correction de la couverture ci-dessus.

`playwright` a été ajouté aux dépendances de développement (`devDependencies`)
pour permettre ce genre de vérification visuelle à l'avenir — ne sert qu'en
local, n'affecte pas le site publié.

---

## 15. Retours de Sergiu sur le rendu (22 septembre 2026, tard)

- **Favicon** : le site n'avait pas d'icône d'onglet de navigateur. Ajoutée
  à partir du logo (`public/favicon.png`, `public/apple-touch-icon.png`).
- **Logo plus visible** : agrandi dans l'en-tête (46px → 60px selon l'écran,
  au lieu de 34-40px).
- **Texte « Denderleeuw · partout en Belgique »** : Sergiu n'aimait pas cette
  formulation. Remplacé par « Intervient dans toute la Belgique » (accueil),
  qui met en avant la zone d'intervention sans la juxtaposition avec le nom
  de la commune (déjà visible ailleurs : pied de page, mentions légales).
- **Services sans photo retirés de l'affichage** : même logique que les
  projets sans couverture (§ 13). Maçonnerie & façades et Peinture et
  finitions n'apparaissent plus tant qu'on n'a pas de photo — ils restent
  dans `src/data/services.ts` et réapparaissent automatiquement dès qu'une
  photo est ajoutée dans `src/data/services-photos.ts`.
- **Bouton WhatsApp** : passé en vert avec une icône bulle + combiné
  (inspirée du vrai logo WhatsApp, dans le style au trait du site). Premier
  essai avec le vert officiel WhatsApp (`#25d366`) refusé par Sergiu (trop
  fluo) — et de toute façon son contraste avec le texte blanc était
  insuffisant (1,98:1). Couleur retenue : `#0e8449`, contraste 4,76:1.

### Devis par email — configuré puis abandonné le même jour

Le 22 septembre, la clé Web3Forms a été configurée et le vrai formulaire de
devis a fonctionné brièvement. Sergiu, en le voyant, a préféré une solution
plus simple : voir § 16.

---

## 16. Le formulaire de devis est remplacé par un simple email pré-rempli (22 septembre 2026, tard)

Sergiu a vu le vrai formulaire fonctionner et a préféré une solution plus
simple : au lieu d'un formulaire à remplir sur le site (nom, téléphone,
email, commune, type de travaux, message, case à cocher), le bouton
« Demander un devis » ouvre directement la messagerie du visiteur avec un
email déjà écrit — sujet et corps pré-remplis, dans sa langue (français ou
néerlandais) — qu'il n'a plus qu'à compléter avec ses coordonnées et
envoyer lui-même.

**Ce qui a changé dans le code :**

- Le composant `FormulaireDevis.astro` et les pages « Merci, votre demande
  est partie » (`/contact/merci/`, `/nl/contact/bedankt/`) sont supprimés.
- Tous les boutons « Demander un devis » du site (en-tête, accueil, page
  services, bas de chaque page projet, page contact) pointent maintenant
  vers `mailto:Bivol.sergiu@hotmail.com` avec un sujet et un corps
  pré-écrits (`lienDevis()` dans `src/data/entreprise.ts`, textes dans
  `devisEmail` de `src/i18n/fr.ts` et `nl.ts`).
- Le contenu du mail pré-rempli demande : nom, téléphone, commune du
  chantier, type de travaux, description du projet — les informations que
  Sergiu avait indiquées comme utiles pour chiffrer un devis.
- La page `/contact/` est simplifiée : la carte "Demander un devis" (un
  bouton) remplace le formulaire à plusieurs champs.
- **Web3Forms n'est plus utilisé du tout** : compte, clé et fichiers `.env`
  / `.env.example` supprimés, plus rien à configurer chez un hébergeur
  pour le devis.
- **La page vie privée est réécrite et bien plus courte** : le site ne
  « collecte » plus rien lui-même (pas de formulaire, pas de base de
  données) — tout contact est un moyen que le visiteur choisit et déclenche
  lui-même (téléphone, WhatsApp, ou cet email pré-rempli qu'il envoie de
  sa propre messagerie). Ça résout au passage, sans rien décider de plus,
  le point resté ouvert au § 13 sur le transfert de données vers les
  États-Unis : il n'y a plus de service tiers du tout entre le visiteur et
  BS Renove.

**Limite à connaître, propre à tout lien `mailto:`** : ça ouvre l'application
email par défaut de l'appareil. Ça marche bien sur ordinateur et sur la
plupart des téléphones, mais un visiteur dont le téléphone n'a aucune
application email configurée (de plus en plus rare, mais ça arrive,
surtout si quelqu'un n'utilise que l'appli Gmail sans l'avoir mise par
défaut) peut voir un écran vide ou une erreur en cliquant. Le téléphone et
WhatsApp restent affichés juste à côté sur la page contact, pour cette
raison.

---

## 17. Réalisations réorganisées par pièce, avant/après en grand (22 septembre 2026, très tard)

Deux retours de Sergiu après avoir vu le site fini :

1. Il préfère naviguer **par type de pièce** (« toutes les salles de bain »,
   « toutes les toitures ») plutôt que par projet — l'avant/après est ce
   qu'il préfère regarder, et il fallait ouvrir un projet pour en voir un.
2. Le rendu ne lui semblait pas assez « wahou » — trop proche d'un site
   statique classique. Direction choisie ensemble : **immersif, tout en
   photo**.

**Ce qui a changé :**

- Chaque paire avant/après a maintenant une **catégorie** (pièce, pas
  métier — `src/data/categories.ts` : salle de bain, cuisine, séjour,
  chambre, toilette, escalier, toiture, façade, extérieur). Nouveau champ
  obligatoire dans le schéma (`content.config.ts`), renseigné sur les 8
  paires existantes.
- **La page Réalisations est réécrite** (`ListeRealisations.astro`) :
  ce n'est plus une liste de fiches projet, mais un mur d'avant/après en
  grand, un par un, filtrable par pièce (boutons en haut de page). Chaque
  avant/après garde un lien discret « Voir le chantier complet » vers sa
  fiche projet, pour qui veut la commune et le reste des photos.
- **L'avant/après de l'accueil passe en plein écran** (`SectionAvantApres.astro`) :
  la photo occupe toute la largeur de l'écran, sans cadre ni fond gris
  autour, avec un bouton « Voir tous nos avant/après » vers la nouvelle
  page plutôt qu'une petite liste d'« autres projets ».
- Les fiches projet individuelles existent toujours (accessibles depuis
  chaque avant/après ou directement) : c'est là qu'on trouve la commune,
  le récit du chantier et le reste des photos de détail/chantier.

**À faire à chaque nouvelle paire avant/après ajoutée** : penser à
renseigner `categorie:` dans le fichier YAML du projet — le build échoue
sinon (comme pour `service:`).

---

## 18. Vraie page À propos, et vérification de la couleur bleue (23 septembre 2026)

**Nouvelle page `/a-propos/` (`/nl/over-ons/`)** : avant, le lien « À propos »
du menu renvoyait juste à la section « Pourquoi BS Renove » de l'accueil.
Sergiu voulait un vrai endroit qui montre tout ce que l'entreprise sait
faire. La nouvelle page reprend les 8 services et leurs exemples déjà
écrits dans `src/data/services.ts` (rien d'inventé, même contenu que la
page Services, présenté différemment : un mur de compétences en grille au
lieu de fiches photo), plus la section « Pourquoi BS Renove » existante.
L'accueil garde sa section résumée, avec un lien « À propos » vers la
page complète.

**Vérification de la couleur bleue** : Sergiu avait l'impression que le
site utilisait plusieurs bleus différents (boutons vs autres endroits).
Premier constat : une seule valeur d'accent existe, `--color-accent:
#0066b4` (`src/styles/tokens.css`), utilisée partout — boutons, liens,
pastilles, numéros. Mais Sergiu a ensuite pointé le bloc sombre « Vous
avez un projet ? » : là, le fond utilisait `--color-ink`, une marine
distincte de l'accent (`#1d2a4a`, une autre famille de bleu). Corrigé :
`--color-ink` est maintenant dérivée du **même bleu que les boutons**,
juste assombrie (`#002948`), et non plus une couleur à part — un seul
bleu dans tout le site, comme demandé.

---

## 19. Icône WhatsApp plus réaliste, communes retirées des avant/après (23 septembre 2026)

**Communes retirées de l'affichage avant/après** : sur l'accueil et sur
la page Réalisations, une paire avant/après n'affiche plus jamais où se
trouve le chantier (« Rénovation à Woluwe-Saint-Pierre »), seulement ce
que montre la photo (« Salle de bain », « Toiture »...). La commune ne
reste visible que sur la fiche du projet lui-même, en cliquant « Voir le
chantier complet ».

**Bouton WhatsApp refait** : Sergiu trouvait la couleur et l'icône « pas
très réelles ». Nouvelle icône (`src/components/Icon.astro`) : un
pictogramme plein (bulle + combiné) aux couleurs officielles WhatsApp, au
lieu d'un simple trait générique — c'est le seul logo de marque du site,
tout le reste reste au trait. Nouvelle couleur de fond, `#0e8449` (un vert
WhatsApp assombri pour rester lisible en blanc dessus — le vert officiel
`#25d366` ne passait pas le contraste minimum).

**Outil de tri des photos** : pour que Sergiu puisse choisir lui-même les
meilleures photos et repérer facilement celles à enlever, sans devoir le
demander à chaque fois — un outil séparé (en dehors du site, donc pas de
base de données ajoutée au site lui-même) avec une case à cocher par
photo, projet par projet. Le lien a été envoyé séparément ; une fois son
tri terminé, les photos marquées seront retirées du site (paires
avant/après en entier si l'une des deux est marquée, la couverture d'un
projet sera remplacée plutôt que juste enlevée).

---

## 20. Tri des photos appliqué, et refonte de finition (23 septembre 2026)

Sergiu a terminé son tri sur les 5 projets (couverture, avant/après composés
à la main, ordre de la galerie, photos à supprimer). Tout a été appliqué :

- **56 photos inutilisées supprimées** de `src/assets/projets/` (fichiers
  physiques retirés, pas juste enlevés des pages).
- **Avant/après recomposés** selon ses choix : certaines paires d'origine
  ont changé de photo d'un côté ou des deux (ex. Ostende, Woluwe), et 9
  nouvelles paires ont été créées à partir de photos qui étaient avant en
  galerie simple. Une légende et une catégorie ont été écrites à la main
  pour chaque paire nouvelle ou modifiée, à partir de ce que montre la
  photo — rien d'inventé.
- **Couvertures** : gardées telles quelles pour Ostende, Watermael-Boitsfort
  et la toiture de Woluwe-Saint-Pierre ; changées pour parquet/menuiseries
  et Woluwe-Saint-Pierre suite au choix de Sergiu dans l'outil.
- **`src/data/services-photos.ts`** : 3 photos qu'il utilisait (couverture,
  détail cuisine, détail auvent de Woluwe) ont été supprimées par le tri —
  remplacées par d'autres photos du même projet toujours présentes.

**Suite à son retour après le tri, trois changements de fond sur le site :**

1. **Plus aucune phrase sous une photo** (accueil, page Réalisations, fiche
   projet, loupe de la galerie) : seule la catégorie (« Salle de bain »,
   etc.) et le lien « Voir le chantier complet » restent. Le texte alternatif
   (pour les lecteurs d'écran) est conservé sur chaque photo — ce n'est pas
   affiché, donc ça ne compte pas comme une phrase visible.
2. **Icône WhatsApp retirée partout** (boutons de l'accueil, du bloc contact,
   de la page contact, de la barre mobile) : juste le mot « WhatsApp », plus
   d'icône du tout. `CLAUDE.md` mis à jour pour refléter ce choix.
3. **Hero de l'accueil allégé sur mobile** : avant, on pouvait appeler ou
   écrire sur WhatsApp trois façons différentes sur un seul écran (bouton
   WhatsApp du hero, numéro de téléphone en texte, puis la barre fixe en
   bas avec Appeler et WhatsApp). Sur mobile, le hero ne garde plus que
   « Demander un devis » — la barre du bas suffit pour Appeler/WhatsApp.
   Sur desktop, où il n'y a pas de barre fixe, rien n'a changé.

**Un point non tranché** : Sergiu a dit ne pas se servir des couvertures
(« ça ne sert à rien »), mais en a quand même changé deux dans l'outil. Le
mécanisme de couverture (photo de mise en avant sur l'accueil et les fiches)
n'a pas été retiré du site — ça aurait été un chantier bien plus lourd pour
une phrase ambiguë. À reconfirmer avec lui si besoin.

---

## 21. Grille « Tous nos travaux », un seul bleu, page Rejoindre l'équipe (23 septembre 2026)

**Un seul bleu, cette fois pour de bon** : le bloc « Vous avez un projet ? »
(accueil, fiche projet, à propos) utilisait `--color-ink`, une marine très
sombre — juste de la même famille de bleu que l'accent, mais assez foncée
pour donner l'impression d'une couleur à part. Remplacé par
`--color-accent-dark` (déjà utilisé pour le survol des boutons) : c'est
maintenant littéralement le même bleu, vérifié lisible (contraste ≥ 4,5:1
pour tous les textes dessus).

**Étiquette retirée du hero de l'accueil** : elle indiquait la catégorie de
la première paire avant/après du projet mis en avant, mais la photo du hero
est la couverture du projet — qui peut être toute autre chose (ça l'a été
pour Woluwe-Saint-Pierre après le tri de Sergiu, d'où le « Salle de bain »
sur une photo de terrasse). Retirée entièrement plutôt que réparée, comme
demandé.

**Plus de points en fin de phrase** dans les textes courts du site (accueil,
sections, cartes, page 404). Les paragraphes à plusieurs phrases gardent
leurs points internes, seul le point final a été retiré. Les textes légaux
et les récits de chantier (multi-phrases, plus formels) n'ont pas été
touchés.

**Page Services : grille « Tous nos travaux »** ajoutée en haut de la page,
avant la liste détaillée existante — une carte par service (les 8 du brief
§6, rien d'inventé), photo + nom, qui renvoie vers la section détaillée en
dessous. Deux services n'ont pas encore de photo (Maçonnerie & façades,
Peinture et finitions) : ils affichent un bloc « Photo à venir » et ne sont
pas cliquables, en attendant une vraie photo de Sergiu. Sergiu a montré en
exemple une grille d'un site concurrent avec ~19 métiers différents
(éclairage, chauffage, isolation, gouttières séparées, etc.) — ces
métiers-là ne sont pas dans les 8 services confirmés par le brief, donc pas
ajoutés tels quels pour ne rien inventer. Certains existent déjà comme
exemples de travaux dans un service plus large (ex. gouttières sous
Toiture).

**Nouvelle page « Rejoindre l'équipe »** (`/rejoindre-lequipe/`,
lien uniquement dans le pied de page, pas dans le menu principal) : un
texte générique invitant à envoyer une candidature spontanée, et un bouton
qui ouvre un email pré-rempli (même système que le devis). Rien d'inventé
sur des postes ouverts ou un process de recrutement — juste un canal de
contact. **Textes NL à faire relire par un natif** : les nouveaux textes de
cette page (`rejoindreEquipe` dans `src/i18n/nl.ts`) et de la page 404.

---

## 17. Refonte complète du site (24 septembre 2026, branche `refonte`)

Claudiu a demandé de repartir de zéro côté design : le site « fond blanc » a été
remplacé par la direction « Atelier » (papier crème, encre, bleu du logo, jaune
marqueur, annotations à la main). Détail des choix dans `CLAUDE.md`, section Design.
La structure technique (Astro, FR/NL, projets, SEO, pages légales) n'a pas changé.

### Photos et images générées par IA

Idée de départ : remplacer les photos par des images générées par IA. **Non retenu**
pour ce qui ressemble à un chantier : une image générée présentée comme un travail de
BS Renove tromperait les clients. À la place :

- le haut de l'accueil est une **maison dessinée en coupe** (SVG, fait main dans le code) ;
- les métiers sans photo ont un **panneau illustré** (icône en grand) ;
- les vraies photos restent là où elles prouvent quelque chose (avant/après, réalisations).

### À faire valider par Sergiu (nouveaux textes, FR et NL)

| Texte | Où | Pourquoi le valider |
|---|---|---|
| « On regarde ensemble… **sur place si c'est nécessaire** » | accueil et À propos, étape 2 de « Comment ça se passe » | suppose que Sergiu se déplace avant le devis |
| « Vous recevez un devis clair, **sans engagement** » | étape 3 | formulation commerciale, à confirmer |
| Les 5 questions et réponses de la FAQ | accueil | toutes tirées de faits déjà confirmés, mais c'est un nouveau texte |
| « en plein chantier… et presque terminée ! » | annotation de l'avant/après | corrigé par Claudiu le 25 septembre : la photo « avant » est prise pendant les travaux, la photo « après » juste avant la fin |
| Maçonnerie & façades, Peinture et finitions | accueil et page Services | de nouveau visibles (panneau illustré au lieu d'une photo) ; rappel § 9 : électricité et peinture ne figurent pas dans les activités enregistrées |

### Formulaire de devis : de retour

Claudiu a demandé un vrai formulaire (type de travaux, message…). Il remplace le
simple lien email du § 16, **à valider avec Sergiu** qui avait préféré l'email le 22 septembre.

- 3 étapes : travaux (plusieurs choix), projet (commune, délai, message), coordonnées.
- **Clé Web3Forms à recréer** : l'ancienne a été supprimée le 22 septembre. La mettre
  dans `.env` (`WEB3FORMS_KEY=…`) et chez l'hébergeur.
- **En attendant la clé**, le formulaire ne perd rien : à l'envoi, il ouvre la messagerie
  du visiteur avec un email déjà rempli (toutes ses réponses), et un bouton « Ouvrir
  l'email » reste affiché si la messagerie ne s'ouvre pas.
- La page Vie privée a été remise dans sa version « avec Web3Forms » (celle d'avant le
  22 septembre). Elle devient exacte dès que la clé est configurée ; tant que ce n'est pas
  le cas, elle décrit un service qui n'est pas encore utilisé. **À vérifier avant la mise en ligne.**

---

## 18. Réalisations : uniquement des avant/après (25 septembre 2026)

Décision de Claudiu : plus de page par chantier. Certaines pages montraient deux fois la
même photo (Watermael-Boitsfort : la couverture était la photo « après »), et les photos
isolées de chantier n'apportaient rien. Chaque avant/après est désormais indépendant,
avec sa pièce et sa commune (détail dans `docs/brief.md` § 7).

**Conséquence heureuse : on n'a plus besoin de demander à Sergiu les récits de chantier**
(au départ · les travaux · le résultat), ni les durées, ni les légendes de galerie.

### 14 avant/après affichés, 3 masqués

Les 3 paires masquées montrent un « après » encore en chantier. Elles portent
`enCours: true` dans leur fichier ; retirer cette ligne suffit à les réafficher.

| Paire masquée | Pourquoi |
|---|---|
| Ostende, toiture (`chantier-6` → `detail-5`) | ouvrier sur le toit, démolition en cours |
| Woluwe-Saint-Pierre, escalier principal (`avant-5` → `chantier-26`) | habillage des marches en cours |
| Woluwe-Saint-Pierre, salle de bain (`chantier-18` → `chantier-17`) | carrelage pas fini, scotch orange |

### À savoir

- Les anciennes adresses `/realisations/<chantier>/` n'existent plus. Le site n'étant pas
  encore en ligne, aucune redirection n'est nécessaire.
- Aucune photo n'a été supprimée : celles qui ne font partie d'aucune paire restent dans
  `src/assets/`, simplement plus affichées (et donc plus publiées).
- `salle-de-bain-knokke` et `cuisine-ixelles` n'ont aucun avant/après : ils n'apparaissent
  nulle part. Un avant/après de la cuisine d'Ixelles serait bienvenu.
- Métiers sans avant/après : Électricité, Peinture et finitions, Maçonnerie & façades
  (panneau illustré à la place). Une paire pour l'un d'eux apparaîtrait automatiquement.

---

## 19. ⚠ BLOQUANT : un chiffre de l'accueil à confirmer (25 septembre 2026)

Les chiffres de l'accueil, choisis par Claudiu (`accueil.chiffres` dans `src/i18n/fr.ts` et `nl.ts`) :

| Affiché | Statut | Question à poser à Sergiu |
|---|---|---|
| 12 ans de métier | ✅ confirmé (22 septembre) | — |
| 30+ chantiers terminés | ⚠ valeur donnée par Claudiu | Combien de chantiers avez-vous terminés, à peu près ? |
| 8 métiers (carrelage, toiture, peinture, électricité…) | ✅ ce sont les 8 services du site | rappel § 9 : électricité et peinture hors activités enregistrées |
| Gratuit : le devis | ✅ confirmé (22 septembre) | — |

**À confirmer avant la mise en ligne : « 30+ chantiers ».** Si le vrai chiffre est différent,
il se change à un seul endroit par langue.

Historique : « ±12 personnes », « 2 langues », « 0 € », puis des chiffres provisoires
(150+ chantiers, 80+ salles de bain, 6 000 m² de carrelage) ont été essayés et retirés.
