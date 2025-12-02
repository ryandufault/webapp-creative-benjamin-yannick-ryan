<template>
  <div class="choice-history">
    <h2>Récapitulatif des choix</h2>
    <div class="choice-container">
      <!-- (boucle v-for) tous les choix de chaque chapitre -->
      <template v-for="chapitre in chapitresAvecChoix" :key="chapitre.id">
        <!-- choix1 -->
        <div 
          class="choix" 
          :class="{ none: !isChoiceSelected(chapitre.id, 1) }"
        >
          <p><strong>Choix du chapitre {{ chapitre.id }}</strong></p>
          <p>{{ chapitre.choix1 }}</p>
        </div>
        
        <!-- choix22 -->
        <div 
          class="choix" 
          :class="{ none: !isChoiceSelected(chapitre.id, 2) }"
        >
          <p><strong>Choix du chapitre {{ chapitre.id }}</strong></p>
          <p>{{ chapitre.choix2 }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { useStoryStore } from '../stores/useStoryStore'
import { mapStores } from 'pinia'

export default {
  name: 'ChoiceHistory',
  
  computed: {
    ...mapStores(useStoryStore),
    
    
    chapitresAvecChoix() { // filtre chaopitres seulemenbt avc choix
      return this.storyStore.chapitres.filter(chapitre => {
        return chapitre.choix1 && chapitre.choix2;
      });
    }
  },
  
  methods: {
    isChoiceSelected(chapitreId, choixNumber) { // verif si choix a été prit
      return this.storyStore.playerChoices[chapitreId] === choixNumber;
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: Gothic;
    src: url(../assets/DidactGothic-Regular.ttf) format(truetype);
    font-family: Mostean;
    src: url(../assets/Mostean.ttf) format(truetype);
}

.choice-history {
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
}

.choice-history h2 {
  margin-bottom: 2rem;
  color: #E7DF8B;
  font-weight: 400;
  font-family: Mostean;
  font-size: 2vw;
}

.choice-container {
  display: flex;
  justify-content: center;
  align-items: stretch; 
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.choix {
  padding: 1.5rem;
  background-color: rgba(231, 223, 139, 0.15);
  border: 2px solid #E7DF8B;
  color: #fff6b3;
  width: 15vw;
  min-width: 200px;
  font-family: Gothic;
  transition: all 0.3s ease;
}

.choix strong {
  color: #E7DF8B;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.choix.none {
  opacity: 0.3;
  color: rgba(255, 246, 179, 0.4);
  border-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.3);
}

.choix.none p {
  color: rgba(255, 255, 255, 0.4);
}

.choix.none strong p {
  color: rgba(255, 255, 255, 0.9);
}

.choix p {
  margin: 0;
  line-height: 1.4;
}
</style>