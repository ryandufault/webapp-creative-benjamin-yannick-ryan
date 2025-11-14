import { defineStore } from 'pinia';

export const useStoryStore = defineStore('story', {
  state: () => ({
    chapitres: [], // Tous les chapitres du JSON
    currentChapter: null, // Chapitre actuel
    isLoading: false,
    error: null,
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
    // Charge les chapitres depuis le JSON
    async loadChapters() {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await fetch('/src/assets/chapitres.json');
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        const data = await response.json();
        this.chapitres = data.chapitres;
      } catch (error) {
        console.error('Erreur lors du chargement du JSON :', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    // Modifie le chapitre actuel à afficher
    setCurrentChapter(id) {
      this.currentChapter = this.getChapterById(id);
    },

    // Enregistre le choix du joueur
    saveChoice(chapitreId, choixNumber) {
      this.playerChoices[chapitreId] = choixNumber;
    }
  }
});