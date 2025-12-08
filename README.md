# Le serment de la Lune

## À propos du projet
- Projet scolaire réalisé dans le cadre du cours Web 5 (582-511MO) au Cégep de Montmorency, programme Techniques d'intégration multimédia.
Le Serment de la Lune est une histoire interactive où le joueur incarne Agnès, un prince déchiré entre son devoir envers le royaume et son amour pour Aurore, une femme mystérieuse liée à une ancienne malédiction. Autrefois, les rois ont juré aux dieux de enchaîner la Lune pour que le Soleil règne à jamais. Mais cette promesse a transformé la Lune en humaine, condamnée à vivre cachée.

## Équipe

- [Ryan Dufault] - Chef de projet / [Architecture]
- [Yannick Chamberland] - [Données + système + animations]
- [Benjamin Ferland] - [Narration + design]

## Description

- Agnès, prince héritier d’un royaume éternellement ensoleillé, découvre Aurore, une femme maudite : elle n’existe pleinement que sous la lumière de la lune. Autrefois, les rois ont juré aux dieux d’enchaîner la Lune pour assurer un soleil sans fin. Ce serment a transformé la Lune en humaine et assuré la prospérité du royaume, au prix d’un cycle naturel brisé. En la rencontrant, Agnès tombe amoureux, et chaque moments passé avec elle affaiblit le Soleil et menace la survie du royaume

## Fonctionnalité principale

- Plusieurs fins possibles selon les choix faits par l'utilisateur

## Technologies utilisées


- Vue.js 3 (Composition API ☐ / Options API ☐)
- Vite
- Vue Router
- Pinia (state management)
- CSS
- GSAP + ScrollTrigger (optionnel selon style)

## Démo en ligne

- [Le serment de la Lune](https://ryandufault.github.io/webapp-creative-benjamin-yannick-ryan/)

## Comment jouer

- 1 : Ouvrir le site
- 2 : Appuyer sur "Commencer" pour pouvoir jouer
- 3 : Naviguer à travers les chapitres, comme une vraie histoire.
- 4 : Faites de choix selon vos opinions, valeurs et plus.
- 5 : Recevez une fin en correspondance avec vos choix précédents.

## Installation en local pour développement
```bash
# Cloner le projet
git clone [https://github.com/ryandufault/webapp-creative-benjamin-yannick-ryan.git]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
