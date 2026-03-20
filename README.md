# op360-site

Site web [Operating Partners 360](https://operatingpartners360.com)

## Stack

- HTML / CSS / JavaScript statique
- Hébergé sur **Cloudflare Pages**
- Déploiement automatique depuis la branche `main`
- PR previews automatiques via Cloudflare Pages

## Structure

```
├── index.html          # Page d'accueil
├── offres.html         # Offres
├── diagnostic.html     # Diagnostic OP360
├── equipe.html         # L'équipe
├── pourqui.html        # Pour qui
├── accompagnement.html # Accompagnement
├── contact.html        # Contact
├── contenu.js          # Données dynamiques (offres, témoignages, équipe)
├── scripts.js          # Logique JS
├── styles.css          # Styles globaux
├── _headers            # Headers Cloudflare Pages (cache)
└── public/
    └── videos/         # Vidéos
```
