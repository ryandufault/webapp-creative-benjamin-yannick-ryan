# Rapport de Contrôle Qualité

**Nom de l'équipe :** [Les mousquetaires]  
**Nom du projet :** [Le serment de la lune]  
**Type de projet :** [Trace ton chemin]  
**Date :** 8 décembre 2024

## 1. Informations générales

### Équipe

| Membre                | Rôle dans les tests                         | Heures consacrées |
| --------------------- | ------------------------------------------- | ----------------- |
| [Yannick Chamberland] | Tests externes + internes + correction      | [1.5] heures      |
| [Ryan Dufault]        | Tests externes + corrections                | [2] heures        |
| [Benjamin Ferland]    | Tests externes + performance + accesibilité | [1.4] heures      |

**Total d'heures de QA :** [4.9] heures

### Liens importants

- **Projet en ligne :** [https://ryandufault.github.io/webapp-creative-benjamin-yannick-ryan/]
- **GitHub :** [https://github.com/ryandufault/webapp-creative-benjamin-yannick-ryan]
- **Trello (bugs) :** [https://trello.com/b/Pr19rYnB/projet-integrateur-web-5]
- **Projet testé (externe) :** [pas de lien]

---

## 2. PARTIE 1 : Tests externes

### Ce que NOUS avons trouvé dans le projet de l'autre équipe

**Projet testé :** [Un ami pour la vie]  
**Équipe testée :** [Les Quenouilless]  
**Type :** [Trace ton chemin]

### Résumé des tests effectués

**Environnements testés :**

- ✅ Edge (Desktop)
- ✅ Mobile 375px (DevTools)
- ✅ Tablette 768px (DevTools)

**Tests complétés :**

- ✅ Tests fonctionnels (checklist complète)
- ✅ Tests responsive (3 tailles)
- ✅ Tests d'accessibilité
- ✅ Tests de cas limites

### Statistiques des bugs trouvés

| Priorité     | Nombre   | %        |
| ------------ | -------- | -------- |
| 🔴 Critiques | [0]      | [0]%     |
| 🟠 Majeurs   | [5]      | [50]%    |
| 🟡 Mineurs   | [5]      | [50]%    |
| **TOTAL**    | **[10]** | **100%** |

### Liste des bugs trouvés (résumé)

**Tous les détails sont dans notre board Trello :** [(https://trello.com/b/0Nqsv0VR/projet-integrateur)]

#### 🟠 Bogues Majeurs

1. **Bogue #6 : [Rafraîchir la page réinitialise le dossier utilisateur]**

   - **Description :** [Lors du refresh, le dossier lié au nom de la personne se réinitialise]
   - **Impact :** [??]
   - **Statut chez eux :** [En attente de confirmation]
   - **Carte Trello :** [https://trello.com/c/T1WIakq3/83-%F0%9F%90%9B-bug-6-rafra%C3%AEchir-la-page-r%C3%A9initialise-le-dossier-utilisateur]

2. **Bogue #7 : [Images manquantes en 1920px]**

   - **Description :** [Certaines images (grenouille glam) ne s’affichent pas en large résolution.]
   - **Impact :** [On ne peut pas bien intéragir avec le jeu]
   - **Statut chez eux :** [Corrigé]
   - **Carte Trello :** [https://trello.com/c/2zneyQD1/84-%F0%9F%90%9B-bug-7-images-manquantes-en-1920px]

3. **Bogue #8 : [Grenouille devant les boutons sur mobile]**

   - **Description :** [L’image de la grenouille se superpose aux boutons sur mobile 375px.]
   - **Impact :** [Cela est difficile d'appuiyer sur le bouton]
   - **Statut chez eux :** [Corrigé]
   - **Carte Trello :** [https://trello.com/c/XOKp15wV/85-%F0%9F%90%9B-bug-8-grenouille-devant-les-boutons-sur-mobile]

4. **Bogue #9 : [Boutons trop petits / obstrués sur mobile]**

   - **Description :** [Les boutons sont difficiles à cliquer à cause de la grenouille qui se superpose.]
   - **Impact :** [Cela rend l'utilisation difficicle]
   - **Statut chez eux :** [À faire ]
   - **Carte Trello :** [(https://trello.com/c/CBNOGJXk/86-%F0%9F%90%9B-bug-9-boutons-trop-petits-obstru%C3%A9s-sur-mobile)]

5. . **Bogue #10 : [Stretching excessif en 1920px]**

   - **Description :** [La mise en page s’étire trop en grand écran, créant une distorsion visuelle.]
   - **Impact :** [???]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/c/ZRdUc5hT/87-%F0%9F%90%9B-bug-10-stretching-excessif-en-1920px]

#### 🟡 Bogues Mineurs

6. **Bogue #1 : [ Image frogIcon.png introuvable]**

7. **Bogue #2 : [Images manquantes dans "grenouille glam"]**

8. **Bogue #3 : [Attribut alt manquant sur certaines images]**

9. **Bogue #4 : [Alt non descriptifs]**

10. **Bogue #5 : [Images décoratives sans alt vide]**

### Impression générale du projet testé

L'histoire était cool

**Points forts observés :**

1. [Interface utilisateur très intuitive]
2. [ Design cohérent et professionnel]
3. [ Performance semi-excellente]

**Axes d'amélioration identifiés :**

1. [La taille mobile pourrait être améliorer]

**Évaluation globale (1-5 étoiles) :**

- Facilité d'utilisation : ⭐⭐⭐⭐☆
- Stabilité : ⭐⭐⭐⭐☆
- Design : ⭐⭐⭐⭐⭐
- Performance : ⭐⭐⭐☆☆

---

## 3. PARTIE 2A : Tests internes

### Ce que NOUS avons testé dans NOTRE projet

### Résumé des tests effectués

**Checklist complète (à ajuster en fonction de votre projet) :**

- [✅ / ☐] Navigation entre toutes les salles/chapitres
- [✅ / ☐] Ajout de mémoire / Lecture des chapitres
- [✅ / ☐] Édition de mémoire / Système de choix
- [✅ / ☐] Suppression de mémoire / Branches narratives
- [✅ / ☐] Upload d'images / Tracking des conséquences
- [✅ / ☐] Tags et filtres / Toutes les fins
- [✅ / ☐] Recherche / Historique des décisions
- [✅ / ☐] Responsive (mobile, tablette, desktop)
- [✅ / ☐] Multi-navigateurs (Chrome, Firefox)
- [✅ / ☐] Navigation au clavier
- [✅ / ☐] Contraste des couleurs
- [✅ / ☐] Alt text sur images
- [✅ / ☐] Cas limites (formulaires vides, texte long, etc.)

**Taux de réussite :** [X]/[Y] tests passés = [X]%

### Environnements testés

RAS = Rien À Signaler

| Environnement   | Testé | Résultat          | Notes                 |
| --------------- | ----- | ----------------- | --------------------- |
| Chrome Desktop  | ✅    | ✅ Fonctionne     | Quelques bugs mineurs |
| Firefox Desktop | ✅    | ✅ Fonctionne     | RAS                   |
| Edge Desktop    | ✅    | ✅                | RAS                   |
| Mobile 375px    | ✅    | ⚠️ Bogues trouvés | [Détails]             |
| Tablette 768px  | ✅    | ✅ Fonctionne     | RAS                   |
| Desktop 1920px  | ✅    | ✅ Fonctionne     | RAS                   |

### Bogues trouvés dans notre propre projet

**En plus des bugs reçus de l'autre équipe, nous avons trouvé :**

| Bogue # | Titre   | Priorité | Statut      | Assigné à |
| ------- | ------- | -------- | ----------- | --------- |
| [X]     | [Titre] | 🔴       | Corrigé ✅  | [Nom]     |
| [X]     | [Titre] | 🟠       | En cours 🔄 | [Nom]     |
| [X]     | [Titre] | 🟡       | À faire ⏸️  | [Nom]     |

**Total bugs trouvés en interne :** [X]

---

## 4. PARTIE 2B : Bogues reçus

### Ce que l'AUTRE équipe a trouvé dans NOTRE projet

**Équipe qui nous a testés :** [Les quenouille]  
**Date de réception :** 6 décembre 2024

### Statistiques

| Priorité     | Bogues reçus | Corrigés | En cours | Pas encore faits |
| ------------ | ------------ | -------- | -------- | ---------------- |
| 🔴 Critiques | [0]          | [X] ✅   | [X] 🔄   | [X] ⏸️           |
| 🟠 Majeurs   | [4]          | [X] ✅   | [X] 🔄   | [X] ⏸️           |
| 🟡 Mineurs   | [1]          | [X] ✅   | [X] 🔄   | [X] ⏸️           |
| **TOTAL**    | **[5]**      | **[0]**  | **[4]**  | **[1]**          |

### Liste détaillée des bugs reçus

#### 🟠 Bogues Majeurs reçus

**Bogue #1 : [Impossible de scroller pour lire tout le texte en mobile]**

- **Description :** [Impossible de scroller au complet dans la fin sacrifice solaire pour lire tout le texte en mobile]
- **Étapes pour reproduire :** [

1. Ouvrir le jeu en mobile
   2.Aller jusqu'à la fin sacrifice solaire
   3.Essayer le lire la fin du paragraphe avec le scroll
   4.Observer : [le bug se produit]]

- **Notre analyse :** Oui, c'est critique et affecte grandement l'expérience utilisateur
- **Statut actuel (8 décembre) :** ⏸️ Pas encore fait
- **Plan de correction :** Possiblement séparer le texte en 2
- **Assigné à :** [Yannick]
- **Date de correction :** [Date si corrigé]

**Bogue #2 : [Bouton pour scroller même quand ont à pas à scroller]**

- **Description :** [Bouton pour scroller même quand ont à pas à scroller dans certains chapitres.]

- **Étapes pour reproduire :**

1. [Ouvrir le jeu]

2.[Aller dans les chapitres]

3.Observer : [le bug se produit]

- **Notre analyse :** Pas très critique, mais peut effectivement affecter l'esthétique générale et possiblement la compréhension de l'expérience utilisateur

- \*\*Statut actuel (8 décembre) :⏸️ Pas encore fait

- **Plan de correction :** Faire en sorte qu'il soit désaffiché si container est plus petit que genre 30-40vh?

- **Assigné à :** Ryan

- **Date de correction :** [Date si corrigé]

**Bogue #3 : [Bloque de texte trop grand dans certains chapitres]**

- **Description :** [Bloque de texte trop grand dans certains chapitres qui cache d’autres éléments comme le logo.]
- **Étapes pour reproduire :** 1.[Ouvrir le jeu] 2.[Aller dans les chapitres avec beaucoup de texte.]
  3.Observer : [le bug se produit]
- **Notre analyse :** Plutôt critique,
- **Statut actuel (8 décembre) :** ⏸️ Pas encore fait
- **Plan de correction :** Aucune idée, réduire le container par chapitres? Serait fastidieux mais seule option que je vois
- **Assigné à :** Benjamin
- **Date de correction :** [Date si corrigé]

**Bogue #4 : [Flèche pour scroll trop petite en mobile]**

- **Description :** [Flèche pour scroller dans les chapitres trop petite en mobile.]
- **Étapes pour reproduire :** 1.[Ouvrir le jeu] 2.[Aller dans les chapitres.]
  3.Observer : [le bug se produit]
- **Notre analyse :** Oui, peut désavantager l'expérience utilisateur
- **Statut actuel (8 décembre) :** ⏸️ Pas encore fait
- **Plan de correction :** Simple transforms scale en media query
- **Assigné à :** Benjamin
- **Date de correction :** [Date si corrigé]

#### 🟡 Bogues Mineurs reçus

**Bogues #5 : [Images décoratives n'ont pas alt="" (vide)]**

- Voir Trello pour détails complets : [(https://trello.com/c/CsT5Sobe/54-%F0%9F%90%9B-bug-5-images-d%C3%A9coratives-nont-pas-alt-vide)]

### Notre réaction aux bugs reçus

Nous ne savos pas que nous avons ces bogues

**Bogues que nous confirmons :**
- 5 bugs confirmés comme vrais bugs
**Bogues que nous contestons (avec justification) :**
- Aucun

**Nouveaux bugs découverts grâce à leurs tests :**

- X bugs qu'on n'aurait jamais trouvés nous-mêmes
- Merci à l'équipe testeuse pour leur regard externe !

---

## 5. PARTIE 2C : Plan de corrections

### État au 8 décembre (aujourd'hui)

**Résumé de nos corrections :**

| Statut                              | Nombre | % du total |
| ----------------------------------- | ------ | ---------- |
| ✅ Corrigés et validés              | [X]    | [X]%       |
| 🔄 En cours (sera fait d'ici le 10) | [5]    | [100]%       |
| ⏸️ Reportés (si temps)              | [X]    | [X]%       |
| ❌ Non corrigés (justifiés)         | [X]    | [X]%       |

### Priorités de correction (8→10 décembre)

#### ✅ Déjà corrigés (avant le 8)

**Bogues critiques corrigés :**

#### 🔄 En cours (sera fait d'ici le 10)

**Bogues majeurs en cours :**

1. **Bogue #1 : [Impossible de scroller pour lire tout le texte en mobile]**
   - Assigné à : [Ryan]
   - Temps estimé : [0.5] heures
   - Sera fait : [9 décembre maximum]
   - Statut actuel : [Pas fait]
   - Pourquoi (si pas fait) : Au delà de mes compétences, aucune idée de comment faire, j'ai essayer plusieurs astuces css (dvh pvqh etc..)


2. **Bogue #2 : [[Bouton pour scroller même quand ont à pas à scroller]]**
   - Assigné à : [Yannick]
   - Temps estimé : [0.1] heures
   - Sera fait : [9 décembre maximum]
   - Statut actuel : [pas fait]
   - Pourquoi (si pas fait) : Nous ne considérons pas cela comme un bug

3. **Bogue #3 : [[Bloque de texte trop grand dans certains chapitres]]**
   - Assigné à : [Benjamin]
   - Temps estimé : [0.4] heures
   - Sera fait : [9 décembre maximum]
   - Statut actuel : [presque fini]

4. **Bogue #4 : [Flèche pour scroll trop petite en mobile]**
   - Assigné à : [Yannick]
   - Temps estimé : [0.3] heures
   - Sera fait : [9 décembre]
   - Statut actuel : [presque fini]


#### ⏸️ Reportés (ferons si temps après les critiques/majeurs)

**Bogues mineurs à faire si temps :**

1. Bogue #5 : [Images décoratives n'ont pas alt="" (vide)] - Temps estimé : [0.2]h


### Plan de travail (8-10 décembre)

**Lundi 8 (pendant le cours) :**

- [ ] Finir Bogue #5 (Ryan - 5min)
- [ ] Finir Bogue #1 (Yannick - 3h)
- [ ] Finir Bogue #2 (Benjamin - 3h)
- [ ] Finir Bogue #3 (Ryan - 3h)
- [ ] Finir Bogue #4 (Yannick - 3h)


## 6. Accessibilité
 
### Tests effectués
 
#### Navigation au clavier
 
| Test                                 | Résultat     | Action                             |
| ------------------------------------ | ------------ | ---------------------------------- |
| Tab fonctionne partout à part sur les choix|  ⚠️          | Faire en sorte que tab peut accéder au choix |
| Focus pas visible                        |  ⚠️          | Faire en sorte que le focus soit visible sur les choix|
| Enter/Space n'activent pas les boutons     | ✅           |  Faire en sorte que Enter/Space activent les boutons|
 
**Problèmes trouvés :** [3]  
**Corrigés :** [0]  
**En cours :** [3]
 
#### Contraste des couleurs
 
**Tests effectués avec WebAIM Contrast Checker :**
 
RAS = Rien À Signaler
 
| Élément          | Couleurs         | Ratio  | Conforme WCAG AA | Action     |
| ---------------- | ---------------- | ------ | ---------------- | ---------- |
| Texte principal  | #FFF6B3 sur #141322 | 16.6:1 | ✅ Excellent     | RAS        |
| Boutons          | #FFF6B3 sur #141322 | 16.6:1  | ✅ Conforme      | RAS        |
| Liens            | #FFF6B3 sur #141322 | 16.6:1  | ✅ Excellent     | RAS        |
| Titre et image | #FFF6B3 sur #7F7B71    | 3.8:1  | ❌ Trop faible   | À corriger |
 
**Problèmes de contraste :** [1]  
**Plan de correction :** [On va augmenter le contraste du texte]
 
#### Images et médias
 
| Test                               | Résultat   | Notes                          |
| ---------------------------------- | ---------- | ------------------------------ |
| Images décoratives n'ont pas alt=""| ✅ [image de fond#] | [Modifier le nom pour image de fond#] images sans alt à corriger |
 
### Score global d'accessibilité
 
**Résumé :**
 
- Navigation clavier : [0]/[3] tests passés
- Contraste : 5 éléments conformes
- Images : 1 avec alt approprié
 
**Score estimé : [80]/100**
 
---

---

## 7. Performance
### Tests Lighthouse
**Configuration :**
- Mode : Desktop ET Mobile
- Options : Performance, Accessibility, Best Practices
#### Résultats Desktop
| Page              | Performance | Accessibility | Best Practices | Notes          |
| ----------------- | ----------- | ------------- | -------------- | -------------- |
| Accueil           | 100/100     | 70/100       | 100/100        | [Commentaires] |
| [Page de chapitre] | 100/100     | 91/100       | 100/100        | [Commentaires] |
#### Résultats Mobile
| Page              | Performance | Accessibility | Best Practices | Notes          |
| ----------------- | ----------- | ------------- | -------------- | -------------- |
| Accueil           | 98/100     | 70/100       | 100/100        | [Commentaires] |
| [Page de chapitre] | 100/100     | 91/100       | 100/100        | [Commentaires] |
**Screenshots Lighthouse :** Voir annexes
### Optimisations effectuées
#### Compression des images
*était fait en amont*
#### Autres optimisations
 
- ✅ Minification du code (build production)

---

## 8. Conclusion
### État global du projet au 8 décembre
**Le projet est-il prêt pour la remise finale ?**
✅ Oui, fonctionnel
**Résumé de la qualité :**
| Aspect                          | État                                         | Commentaire          |
| ------------------------------- | -------------------------------------------- | -------------------- |
| **Fonctionnalités principales** | ✅                                | [Fins selon choix précédents, système de conséquences]        |
| **Bogues critiques**            | ❌ Restants | [1 bug qui était au delà de nos compétences (fin sacrifice solaire mobile pas scrollable au complet)]            |
| **Bogues majeurs**              | ✅                                | y     |
| **Accessibilité**               | ⚠️                               | Score : 70/100      |
| **Performance**                 | ✅                                 | Lighthouse : 100/100 |
| **Responsive**                  | ⚠️                                | [Petit problème pour la fin sacrifice solaire (pas scrollable au complet)]        |
### Bilan des tests
**Statistiques globales :**
- **Bogues trouvés (tous) :** [6] (internes + reçus)
- **Bogues corrigés :** [5] (83%)
- **Bogues en cours :** [0] (seront corrigés d'ici le 10)
- **Bogues mineurs reportés :** [0]
**Temps total consacré au QA :** [3] heures
### Ce qui fonctionne bien ✅
1. Toutes les fonctionnalités principales sont stables
2. Animations fluides
3. Performance excellente
### Défis rencontrés et solutions 🔧
1. **Défi :** [Avoir plusieurs string de texte par chapitre, selon les choix précédents]
   - **Solution :** [Conditions if]
2. **Défi :** [Manque de temps pour QA + Préparation présentation]
   - **Solution :** [Nuits blanches]
### Apprentissages 📚
**Ce que nous avons appris durant le processus QA :**
1. L'importance de tester sur vrais appareils, pas juste DevTools
2. Un regard externe trouve des bugs qu'on ne voit plus
3. Documenter trop en détail les bugs fait perdre du temps 
### Confiance pour la remise finale 🎯
**Sur une échelle de 1 à 10, notre confiance est : 7/10**
**Justification :**
Les requis pour le cours sont fait, la gestion de store pinia, l'implémentation efficace de vue js, système de choix poussé, tout est implémenté. Un bug plutôt critique au niveau responsive.


## 9. Annexes

### Annexe A : Checklist complète des tests

[Inclure la grille de test complétée]

- [✅] Navigation entre toutes les salles/chapitres
- [✅] Ajout de mémoire / Lecture des chapitres
- [✅] Édition de mémoire / Système de choix
- [✅] Suppression de mémoire / Branches narratives
- [✅] Upload d'images / Tracking des conséquences
- [✅] Tags et filtres / Toutes les fins
- [✅] Recherche / Historique des décisions
- [✅] Responsive (mobile, tablette, desktop)
- [✅] Multi-navigateurs (Chrome, Firefox)
- [✅] Navigation au clavier
- [✅] Contraste des couleurs
- [✅] Alt text sur images
- [✅] Cas limites (formulaires vides, texte long, etc.)

### Annexe B : Screenshots Lighthouse

[Captures d'écran des rapports Lighthouse pour pages principales]

### Annexe C : Screenshots de bugs

[Captures d'écran des bugs majeurs/critiques]

### Annexe D : Lien vers Trello

**Board Trello avec tous les bugs :** [https://trello.com/b/Pr19rYnB/projet-integrateur-web-5]

**Organisation du board :**

- Colonne "Bogues trouvés" : [5] cartes
- Colonne "En correction" : [0] cartes
- Colonne "À valider" : [0] cartes
- Colonne "Corrigé" : [4] cartes

### Annexe E : Métriques additionnelles

**Commits Git durant la phase QA :**

- [Date] : [1] commits (corrections bugs)
- [Date] : [3] commits
- Total : [4] commits de corrections

---

## ✅ Signatures

**Ce rapport a été rédigé et validé par :**

- [Yannick Chamberland] - [Codeur] - Date : [8 Décembre]
- [Ryan Dufault] - [Codeur] - Date : [8 Décembre]
- [Benjamin Ferland] - [Codeur] - Date : [8 Décembre]

**Nous confirmons que ce rapport reflète fidèlement l'état de notre projet et de notre processus QA.**

---

**Date de dernière mise à jour :** 8 décembre 2024
