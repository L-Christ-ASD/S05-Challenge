# Environnement de travail

## Environnement de developpement sur mésure:

Le fichier `.devcontainer.json` configure un environnement de développement conteneurisé basé sur Debian avec Docker-in-Docker et Node.js. 
Il expose certains ports pour l'accès depuis votre machine hôte, exécute Docker Compose après la création du conteneur, 
et installe diverses *extensions* pour **VS Code** afin de faciliter suivant le CDC, le développement avec: 
* Docker 
* Postgres 
* Vite 
* Directus
* Adminer
* et Docusaurus.

## Mise à disposition de la converssion des  .md vers le format pdf

Le fichier `convert_markdown_to_pdf.sh` parcourt tous les fichiers **Markdown** dans un répertoire donné,
(tout le contenneur, dans notre cas!) et utilise le conteneur `yjpictures/mdpdfinator` pour les convertir en **PDF**, 
et le stocker dans le dossier **pdf_files**.

Pour convertir les fichiers Markdown en PDF :

*Tapez la commande*: 

    bash:

    ./convert_markdown_to_pdf.sh

## Installation

* Docker
* VS Code
  - Extension [Devcontainers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Utilisation

- Ouvre le projet dans VS code
- <Ré-ouvrir dans le conteneur>
- Ouvrir un terminal
- Utiliser docker
