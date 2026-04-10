# Contexte technique — op360-site

## Stack
- HTML statique multi-pages
- CSS : `styles.css` (fichier unique global) + styles inline `<style>` dans chaque page
- JS : `scripts.js` (nav, footer, initReveal) + `contenu.js` (données dynamiques)
- Déployé via Cloudflare Pages (branche `main` = production)

## Fichiers clés

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil |
| `contenu.js` | Données dynamiques (équipe, offres, témoignages, moments, différenciateurs) — **ne jamais modifier sans instruction explicite** |
| `styles.css` | Styles globaux partagés entre toutes les pages |
| `scripts.js` | Navigation, footer, initReveal() |
| `DESIGN_SYSTEM.md` | Source de vérité design — couleurs, typographie, décisions structurantes |
| `CLAUDE.md` | Ce fichier — contexte technique repo |

## Pages du site (branche main)

### Pages principales
| Fichier | Description |
|---|---|
| `index.html` | Home — page d'accueil |
| `equipe.html` | Équipe — 4 profils fondateurs |
| `offres.html` | Toutes les offres |
| `diagnostic.html` | Offre Diagnostic OP360 |
| `contact.html` | Page contact |
| `mentions.html` | Mentions légales |

### Pages personas
| Fichier | Description |
|---|---|
| `dirigeants.html` | Persona dirigeants PME & ETI (page générique) |
| `pme.html` | Persona dirigeants PME (détail) |
| `eti.html` | Persona dirigeants ETI (détail) |
| `investisseurs.html` | Persona investisseurs & fonds |
| `pourqui.html` | Pour qui — page d'orientation |

### Pages offres détail
| Fichier | Description |
|---|---|
| `shadow-codir.html` | Offre Shadow Codir |
| `accompagnement.html` | Offre Accompagnement opérationnel |
| `due-diligence.html` | Offre Due Diligence opérationnelle |
| `formations.html` | Offre Formations |
| `saas.html` | Offre Monitoring SaaS |

### Pages contenu
| Fichier | Description |
|---|---|
| `notre-differenciation.html` | Notre différenciation |

## Assets
| Fichier / Dossier | Rôle |
|---|---|
| `public/` | Assets média (vidéos, images) |
| `logo-color.png` | Logo couleur |
| `logo-white.png` | Logo blanc |
| `favicon.svg` | Favicon SVG |
| `apple-touch-icon.png` | Icône iOS |
| `site.webmanifest` | Manifest PWA |

## Règles techniques obligatoires

- **Ne jamais committer directement sur `main`**
- Toute modification passe par une **branche dédiée + Pull Request**
- Ne modifier `contenu.js` que sur instruction explicite
- Les styles spécifiques à une page sont en `<style>` inline dans cette page — ne pas les déplacer dans `styles.css` sans instruction
- Si une modification nécessite de toucher plusieurs fichiers non prévus, s'arrêter et le signaler avant d'agir
- Nommer les branches de façon descriptive (ex: `fix/hero-spacing`, `feat/section-equipe`)
- Toute nouvelle animation doit être validée visuellement avant merge

## Contacts & liens utiles
| Ressource | URL |
|---|---|
| Site prod | https://op360-site.pages.dev |
| Repo GitHub | https://github.com/richardpaquette-svg/op360-site |
| Booking | https://eu.bigin.online/org20111341014/bookings/contact-op360 |
| Email | contact@operating360.com |
| Tél | 06 51 72 15 24 |
