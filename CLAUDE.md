# Contexte technique — op360-site

## Stack
- HTML statique multi-pages
- CSS : `styles.css` (fichier unique)
- JS : `scripts.js` (interactions) + `contenu.js` (données de contenu)
- Déployé via Cloudflare Pages

## Fichiers clés

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil |
| `contenu.js` | Données de contenu du site — **ne jamais modifier sans instruction explicite** |
| `styles.css` | Styles globaux |
| `scripts.js` | Interactions et comportements JS |
| `DESIGN_SYSTEM.md` | Source de vérité design — couleurs, typographie, espacements |

## Règles techniques obligatoires

- Ne jamais committer directement sur `main`
- Toute modification passe par une **branche dédiée + Pull Request**
- Ne modifier `contenu.js` que sur instruction explicite
- Si une modification nécessite de toucher plusieurs fichiers non prévus, s'arrêter et le signaler avant d'agir
- Nommer les branches de façon descriptive (ex: `fix/hero-spacing`, `feat/section-equipe`)
