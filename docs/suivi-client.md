# Suivi avec le client

Document interne (n'apparaît pas sur le site). Le site est en production sur `https://bsrenovesrl.com` depuis le 26 septembre 2026 : tout ce qui y est affiché est considéré comme acté. Ce qui suit, ce sont des améliorations possibles, pas des corrections en attente.

## Mis en ligne

- Hébergement Netlify (construit depuis `main`), domaine `bsrenovesrl.com` chez Wix, HTTPS actif.
- Formulaire de devis par Web3Forms (clé dans Netlify → Environment variables).
- Mentions légales et Vie privée : hébergeur Netlify, RPM, Web3Forms.

## À régler côté Wix et Web3Forms

- **Wix** : désactiver le renouvellement du forfait Premium ; garder celui du domaine (6 septembre 2027). Ne jamais cliquer sur « Réessayer » dans Domaines (remettrait le domaine sur Wix). DNS : A `@` → `75.2.60.5`, CNAME `www` → `bs-renove.netlify.app`.
- **Web3Forms** : ajouter l'email de Sergiu (Linked Emails → Settings → Recipient). Dans sa boîte : marquer « Non spam » et filtrer `notify@web3forms.com` pour qu'il n'aille jamais en spam.

## Améliorations possibles

- **Communes** : les avant/après sans commune affichent « Belgique ». Pour en ajouter une, mettre `commune: { fr: …, nl: … }` dans le fichier du chantier (`src/content/projets/`).
- **Électricité et peinture** : affichées, mais pas encore enregistrées à la BCE (NACE 43.21 et 43.34), à ajouter via un guichet d'entreprises.
- **Assurance décennale** : rien n'est affiché ; à voir avec son assureur (loi Peeters-Borsus).
- **Email professionnel** (ex. `info@bsrenovesrl.com`) à la place du Hotmail : une ligne dans `src/data/entreprise.ts`.
- **Photos** : un avant/après de plomberie en intérieur, un « après » pour l'électricité, une vraie image de partage, et pour les prochains avant/après deux photos prises du même endroit.
- **Néerlandais** : une relecture par un néerlandophone rendrait les textes plus naturels.
- **Lighthouse** : mesure à faire sur le site en ligne.
