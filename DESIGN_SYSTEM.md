# DESIGN_SYSTEM.md — Operating Partners 360
> Référence design du site op360-site. À mettre à jour à chaque décision structurante.

---

## Stack technique

| Élément | Valeur |
|---|---|
| Repo | `richardpaquette-svg/op360-site` |
| Branche principale | `main` |
| Hébergement | Cloudflare Pages |
| URL prod | https://op360-site.pages.dev |
| Stack | HTML/CSS/JS vanilla |
| Polices | Source Sans 3 (Google Fonts) |

---

## Variables CSS principales

```css
--navy:       #1a2332   /* fond principal sections fortes */
--cyan:       #00D4AA   /* accent, CTA, highlights, différenciateurs */
--tangerine:  #F79009   /* Accent 2 — icônes Moments clés (urgence, criticité) */
--white:      #ffffff
--gray-bg:    /* fond sections secondaires */
--card-bg:    /* fond cartes blanches */
--gray-border:/* bordures cartes */
```

---

## Règles de fond par section (home — index.html)

| Section | Fond | Notes |
|---|---|---|
| Hero | `--navy` | |
| Vidéo | Blanc | |
| Stat choc 10–20 % | Blanc | Bandeau navy intégré |
| Moments clés / Passer un cap | `--navy` | Icônes SVG en Tangerine `#F79009` |
| Parcours 4 axes + 6 différenciateurs | Blanc | Icônes différenciateurs en Cyan |
| 6 offres modulables | `--navy` | Implémenté — fil 5 |
| Témoignages | Gris clair | |
| Équipe – Les fondateurs | Blanc | |
| CTA final | `--navy` | |

---

## Sémantique des couleurs d'accent

| Couleur | Variable | Usage |
|---|---|---|
| Cyan `#00D4AA` | `--cyan` | CTA, liens, highlights, icônes différenciateurs, icônes offres — **promesse et méthode** |
| Tangerine `#F79009` | `--tangerine` | Icônes Moments clés uniquement — **urgence et criticité** |

---

## Règles générales de design

- **Accent `--cyan`** : uniquement pour éléments interactifs (CTA, liens, highlights, bordures cartes navy).
- **Accent `--tangerine`** : réservé aux icônes des 3 Moments clés (section `.moments-section`).
- **Pas d'images Unsplash** : utiliser uniquement les photos réelles des fondateurs.
- **Cartes sur fond navy** : `background: rgba(255,255,255,0.04)`, bordure top cyan, titre blanc, accroche cyan, texte `rgba(255,255,255,0.75)`.
- **Cartes sur fond blanc** : `background: --card-bg`, bordure `--gray-border`, titre navy, accroche cyan.
- **Boutons primaires** : fond cyan, texte navy, pas de gradient.
- **Boutons secondaires** : borde cyan, texte cyan, fond transparent.

---

## Animations scroll — règles & historique

- **Seul `initReveal()` est actif** : fade-up 22px, `opacity 0→1`, classe `.reveal` sur les éléments HTML.
- **Animations scroll ciblées abandonnées** (PR #285, avr 2026) : slide-right sur `.stat-choc`, stagger cartes `.moment-card`, fade-label sur `.section-label` — effets jugés non nets visuellement. Ne pas réimplémenter sans validation préalable.
- Toute nouvelle animation doit être validée visuellement avant merge.

---

## Fichiers clés

| Fichier | Rôle |
|---|---|
| `index.html` | Home page — CSS inline dans `<style>`, sections repérées par commentaires `<!-- NOM -->` |
| `styles.css` | Styles globaux partagés |
| `contenu.js` | Données dynamiques (équipe, offres, témoignages, moments) — **ne jamais modifier via Claude Code sans instruction explicite** |
| `scripts.js` | Comportements (navigation, footer, animations reveal) |
| `CLAUDE.md` | Contexte technique repo pour Claude Code |

---

## Pages du site — inventaire complet (main)

### Pages principales
`index.html` · `equipe.html` · `offres.html` · `diagnostic.html` · `contact.html` · `mentions.html`

### Pages personas
`dirigeants.html` · `pme.html` · `eti.html` · `investisseurs.html` · `pourqui.html`

### Pages offres détail
`shadow-codir.html` · `accompagnement.html` · `due-diligence.html` · `formations.html` · `saas.html`

### Pages contenu
`notre-differenciation.html`

---

## Historique des décisions structurantes

| Date | Décision | PR / Fil |
|---|---|---|
| Fév 2026 | Suppression section LinkedIn `.linkedin-section` | — |
| Fév 2026 | Boutons "Dirigeants PME / ETI" hero → remplacés par tags cliquables | — |
| Mar 2026 | Section témoignages `.temofit-section` conservée mais allégée | — |
| Mar 2026 | Hero `diagnostic.html` — suppression SVG mockup, pills 2×2, témoignage, CTA corrigé | PR #239 |
| Avr 2026 | Fix alignement mobile `.diff-home-item:first-child` (Shadow Codir) | PR #277 |
| Avr 2026 | Section "6 offres" passée sur fond `--navy` (alternance bandes home) | Fil 5 |
| Avr 2026 | Icônes Moments clés en Tangerine `#F79009` — sémantique urgence/criticité | PR #283 |
| Avr 2026 | Animations scroll ciblées (slide-right, stagger, label fade) — **abandonnées**, effets non nets | PR #285 fermée |
| Avr 2026 | Audit complet repo — inventaire 17 pages, mise à jour CLAUDE.md + DESIGN_SYSTEM.md | docs/update-context-files |

---

## Liens utiles

| Ressource | URL |
|---|---|
| Site prod | https://op360-site.pages.dev |
| Repo GitHub | https://github.com/richardpaquette-svg/op360-site |
| Cloudflare Pages | https://dash.cloudflare.com |
| Prise de RDV (Bigin) | https://eu.bigin.online/org20111341014/bookings/contact-op360 |
| LinkedIn OP360 | https://www.linkedin.com/company/operating360 |

---

*Dernière mise à jour : avril 2026 — audit repo V1.7*
