# Cahier de Charges: Trace ton chemin

## 📌 Informations du Projet

*Nom du projet:* Le serment de la Lune
*Nom de l'équipe:* Les 3 Mousquetaires
*Membres:*

- [Ryan Dufault] - Chef de projet / [Architecture]
- [Yannick Chamberland] - [Données + système + animations]
- [Benjamin Ferland] - [Narration + design]

*Date de début:* [10/11/2025]  
*Date de livraison finale:* [10/12/2025]  
*Version du document:* 1.0


## 🎯 1. Présentation du Projet

### 1.1 Concept général

!!! tip "Phase de création"
    (Ce paragraphe "Conseil" devra être retiré du Cahier de charge final)
    Pour développer votre concept général, vous devez faire une session de remue-méninges (*brainstorm*) en équipe via *Figjam* avec une carte conceptuelle (*mindmap*) ou encore par la création collaborative et spontanée via des *post-it* individuels et groupés. Il est possible d'utiliser d'autres procédés de création. Vous devrez partager votre processus de création (*brainstorm*) avec votre enseignante. Si c'est virtuel, partagez le lien. Si c'est papier ou sur tableau blanc, veuillez partager une ou des photographie(s) de votre processus.


Décrivez en 2-3 paragraphes le concept de votre histoire interactive:

Le Serment de la Lune est une histoire interactive où le joueur incarne Agnès, un prince déchiré entre son devoir envers le royaume et son amour pour Aurore, une femme mystérieuse liée à une ancienne malédiction. Autrefois, les rois ont juré aux dieux de enchaîner la Lune pour que le Soleil règne à jamais. Mais cette promesse a transformé la Lune en humaine, condamnée à vivre cachée.

En rencontrant Aurore, Agnès découvre la vérité : chaque instant passé avec elle affaiblit le Soleil et menace l’équilibre du royaume. Le joueur devra faire des choix difficiles entre amour et responsabilité, menant à plusieurs fins possibles selon les décisions prises.


### 1.2 Public cible

- *Âge:* [13-35 ans]
- *Profil:* [Amateurs de récits intéractifs, de contes fantastiques, d'histoires tragico-romantiques et de dilemmes moraux.]
- *Niveau technique:* [Utilisateurs grand public]
- *Temps de lecture estimé:* [ex: 20-45 minutes pour une partie complète --- À voir selon architecture narrative]

### 1.3 Objectifs du projet

- [ ] Créer une expérience narrative immersive et émotionnelle
- [ ] Développer un système de choix avec conséquences réelles
- [ ] Implémenter un système de sauvegarde de progression
- [ ] Démontrer la maîtrise de Vue.js, GSAP et Pinia
- [ ] Créer une interface accessible et responsive
- [ ] [Autre objectif spécifique]



## 📖 2. Architecture Narrative

### 2.1 Synopsis détaillé

Racontez votre histoire en 1-2 paragraphes (sans spoiler les fins):

[Écrivez votre synopsis ici]

### 2.2 Arbre narratif

Dessinez ou décrivez l'arbre de décisions de votre histoire:

*Structure globale:*

- *Acte 1:* Introduction (1-2 chapitres linéaires)
- *Acte 2:* Développement avec choix (4-6 chapitres avec branches)
- *Acte 3:* Climax et résolution (2-3 fins différentes)

*Exemple de structure:*

```
Chapitre 1 (Intro) → Linéaire
    ↓
Chapitre 2 (Premier choix)
    ↓                    ↓
Branche A            Branche B
    ↓                    ↓
Chapitre 3A          Chapitre 3B
    ↓                    ↓
Choix majeur         Choix majeur
    ↓       ↓           ↓       ↓
Fin 1    Fin 2        Fin 3    Fin 4
```

### 2.3 Liste des chapitres/scènes

Minimum 8 niveaux (chapitres/scènes). Listez-les avec leurs informations:

<small>(les noms des chapitres énoncés ici ne sont que des exemples)</small>

| # | Nom du chapitre | Type | Description courte | Choix proposés | Conséquences |
|---|----------------|------|-------------------|----------------|--------------|
| 1 | [Le Réveil] | Linéaire | Introduction du personnage et du contexte | Aucun (intro) | N/A |
| 2 | [La Découverte] | Choix | Découverte de la machine temporelle | 2 choix: "Activer" ou "Rapporter" | Branche A ou B |
| 3A | [Premier Voyage] | Choix | Voyage dans le passé | 3 choix d'époque | Impact sur suite |
| 3B | [L' Enquête] | Linéaire | Investigation scientifique | Aucun | Progression histoire |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |

### 2.4 Fins possibles

Listez toutes les fins de votre histoire (minimum 3, idéal 4-6):

<small>(les noms des fins énoncées ici ne sont que des exemples)</small>

| # | Nom de la fin | Condition pour l'atteindre | Type (bonne/mauvaise/neutre) |
|---|--------------|---------------------------|------------------------------|
| 1 | [Fin Héroïque] | Avoir fait 3+ choix altruistes | Bonne |
| 2 | [Fin Sombre] | Avoir fait 3+ choix égoïstes | Mauvaise |
| 3 | [Fin Paradoxale] | Avoir créé un paradoxe temporel | Neutre/Spéciale |
| 4 | | | |
| 5 | | | |
| 6 | | | |

### 2.5 Personnages principaux

| Nom | Rôle | Description | Apparaît dans |
|-----|------|-------------|---------------|
| [Ex: Dr. Sarah Chen] | Protagoniste | Scientifique brillante mais impulsive | Tous les chapitres |
| [Ex: Marcus] | Mentor | Professeur sage et prudent | Chapitres 1, 2, 5 |
| [Ex: L'IA CHRONOS] | Antagoniste | Intelligence artificielle de la machine | Chapitres 3+, certaines fins |
| | | | |
| | | | |

### 2.6 Système de conséquences

Comment les choix influencent l'histoire?

*Mécanisme choisi:*

- [ ] *Système de karma/moralité* (points bons/mauvais)
- [ ] *Stats du personnage* (courage, intelligence, empathie)
- [ ] *Inventaire d'objets* (collecte d'items)
- [ ] *Relations avec personnages* (affinités)
- [ ] *Flags de choix* (choix X débloque scène Y)
- [ ] *Combinaison de plusieurs systèmes*

*Exemple de tracking:*
```javascript
playerState: {
  karma: 0,  // -10 à +10
  inventory: ['clé', 'journal'],
  relationships: {
    marcus: 5,  // 0 à 10
    chronos: -3
  },
  flags: {
    hasActivatedMachine: true,
    knowsTheSecret: false
  }
}
```


## 🎨 3. Design et Identité Visuelle

### 3.1 Moodboard

Insérez ici 3-5 images d'inspiration (ou liens):

- [Image 1: Ambiance générale]
- [Image 2: Style visuel des personnages]
- [Image 3: Palette de couleurs]
- [Image 4: Typographie inspirante]
- [Image 5: Animations de référence]

### 3.2 Palette de couleurs

*Couleurs par ambiance/chapitre:*

- *Chapitres introduction:* [#XXXXXX] - Tons neutres
- *Chapitres tension:* [#XXXXXX] - Tons sombres/dramatiques
- *Chapitres espoir:* [#XXXXXX] - Tons clairs/lumineux
- *Chapitres danger:* [#XXXXXX] - Rouge/orange

*Couleurs système:*

- Primaire (actions principales): [#XXXXXX]
- Secondaire (choix): [#XXXXXX]
- Succès: [#10B981]
- Danger: [#EF4444]
- Neutre: [#6B7280]

### 3.3 Typographie

- *Titres narratifs:* [Nom de la police] - [Lien Google Fonts]
- *Texte de narration:* [Nom de la police] - Lisible, serif ou sans-serif
- *Dialogues:* [Nom de la police] - Différencié du texte narratif
- *Boutons de choix:* [Nom de la police] - Bold, impactant

### 3.4 Style visuel

Choisissez un ou plusieurs styles:

- [ ] Cinématique (film noir, thriller)
- [ ] Illustratif (dessins, concept art)
- [ ] Minimaliste (focus sur le texte)
- [ ] Immersif (photos, ambiances réalistes)
- [ ] Stylisé (flat design, géométrique)

### 3.5 Éléments visuels par chapitre

| Chapitre | Image de fond | Effets visuels | Sons/musique |
|----------|---------------|----------------|--------------|
| 1 | [Description ou lien] | Fade in progressif | Musique douce, intro |
| 2 | | | |
| 3 | | | |
| ... | | | |


## 💻 4. Spécifications Techniques

### 4.1 Stack technologique

*Frontend obligatoire:*

- ✅ Vue.js 3 (Composition API ☐ / Options API ☐)
- ✅ Vite
- ✅ Vue Router
- ✅ Pinia (state management)
- ✅ CSS
- ✅ GSAP + ScrollTrigger (optionnel selon style)

*Librairies additionnelles envisagées:*

- [ ] VueUse (composables utilitaires)
- [ ] Typed.js (effet de machine à écrire)
- [ ] Howler.js (gestion audio avancée)
- [ ] [Autre]

### 4.2 Architecture des composants

Listez vos composants Vue principaux:

*Composants de layout:*

- `AppHeader.vue` - Navigation et menu
- `SaveSlotManager.vue` - Gestion des sauvegardes
- `ProgressBar.vue` - Barre de progression dans l'histoire

*Composants de contenu:*

- `ChapterView.vue` - Vue d'un chapitre/scène
- `NarrativeText.vue` - Affichage du texte narratif
- `DialogueBox.vue` - Boîte de dialogue pour personnages
- `ChoiceButton.vue` - Bouton de choix interactif
- `ChoicePanel.vue` - Panel contenant tous les choix

*Composants système:*

- `InventoryDisplay.vue` - Affichage de l'inventaire
- `StatsPanel.vue` - Affichage des stats du joueur
- `EndingScreen.vue` - Écran de fin avec récapitulatif
- `Modal.vue` - Fenêtre modale (sauvegarde, options)

*Composants UI:*

- `ButtonPrimary.vue` - Bouton principal
- `LoadingSpinner.vue` - Indicateur de chargement
- `AudioController.vue` - Contrôle de la musique/sons

### 4.3 Routes (Vue Router)

| Route | Composant | Description | Params |
|-------|-----------|-------------|--------|
| `/` | `HomeView.vue` | Menu principal | - |
| `/nouvelle-partie` | `CharacterSetupView.vue` | Config initiale (nom, etc.) | - |
| `/chapitre/:id` | `ChapterView.vue` | Vue d'un chapitre | id du chapitre |
| `/fin/:endingId` | `EndingView.vue` | Écran de fin | id de la fin |
| `/sauvegardes` | `SavesView.vue` | Gestion des sauvegardes | - |
| `/credits` | `CreditsView.vue` | Crédits | - |

### 4.4 Gestion de l'état (Pinia)

*Stores prévus:*

1. *`useStoryStore`*
   - State: `currentChapterId`, `visitedChapters`, `storyData`, `availableChoices`
   - Actions: `loadChapter()`, `makeChoice()`, `goToChapter()`
   - Getters: `currentChapter`, `isChapterUnlocked()`

2. *`usePlayerStore`*
   - State: `playerName`, `karma`, `stats`, `inventory`, `flags`, `relationships`
   - Actions: `addToInventory()`, `updateStat()`, `setFlag()`, `updateRelationship()`
   - Getters: `hasItem()`, `getRelationship()`, `canAccessEnding()`

3. *`useSaveStore`*
   - State: `saveSlots` (array de 3 slots)
   - Actions: `saveGame()`, `loadGame()`, `deleteSave()`, `getSaveInfo()`
   - Getters: `hasSaves`, `latestSave`

4. *`useAudioStore`* (optionnel)
   - State: `currentMusic`, `soundEffects`, `volume`, `isMuted`
   - Actions: `playMusic()`, `playSound()`, `toggleMute()`, `setVolume()`

### 4.5 Persistance des données

*Méthode choisie:*

- [x] LocalStorage (obligatoire pour sauvegardes)
- [ ] Firebase Firestore (bonus optionnel pour galerie publique)

*Structure de données LocalStorage:*

```json
{
  "saveSlot1": {
    "savedAt": "2025-01-15T14:30:00Z",
    "playerName": "Alex",
    "currentChapterId": "chapter-5",
    "playerState": {
      "karma": 5,
      "stats": {
        "courage": 7,
        "intelligence": 8,
        "empathy": 6
      },
      "inventory": ["clé", "journal", "photo"],
      "flags": {
        "hasActivatedMachine": true,
        "knowsTheSecret": true,
        "savedMarcus": false
      },
      "relationships": {
        "marcus": 8,
        "chronos": -5
      }
    },
    "visitedChapters": ["ch-1", "ch-2", "ch-3a", "ch-4", "ch-5"],
    "choiceHistory": [
      { "chapterId": "ch-2", "choiceId": "activate", "timestamp": "..." },
      { "chapterId": "ch-3a", "choiceId": "go-past", "timestamp": "..." }
    ]
  },
  "saveSlot2": null,
  "saveSlot3": null,
  "settings": {
    "volume": 0.7,
    "textSpeed": "normal",
    "autoSave": true
  }
}
```

### 4.6 Structure de données de l'histoire

Comment stockez-vous les chapitres et choix?

*Option A: JSON statique* (recommandé)
```javascript
// data/chapters.json
{
  "ch-1": {
    "id": "ch-1",
    "title": "Le Réveil",
    "text": "Vous vous réveillez dans votre laboratoire...",
    "backgroundImage": "/images/bg-lab.jpg",
    "music": "intro-theme.mp3",
    "choices": null,  // Chapitre linéaire
    "nextChapter": "ch-2"
  },
  "ch-2": {
    "id": "ch-2",
    "title": "La Découverte",
    "text": "Face à la machine, vous devez décider...",
    "backgroundImage": "/images/bg-machine.jpg",
    "music": "tension-theme.mp3",
    "choices": [
      {
        "id": "activate",
        "text": "Activer la machine",
        "consequence": "Vous entrez dans l'inconnu...",
        "nextChapter": "ch-3a",
        "effects": {
          "karma": -2,
          "stats": { "courage": +1 },
          "flags": { "hasActivatedMachine": true }
        }
      },
      {
        "id": "report",
        "text": "Rapporter la découverte",
        "consequence": "La prudence avant tout...",
        "nextChapter": "ch-3b",
        "effects": {
          "karma": +2,
          "stats": { "intelligence": +1 },
          "flags": { "hasReported": true }
        }
      }
    ]
  }
}
```


## 🎬 5. Fonctionnalités et User Stories

### 5.1 Fonctionnalités MVP (Minimum Viable Product)

*Obligatoires pour la livraison:*

- [ ] *F1 - Lecture de l'histoire*
  - Affichage du texte narratif chapitre par chapitre
  - Navigation linéaire dans l'intro
  - Transitions fluides entre chapitres

- [ ] *F2 - Système de choix*
  - Affichage de 2-4 choix par chapitre décisionnel
  - Sélection d'un choix
  - Redirection vers le chapitre suivant approprié
  - Minimum 8 chapitres avec au moins 3 fins

- [ ] *F3 - Tracking des conséquences*
  - État du joueur (karma/stats/flags)
  - Mise à jour après chaque choix
  - Conditions pour débloquer fins

- [ ] *F4 - Système de sauvegarde*
  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement d'une sauvegarde
  - Affichage des infos de sauvegarde (date, progression)

- [ ] *F5 - Historique des choix*
  - Garder trace des décisions prises
  - Affichage dans un menu (optionnel mais recommandé)

- [ ] *F6 - Écrans de fin*
  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Option de recommencer ou charger

- [ ] *F7 - Interface responsive*
  - Mobile (320px+)
  - Tablette (768px+)
  - Desktop (1024px+)

- [ ] *F8 - Animations de texte*
  - Apparition progressive du texte (optionnel: effet typewriter)
  - Transitions entre chapitres avec GSAP

- [ ] *F9 - Accessibilité*
  - Navigation au clavier
  - ARIA labels
  - Contraste WCAG AA
  - Option skip animations

- [ ] *F10 - Médias intégrés*
  - Images de fond par chapitre
  - Musique d'ambiance (avec contrôle volume)

### 5.2 Fonctionnalités bonus (optionnelles)

- [ ] *B1 - Auto-save*
  - Sauvegarde automatique à chaque chapitre
  - Indication visuelle de la sauvegarde

- [ ] *B2 - Inventaire visuel*
  - Affichage graphique des items
  - Description des objets au survol

- [ ] *B3 - Stats visuelles*
  - Barres de progression pour stats
  - Graphique radar des caractéristiques

- [ ] *B4 - Arbre de choix visualisé*
  - Carte interactive des chemins possibles
  - Indication des chapitres visités/non-visités

- [ ] *B5 - Galerie des fins*
  - Collection de toutes les fins débloquées
  - Pourcentage de complétion

- [ ] *B6 - Mode rejouabilité*
  - Fast-forward pour texte déjà lu
  - Skip to choice (sauter au prochain choix)

- [ ] *B7 - Effets sonores contextuels*
  - Sons lors de choix importants
  - Ambiances sonores par scène

- [ ] *B8 - Animations avancées GSAP*
  - Parallax sur les backgrounds
  - Animations de transition complexes

- [ ] *B9 - Firebase (équipes avancées)*
  - Partage de fins débloquées
  - Galerie publique d'histoires

### 5.3 User Stories

*Format:* En tant que [rôle], je veux [action] afin de [bénéfice]

1. *US-01:* En tant que lecteur, je veux lire une histoire interactive afin de vivre une expérience narrative immersive.

2. *US-02:* En tant que joueur, je veux faire des choix qui ont des conséquences afin de sentir que mes décisions comptent.

3. *US-03:* En tant qu'utilisateur, je veux sauvegarder ma progression afin de reprendre plus tard sans perdre mon avancement.

4. *US-04:* En tant que lecteur, je veux voir l'impact de mes choix afin de comprendre comment ils influencent l'histoire.

5. *US-05:* En tant que joueur, je veux atteindre différentes fins afin de découvrir toutes les possibilités de l'histoire.

6. *US-06:* En tant qu'utilisateur mobile, je veux lire l'histoire sur mon téléphone afin d'en profiter partout.

7. *US-07:* En tant que lecteur, je veux consulter l'historique de mes choix afin de me rappeler mes décisions passées.

8. *US-08:* En tant que joueur, je veux collecter des objets/débloquer des stats afin de me sentir progresser dans l'aventure.

9. *US-09:* En tant qu'utilisateur, je veux contrôler le volume sonore afin d'adapter l'expérience à mon environnement.

10. [Ajoutez vos user stories]


## 📊 6. Maquettes et Wireframes

### 6.1 Lien vers les maquettes Figma

*Lien:* [Insérez votre lien Figma]

### 6.2 Écrans principaux à maquetter

- [ ] Menu principal (nouvelle partie, charger, options)
- [ ] Écran de chapitre avec texte narratif
- [ ] Panel de choix (2-4 options)
- [ ] Inventaire/Stats (si applicable)
- [ ] Écran de fin avec récapitulatif
- [ ] Gestion des sauvegardes (3 slots)
- [ ] Version mobile d'au moins 2-3 écrans

### 6.3 Interactions clés à maquetter

- Apparition progressive du texte
- Animations des boutons de choix
- Transition entre chapitres
- Ouverture de l'inventaire/stats
- États des boutons (hover, actif, disabled)


## 📊 7. Plan de Réalisation

### 7.1 Répartition des rôles

| Membre | Rôle principal | Responsabilités |
|--------|----------------|-----------------|
| [Nom] | Chef de projet + Architecture Vue | Coordination, Vue Router, stores Pinia, structure de l'histoire |
| [Nom] | Design + Animations | CSS, design visuel, animations GSAP, transitions |
| [Nom] | Contenu + Narration | Écriture des chapitres, création de l'arbre narratif, dialogues |
| [Nom] | Données + Système | Gestion des sauvegardes, LocalStorage, logique de choix, stats |

*Note:* Tous participent au développement, mais chacun a sa spécialité.

### 7.2 Tâches transversales

*À répartir entre tous:*

- Tests de l'histoire (lecture complète)
- Correction de fautes et relecture
- Tests et debugging
- Documentation du code
- Présentation finale

### 7.3 Outils de collaboration

- *Git/GitHub:* [Lien du repo]
- *Gestion de projet:* [Trello / Word / GitHub Projects]
- *Communication:* [Teams]
- *Design:* [Figma]
- *Documentation:* [Word / Google Docs / README.md]
- *Écriture collaborative:* [Google Docs / Word]


## 🚀 8. Critères de Succès

### 8.1 Critères techniques

- [ ] Application Vue.js fonctionnelle sans erreurs console
- [ ] Minimum 8 composants Vue bien structurés
- [ ] Vue Router avec 5+ routes
- [ ] Pinia implémenté avec state management cohérent
- [ ] CSS organisé avec variables
- [ ] Animations GSAP fluides
- [ ] Système de sauvegarde fonctionnel
- [ ] Code validé (ESLint)
- [ ] Responsive sur 3 breakpoints
- [ ] Accessibilité WCAG AA

### 8.2 Critères narratifs

- [ ] Histoire cohérente du début à la fin
- [ ] Minimum 8 chapitres/scènes
- [ ] Au moins 3 fins différentes
- [ ] Choix ayant un impact réel sur l'histoire
- [ ] Aucune faute d'orthographe majeure
- [ ] Dialogues naturels et crédibles
- [ ] Rythme narratif bien dosé

### 8.3 Critères de qualité

- [ ] Interface intuitive et facile à utiliser
- [ ] Design cohérent et esthétique
- [ ] Lisibilité du texte (taille, contraste, police)
- [ ] Animations pertinentes (pas excessives)
- [ ] Temps de chargement < 2 secondes
- [ ] Aucun bug bloquant
- [ ] Musique/sons appropriés
- [ ] Documentation complète (README)

### 8.4 Critères créatifs

- [ ] Histoire originale et engageante
- [ ] Personnages mémorables
- [ ] Twist ou surprise dans l'intrigue
- [ ] Expérience émotionnelle impactante
- [ ] Rejouabilité (envie de tester d'autres chemins)


## 📅 9. Calendrier du projet: Planning prévisionnel

### 9.1 *PHASE 1: PLANIFICATION ET DESIGN*
<!--Semaine 1-2 (la 2 étant la semaine de rattrapage)-->

**Du 8 au 22 octobre**

*Remise 22 octobre | 15%*

- Rédaction du cahier de charges
- Écriture de l'arbre narratif complet
- Design: Création des maquettes Figma
- Définition de l'architecture technique
- Setup du projet (Vite + Vue + dépendances)

### 9.2 *PHASE 2: FONDATION*
<!--Semaine 3-4-->

**Du 22 octobre au 2 novembre environ**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

!!! tip "Le projet portfolio en parallèle"
    Notez que mercredi le 29 octobre c'est la remise et présentation de votre portfolio donc nous laissons un peu plus qu'une semaine pour cette phase car vous allez probablement finaliser votre portfolio en même temps.

- Structure des composants de base
- Vue Router configuré
- Pinia stores créés
- Premiers chapitres (texte + affichage)

### 9.3 *PHASE 3: INTERACTIVITÉ - Système de Choix*
<!-- Semaine 4-5-->

**Environ du 2 novembre au 12 novembre**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

- Logique de branches narratives
- Système de tracking des conséquences
- Composants de choix interactifs
- Plus de chapitres écrits et intégrés


### 9.4 *PHASE 4: ANIMATIONS ET MÉDIAS*
<!-- Semaine 6 -->

**Du 12 au 19 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Intégration GSAP (transitions)
- Images de fond par chapitre
- Musiques/sons d'ambiance
- Animations de texte


### 9.x *ÉVALUATION PAR LES PAIRS ET AUTO-ÉVALUATION DE MI PARCOURS*

**Sera fait en classe le 19 novembre**

*Remise de l'évaluation par les pairs et auto-évaluation de mi parcours: 19 novembre | 5%*


### 9.5 *PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES + Fin de l'histoire*
<!-- Semaine 7 -->

**Du 19 au 26 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Système de sauvegarde (3 slots)
- LocalStorage complet
- Toutes les fins écrites et intégrées
- Écrans de fin avec récapitulatif

### 9.6 *PHASE 6: AFFINAGE ET ACCESSIBLITÉ* pour la version *BETA*

**Du 26 novembre au 3 décembre**

*Remise version *BETA* le 3 décembre | Formatif*

- Responsive final
- Accessibilité (ARIA, keyboard)

### 9.7 *PHASE 7:  CONTRÔLE QUALITÉ ET CORRECTIONS*
<!-- Semaine 8 -->
**Du 3 au 8 décembre**

*Remise Phase 7 RAPPORT DU CONTRÔLE DE LA QUALITÉ : 8 décembre | 10%*

- Tests de toutes les branches de l'histoire
- Tests fonctionnels
- Tests multi-plateformes (navigateurs et appareils)
- Relecture et corrections
- Optimisation de la performance
- Gestion des bogues

### 9.8 *PHASE 8:  FINALISATION*
<!-- Semaine 8 + 2 jours-->

**Du 3 au 10 décembre** (peut-être fait en parallèle avec la phase 7)

*Remise et présentation finale : 10 décembre | 50%*

- Documentation (README complet)
- Déploiement - Mise en ligne (GitHub/Netlify/Vercel)
- Vidéo de présentation
- Préparation de la démo en classe

### 9.9 *PHASE 9: POST-MORTEM*

**Du 10 au 12 décembre**

*Remise de l'analyse réflexive et suivi de l'évaluation de mi-parcours: 12 décembre | 5%*


## 🎯 10. Risques et Solutions

| Risque | Probabilité | Impact | Solution préventive |
|--------|-------------|--------|---------------------|
| Scope creep narratif (trop d'histoire) | Élevée | Élevé | Limiter à 8-10 chapitres max, garder histoires simples |
| Manque de temps pour écrire | Élevée | Élevé | Écrire les chapitres AVANT de coder, paralléliser |
| Bugs dans la logique de branches | Moyenne | Élevé | Tester chaque branche manuellement, diagramme clair |
| Incohérences narratives | Moyenne | Moyen | Relecture croisée, document de tracking des flags |
| Fautes d'orthographe | Élevée | Faible | Utiliser correcteur, relecture collective |
| Sauvegardes corrompues | Faible | Élevé | Validation JSON, gestion d'erreurs, tests intensifs |


## 📝 11. Annexes

### 11.1 Ressources et références

*Documentation officielle:*

- Contenu du cours Web 5 https://tim-montmorency.com/compendium/582-511-web5/
- Guide étudiant du projet appli web créative: https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/syllabus_guide_etudiant.html
- Vue.js: https://vuejs.org
- Pinia: https://pinia.vuejs.org
- GSAP: https://greensock.com/docs/

*Inspiration narrative:*

- Bandersnatch (Black Mirror)
- Life is Strange
- Detroit: Become Human
- Twine games

*Tutoriels utiles:*

- [Lien vers tuto 1]
- [Lien vers tuto 2]

### 11.2 Glossaire

- *Branche:* Chemin narratif distinct selon les choix
- *Flag:* Variable booléenne qui track un événement
- *Ending:* Fin possible de l'histoire
- *Karma:* Système de moralité basé sur les choix
- *Node:* Point de décision dans l'arbre narratif
- *Save slot:* Emplacement de sauvegarde



## ✅ Validation du Cahier de Charges

*Date de validation:* [Date]

*Signatures:*

- Chef de projet: _______________
- Membre 2: _______________
- Membre 3: _______________
- Membre 4: _______________ (si applicable)

*Validation enseignant:* _______________  
*Date:* _______________  
*Commentaires:*

---

*Version du document cahier de charge:* 1.0  
*Dernière mise à jour:* [Écrire ici la date]
