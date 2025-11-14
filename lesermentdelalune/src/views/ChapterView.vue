<template>
  <div class="chapitre-container">
    <!-- chargement -->
    <div v-if="storyStore.isLoading">Chargement...</div>

    <!-- affiche -->
    <div v-else-if="storyStore.currentChapter">
      <div class="chapitre-header">
        <h1>Chapitre {{ storyStore.currentChapter.id }}</h1>
        <h2>{{ storyStore.currentChapter.titre }}</h2>
      </div>

      <div class="chapitre-contenu">
        <NarrativeText :texte="storyStore.currentChapter.texte" />
        <ChoicePanel 
          :choix1="storyStore.currentChapter.choix1" 
          :choix2="storyStore.currentChapter.choix2"
          @choice-selected="handleChoice"
        />
      </div>

      <button class="btn-continuer" @click="goToNextChapter">Continuer</button>
    </div>

    <!-- erreur -->
    <div v-else-if="storyStore.error">
      <p>Erreur : {{ storyStore.error }}</p>
    </div>
  </div>
</template>

<script>
import NarrativeText from '../components/NarrativeText.vue'
import ChoicePanel from '../components/ChoicePanel.vue'
import { useStoryStore } from '../stores/useStoryStore'
import { mapStores } from 'pinia'

export default {
  name: 'ChapterView',
  
  components: {
    NarrativeText,
    ChoicePanel
  },

  computed: {
    // Mapper le store complet
    // Cela donne accès à : storyStore.state, storyStore.getters, storyStore.actions
    ...mapStores(useStoryStore)
  },

  async mounted() {
    // Charger les chapitres si pas encore chargés
    if (!this.storyStore.hasChapters) {
      await this.storyStore.loadChapters();
    }

    // Définir le chapitre actuel depuis l'URL
    const chapitreId = this.$route.params.id;
    this.storyStore.setCurrentChapter(chapitreId);
  },

  methods: {
    handleChoice(choixNumber) {
      // Accès aux actions via storyStore
      const chapitreId = this.storyStore.currentChapter.id;
      this.storyStore.saveChoice(chapitreId, choixNumber);
      console.log(`Choix ${choixNumber} enregistré pour le chapitre ${chapitreId}`);
    },

    goToNextChapter() {
      // Accès au state via storyStore
      const nextChapterId = this.storyStore.currentChapter.id + 1;
      
      // Navigation vers le chapitre suivant
      this.$router.push({ 
        name: 'chapitre', 
        params: { id: nextChapterId } 
      });
    }
  },

  watch: {
    // Réagit aux changements d'URL
    '$route.params.id'(newId) {
      this.storyStore.setCurrentChapter(newId);
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