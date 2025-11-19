import { defineStore } from 'pinia';
import chaptersData from '../assets/chapitres.json';

export const useStoryStore = defineStore('story', {
  state: () => ({
    chapitres: chaptersData.chapitres, // Tous les chapitres du JSON
    currentChapter: null, // Chapitre actuel
    playerChoices: {} // Choix du joueur {chapitreId: choixNumber}
  }),

  getters: {
    // Retourne le nombre de chapitres dans l'array state.chapitres
    chapterCount: (state) => state.chapitres.length,

    // Retourne true si l'array state.chapitres contient des chapitres
    hasChapters: (state) => state.chapitres.length > 0,

    // Récupère un chapitre spécifique par son id
    getChapterById: (state) => (id) => {
      return state.chapitres.find(chapitre => chapitre.id === parseInt(id));
    }
  },

  actions: {
    // Modifie le chapitre actuel à afficher (storé dans this.currentChapter)
    setCurrentChapter(id) {
      this.currentChapter = this.getChapterById(id);
    },

    // Enregistre le choix du joueur
    saveChoice(chapitreId, choixNumber) {
      this.playerChoices[chapitreId] = choixNumber;
    },

    // Reset tous les choix
    resetChoices() {
      this.playerChoices = {};
      this.currentChapter = null;
    },
  }
});