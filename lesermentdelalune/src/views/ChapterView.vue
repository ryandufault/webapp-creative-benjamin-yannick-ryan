<template>
  <div class="chapitre-container">
    <!-- Affichage du chapitre -->
    <div v-if="storyStore.currentChapter">
      <div class="chapitre-header">
        <h1>Chapitre {{ storyStore.currentChapter.id }}</h1>
        <h2>{{ storyStore.currentChapter.titre }}</h2>
      </div>

      <div class="chapitre-contenu">
        <!-- afiche texte selon le state ; texte initial ou texte post-choix -->
        <NarrativeText :texte="displayedText"/>
        
        <!-- affiche choicepanel si aucun choix n'a été fait -->
        <ChoicePanel 
          v-if="hasChoices && !choiceSelected"
          :choix1="storyStore.currentChapter.choix1" 
          :choix2="storyStore.currentChapter.choix2"
          @choice-selected="handleChoice"
        />
      </div>
      
      <button class="btn-modal" @click="modal = true">MODAL</button>
      
      <!-- affiche si pas de choix ou choix sélectionné -->
      <button 
        class="btn-continuer" 
        v-if="!hasChoices || choiceSelected"
        @click="goToNextChapter"
      >
        Continuer
      </button>

      <!-- ouvre le modal quand true, le ferme quand false dans la component modal -->
      <Modal v-if="modal" @close="modal = false"/>
    </div>
  </div>
</template>

<script>
import NarrativeText from '../components/NarrativeText.vue'
import ChoicePanel from '../components/ChoicePanel.vue'
import Modal from '../components/Modal.vue'
import { useStoryStore } from '../stores/useStoryStore'
import { usePlayerStore } from '../stores/usePlayerStore'
import { mapStores } from 'pinia'

export default {
  name: 'ChapterView',
  
  components: {
    Modal,
    NarrativeText,
    ChoicePanel
  },
  
  data() {
    return {
      chapitreId: null,
      modal: false,
      choiceSelected: null // null ou 1 ou 2
    }
  },

  computed: {
    // Mapper le store complet
    ...mapStores(useStoryStore),
    ...mapStores(usePlayerStore),

    // Vérifie si le chapitre actuel a des choix
    hasChoices() {
      return this.storyStore.currentChapter?.choix1 || this.storyStore.currentChapter?.choix2;
    },

    displayedText() { // texte a display selon le state
      const chapter = this.storyStore.currentChapter;
      const version = this.$route.query.version; // récup version depuis url
      
      // si un choix est selected, afficher texte postchoix
      if (this.choiceSelected === 1 && chapter?.textepostchoix1) {
        return chapter.textepostchoix1;
      } else if (this.choiceSelected === 2 && chapter?.textepostchoix2) {
        return chapter.textepostchoix2;
      }

      // si c'est un chapitre avec versions + version spécifiée
      if (chapter?.versions && version && chapter.versions[version]) {
        return chapter.versions[version].texte;
      }

      return chapter?.texte || ''; // sinon afficher texte initial (vide)
    }
  },

  mounted() {
    // Récup l'id du chapitre avec l'url (paramètres)
    this.chapitreId = this.$route.params.id;
    
    // Définir le chapitre actuel depuis le store (déjà chargé)
    this.storyStore.setCurrentChapter(this.chapitreId);

    this.choiceSelected = null; // réinitialise le choix selected

    window.addEventListener('keydown', this.handleKeyDown); // event listener pour ouvrir/ferme le modal
  },

  methods: {
    handleChoice(choixNumber) {
      // choix dans le store pinia
      this.storyStore.saveChoice(this.chapitreId, choixNumber);
      this.choiceSelected = choixNumber; // mémorise quel choix est selected
      this.sysConsequence(choixNumber); // applique les conséquences du choix
    },

    goToNextChapter() {
      this.choiceSelected = null; // réinitialise choix pr prochain chap
      
      // Convert l'id en int et rajoute 1
      const nextChapterId = parseInt(this.chapitreId) + 1;

      
      if (nextChapterId === 7) { // si on arrive au chap 7
        const version = this.chapitre7versions();
        this.$router.push({ 
          name: 'chapitre', 
          params: { id: nextChapterId },
          query: { version: version }
        });
      }
      else if (nextChapterId === 8) { // si on arrive au chap 8
        const version = this.chapitre8versions();
        this.$router.push({ 
          name: 'chapitre', 
          params: { id: nextChapterId },
          query: { version: version }
        });
      }
      else if (nextChapterId === 9) { // si on arrive au chap 9 (une fin)
        this.$router.push({ name: 'fin' }); 
      } else {
        // Navigation programmatique vers chap suivant
        this.$router.push({ 
          name: 'chapitre', 
          params: { id: nextChapterId } 
        });
      }
    },

    chapitre7versions() {
      // recup choix depuis le store
      const choix5 = this.storyStore.playerChoices[5]; // choix au chap 5
      const choix6 = this.storyStore.playerChoices[6]; // choix au chap 6

      // version selon choix
      if (choix6 === 2) { // Protéger Aurore
        if (choix5 === 2) { // Avouer
          return 'proteger_aurore_avouer'; // alors return la version c5 avouer + c6 proteger aurore
        } else { // Mentir
          return 'proteger_aurore_mentir';
        }
      } else { // Aider le peuple
        if (choix5 === 1) { // Mentir
          return 'aider_peuple_mentir';
        } else { // Avouer
          // determine si c'est la version qui vise fin roi cendre selon métriques
          if (this.playerStore.royaumeValue >= 70) { // si le royaume a +/= de 70, alors version qui vise la fin sacrifice solaire (car à partir d'ici, la fin est déjà pas mal prédéterminée)
            return 'aider_peuple_avouer_sacrifice';
          } else {
            return 'aider_peuple_avouer_roi_cendres';
          }
        }
      }
    },

    chapitre8versions() {
      // recup choix depuis le store
      const choix5 = this.storyStore.playerChoices[5]; // choix au chap 5
      const choix6 = this.storyStore.playerChoices[6]; // choix au chap 6
      const choix7 = this.storyStore.playerChoices[7]; // choix au chap 7 (si existe)

      // version selon choix
      if (choix6 === 2) { // Protéger Aurore
        if (choix5 === 2) { // Avouer
          return 'proteger_aurore_avouer'; // sacrifice solaire
        } else { // Mentir
          // le chap 7 version proteger_aurore_mentir a des choix
          if (choix7 === 1) { // Rester avec Aurore
            return 'proteger_aurore_mentir_rester'; // la lune libérée
          } else { // Sauver le royaume
            return 'proteger_aurore_mentir_sauver'; // sacrifice solaire
          }
        }
      } else { // Aider le peuple
        if (choix5 === 1) { // Mentir
          // determine si c'est roi de cendres selon métriques
          if (this.playerStore.soleilValue >= 60 && this.playerStore.royaumeValue >= 50) {
            return 'aider_peuple_mentir_roi_cendres'; // roi de cendres
          } else {
            return 'aider_peuple_mentir'; // sacrifice solaire
          }
        } else { // Avouer
          // determine si c'est roi de cendres selon métriques
          if (this.playerStore.soleilValue >= 60 && this.playerStore.royaumeValue >= 50) {
            return 'aider_peuple_avouer_roi_cendres'; // roi de cendres
          } else {
            return 'aider_peuple_avouer_sacrifice'; // sacrifice solaire
          }
        }
      }
    },

    sysConsequence(choixNumber) {
      const chapter = this.storyStore.currentChapter;
      
      // recup consequences selon le choix
      let consequences;
      if (choixNumber === 1) { // si c'est le choix 1, fetch depuis le json les consequences du choix 1
        consequences = chapter.consequences_choix1;
      } else { // sinn c'est le 2
        consequences = chapter.consequences_choix2;
      }
      
      // applique les conséquences (si existent)
      if (consequences) {
        if (consequences.aurore !== undefined) {
          this.playerStore.updateMetric('aurore', consequences.aurore);
        }
        if (consequences.soleil !== undefined) {
          this.playerStore.updateMetric('soleil', consequences.soleil);
        }
        if (consequences.royaume !== undefined) {
          this.playerStore.updateMetric('royaume', consequences.royaume);
        }
        
        // log des nouvelles valeur
        console.log("NB DU CHOIX", choixNumber);
        console.log("===== AFFECTS : =====");
        console.log(`Métrique Aurore: ${this.playerStore.auroreValue} "("${consequences.aurore}")"`);
        console.log(`Métrique Soleil: ${this.playerStore.soleilValue} "("${consequences.soleil}")"`);
        console.log(`Métrique Royaume: ${this.playerStore.royaumeValue} "("${consequences.royaume}")"`);
      }
    },

    handleKeyDown(event) {
      if (event.key === 'Escape') {
        // si ouvert, le ferme ; si fermé, le ouvre
        this.modal = !this.modal;
      }
    }
  },

  watch: {
    // Changement params url
    '$route.params.id'(newId) {
      this.chapitreId = newId;
      this.storyStore.setCurrentChapter(newId);
      this.choiceSelected = null; // réinitialise le choix
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: Gothic;
    src: url(../assets/DidactGothic-Regular.ttf) format(truetype);
    /*Ajout des fonts*/
    font-family: Mostean;
    src: url(../assets/Mostean.ttf) format(truetype);
}

.chapitre-container {
  width: 100%;
  height: 93vh;
  background-color: #1F1B33;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chapitre-header {
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 2;
}

.chapitre-header h1 {
  font-size: 4rem;
  margin-bottom: 5px;
  color: #E7DF8B;
  font-family: Mostean;
  font-weight: 400;
}

.chapitre-header h2 {
  font-size: 2.3rem;
  font-weight: 400;
  color: #E7DF8B;
  font-family: Mostean;
}

.chapitre-contenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 1;
}

.btn-continuer {
  position: absolute;
  bottom: 20px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;
  font-family: Gothic;
}

.btn-continuer:hover {
  color: rgb(255, 251, 171);
}
</style>