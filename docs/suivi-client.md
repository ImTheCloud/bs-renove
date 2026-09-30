# Suivi avec le client

Document interne (n'apparaît pas sur le site). Le site est en production sur `https://bsrenovesrl.com` depuis le 26 septembre 2026 : tout ce qui y est affiché est considéré comme acté. Ce qui suit, ce sont des améliorations possibles, pas des corrections en attente.

## Mis en ligne

- Livré au client le 30 septembre 2026 : devis testé en ligne, domaine Wix, Search Console et fiche Google Business faits.
- Hébergement Netlify (construit depuis `main`), domaine `bsrenovesrl.com` chez Wix, HTTPS actif.
- Formulaires (devis et candidature) par Netlify Forms : notifications email réglées dans Netlify → Forms.
- Mentions légales et Vie privée : hébergeur Netlify (qui reçoit aussi les formulaires), RPM.

## Réglages côté Wix, Netlify et Google

- **Wix** : renouvellement du forfait Premium désactivé ; garder celui du domaine (6 septembre 2027). Ne jamais cliquer sur « Réessayer » dans Domaines (remettrait le domaine sur Wix). DNS : A `@` → `75.2.60.5`, CNAME `www` → `bs-renove.netlify.app`.
- **Netlify Forms** : Forms → détection activée ; Forms → Submission notifications → une notification email pour Sergiu et une pour Claudiu. Dans chaque boîte : marquer le premier email « Non spam » et approuver `formresponses@netlify.com`.
- **Google** : Search Console (propriété `bsrenovesrl.com`, sitemap `https://bsrenovesrl.com/sitemap-index.xml`) et fiche Google Business de BS Renove avec le lien du site. Demander un avis à chaque client satisfait.

## Améliorations possibles

- **Électricité et peinture** : affichées, mais pas encore enregistrées à la BCE (NACE 43.21 et 43.34), à ajouter via un guichet d'entreprises (Sergiu prévenu le 30 septembre 2026).
- **Assurance décennale** : rien n'est affiché ; à voir avec son assureur (loi Peeters-Borsus).
- **Photos** : un avant/après de plomberie en intérieur, un « après » pour l'électricité, et pour les prochains avant/après deux photos prises du même endroit.
- **Textes à relire avec Sergiu** : les deux paragraphes « en détail » de chaque métier (pages métier) et les questions du formulaire de candidature (expérience, statut, langues, permis, disponibilité).
- **Néerlandais** : une relecture par un néerlandophone rendrait les textes plus naturels.
- **Lighthouse** (mobile, 26 septembre 2026) : accessibilité, bonnes pratiques et SEO à 100 partout ; performance 94 à 97 (Réalisations 92-93, beaucoup de photos).
