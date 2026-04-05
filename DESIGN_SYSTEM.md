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
--cyan:       #00D4AA   /* accent, CTA, highlights */
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
| Moments clés / Passer un cap | `--navy` | |
| Parcours 4 axes + 6 différenciateurs | Blanc | |
| 6 offres modulables | Blanc → **Navy en cours** | Décision prise fil 4, à implémenter |
| Témoignages | Gris clair | |
| Équipe – Les fondateurs | Blanc | |
| CTA final | `--navy` | |

---

## Règles générales de design

- **Accent `--cyan`** : uniquement pour éléments interactifs (CTA, liens, highlights, bordures cartes navy).
- **Pas d'images Unsplash** : utiliser uniquement les photos réelles des fondateurs.
- **Cartes sur fond navy** : `background: rgba(255,255,255,0.04)`, bordure top cyan, titre blanc, accroche cyan, texte `rgba(255,255,255,0.75)`.
- **Cartes sur fond blanc** : `background: --card-bg`, bordure `--gray-border`, titre navy, accroche cyan.
- **Boutons primaires** : fond cyan, texte navy, pas de gradient.
- **Boutons secondaires** : bordure cyan, texte cyan, fond transparent.

---

## Fichiers clés

| Fichier | Rôle |
|---|---|
| `index.html` | Home page — CSS inline dans `<style>`, sections repérées par commentaires `<!-- NOM -->` |
| `styles.css` | Styles globaux partagés |
| `contenu.js` | Données dynamiques (équipe, offres, témoignages, moments) — **ne jamais modifier via Claude Code sans instruction explicite** |
| `scripts.js` | Comportements (navigation, footer, animations reveal) |
| `CLAUDE.md` | Instructions permanentes pour Claude Code (règle PR) |

---

## Pages dédiées

`equipe.html`, `offres.html`, `diagnostic.html`, `pme.html`, `eti.html`, `investisseurs.html`, `shadow-codir.html`, `accompagnement.html`, `contact.html`, `formations.html`, `due-diligence.html`, `saas.html`, `pourqui.html`, `mentions.html`, `notre-differenciation.html`

---

## Historique des décisions structurantes

| Date | Décision | PR / Fil |
|---|---|---|
| Fév 2026 | Suppression section LinkedIn `.linkedin-section` | — |
| Fév 2026 | Boutons "Dirigeants PME / ETI" hero → remplacés par tags cliquables | — |
| Mar 2026 | Section témoignages `.temofit-section` conservée mais allégée | — |
| Mar 2026 | Hero `diagnostic.html` — suppression SVG mockup, pills 2×2, témoignage, CTA corrigé | PR #239 |
| Avr 2026 | Fix alignement mobile `.diff-home-item:first-child` (Shadow Codir) | PR #277 |
| Avr 2026 | Décision : passer section "6 offres" sur fond `--navy` | À implémenter (fil 5) |

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

*Dernière mise à jour : avril 2026 — fil website 4*
