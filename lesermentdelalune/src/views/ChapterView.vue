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
        <NarrativeText :texte="displayedText" />
        
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
      <Modal v-if="modal" @close="modal = false" />
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
      
      // si un choix est selected, afficher texte postchoix
      if (this.choiceSelected === 1 && chapter?.textepostchoix1) {
        return chapter.textepostchoix1;
      } else if (this.choiceSelected === 2 && chapter?.textepostchoix2) {
        return chapter.textepostchoix2;
      }
      return chapter?.texte || ''; // sinon afficher texte initial
    }
  },

  mounted() {
    // Récup l'id du chapitre avec l'url (paramètres)
    this.chapitreId = this.$route.params.id;
    
    // Définir le chapitre actuel depuis le store (déjà chargé)
    this.storyStore.setCurrentChapter(this.chapitreId);

    this.choiceSelected = null; // réinitialise le choix selected
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

      // si on arrive au chap 9 (une fin), navig a endingview
      if (nextChapterId === 9) {
        this.$router.push({ name: 'fin' });
      } else {
        // Navigation programmatique vers chap suivant
        this.$router.push({ 
          name: 'chapitre', 
          params: { id: nextChapterId } 
        });
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
.chapitre-container {
  width: 100%;
  height: 93vh;
  background-color: white;
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
}

.chapitre-header h1 {
  font-size: 2rem;
  margin-bottom: 5px;
  color: #333;
}

.chapitre-header h2 {
  font-size: 1.3rem;
  font-weight: 400;
  color: #666;
}

.chapitre-contenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btn-continuer {
  position: absolute;
  bottom: 20px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  transition: 0.3s;
}

.btn-continuer:hover {
  color: rgb(255, 251, 171);
}
</style>