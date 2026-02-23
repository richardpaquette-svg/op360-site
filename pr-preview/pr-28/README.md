# op360-site
Site web Operating Partners 360

## Aperçus de Pull Requests (PR Preview)

Les aperçus de déploiement **Netlify ne sont plus utilisés** pour ce projet.

Les aperçus de PR sont désormais fournis via **GitHub Pages + GitHub Actions** :

- À chaque Pull Request ouverte ou mise à jour, le workflow `.github/workflows/pr-preview.yml` déploie automatiquement le contenu dans un sous-dossier de la branche `gh-pages`.
- Un commentaire intitulé **« PR Preview »** est posté automatiquement dans la PR avec l'URL d'aperçu, de la forme :
  ```
  https://richardpaquette-svg.github.io/op360-site/pr-preview/pr-<numéro>/
  ```
- L'aperçu est supprimé automatiquement à la fermeture ou au merge de la PR.

> Le déploiement de production reste inchangé sur GitHub Pages (branche `gh-pages`, racine).
