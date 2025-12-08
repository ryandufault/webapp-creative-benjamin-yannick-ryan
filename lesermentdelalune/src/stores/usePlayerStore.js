import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    playerName: 'lololol',
    aurore: 50, // sera dynamisé
    soleil: 50,
    royaume: 50
  }),

  getters: {
    // Rvalue de métrique aurore
    auroreValue: (state) => state.aurore,
    // value de métrique soleil
    soleilValue: (state) => state.soleil,
    // value de métrique soleil
    royaumeValue: (state) => state.royaume,
    // métriques sous forme d'objet
    allMetrics: (state) => ({
      aurore: state.aurore,
      soleil: state.soleil,
      royaume: state.royaume
    })
  },

  actions: {
    // Modifie le nom du joueur
    setPlayerName(name) {
      this.playerName = name;
    },

    // change valeur métrique spécifique
    updateMetric(metricName, value) {
      if (metricName === 'aurore') {
        this.aurore = Math.max(0, Math.min(100, this.aurore + value));
      } else if (metricName === 'soleil') {
        this.soleil = Math.max(0, Math.min(100, this.soleil + value));
      } else if (metricName === 'royaume') {
        this.royaume = Math.max(0, Math.min(100, this.royaume + value));
      }
    },

    // reset le sys de conséquences à 50 (lors d'un retour au menu, etc..)
    resetSysCons() {
      this.aurore = 50;
      this.soleil = 50;
      this.royaume = 50;
    }

  }
});