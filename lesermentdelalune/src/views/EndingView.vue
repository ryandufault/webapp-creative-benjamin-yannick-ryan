<template>
  <div class="ending-container">
    <!-- bg img depuis le json -->
    <img class="bg-img" :src="finActuelle?.image" v-if="finActuelle?.image"/>
    <div class="ending-header" v-if="finActuelle">
      <h1>Fin</h1>
      <h2>{{ finActuelle.titre }}</h2>
    </div>

    <!-- affiche fin ou le recap selon showChoiceHistory -->
    <div class="fin-contenu" v-if="finActuelle && !showChoiceHistory">
      <p>{{ finActuelle.texte }}</p>
    </div>
    <ChoiceHistory v-if="showChoiceHistory"/>
    <button class="btn-menu" @click="btnMenu">Retourner au menu</button>
    <button class="btn-recap" @click="toggleRecap">
      {{ showChoiceHistory ? 'Voir la fin' : 'Récapitulatif' }} <!-- condition selon state -->
    </button>
  </div>
</template>

<script>
import ChoiceHistory from '../components/ChoiceHistory.vue'
import { useStoryStore } from '../stores/useStoryStore'
import { usePlayerStore } from '../stores/usePlayerStore'
import { mapStores } from 'pinia'
import { gsap } from "gsap";

export default {
name: 'EndingView',

components: {
    ChoiceHistory
  },

data() {
  return {
    endingId: null,
    showChoiceHistory: false // affiche fin par défaut
  }
},

computed: {
  ...mapStores(useStoryStore),
  ...mapStores(usePlayerStore),

  finActuelle() {
    return this.storyStore.getChapterById(this.endingId); // recup fin actuelle depuis le store
  }
},

mounted() {
  // recup id depuis url
  this.endingId = this.$route.params.id;
  
  // load la fin depuis le store
  this.storyStore.setCurrentChapter(this.endingId);

  this.$nextTick(() => {
      gsap.timeline()
        .from("h1", {
          opacity: 0,
          duration: 0.5
        })
        .from("h2", {
          x: "100vw",
          duration: 0.5,
        })
        .from(".fin-contenu", {
          opacity: 0,
          duration: 0.5
        })
        .from(".bg-img", {
          opacity: 0,
          duration: 0.5
        })
    });
},

methods: {
  btnMenu() {
    // reset les choix et sys de cons
    this.storyStore.resetChoices();
    this.playerStore.resetSysCons(); 
    
    // navigation programmatique vers menu
    this.$router.replace({ name: 'home' });
  },

  
  toggleRecap() { // switch fin ou récapitulatif
    this.showChoiceHistory = !this.showChoiceHistory;
  }
}
}
</script>
  
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: #090909;
}
</style>

<style scoped>
@font-face {
    font-family: Gothic;
    src: url(../assets/DidactGothic-Regular.ttf) format(truetype);
    font-family: Mostean;
    src: url(../assets/Mostean.ttf) format(truetype);
}

.ending-container {
  width: 100%;
  height: 93vh;
  background-color: #1F1B33;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.5;
}
  
.ending-header {
  position: absolute;
  top: 1vw;
  right: 1.5vw;
  z-index: 1;
}
  
.ending-header h1 {
  font-size: 4.1vw;
  margin-bottom: -2vw;
  color: #fff6b3;
  font-family: Mostean;
  font-weight: 400;
}
  
.ending-header h2 {
  font-size: 1.9vw;
  font-weight: 400;
  color: #E7DF8B;
  font-family: Mostean;
}
  
.fin-contenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vw;
  gap: 20px;
  font-family: Gothic;
  z-index: 2;
}
  
.fin-contenu p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #fff6b3;
  font-family: Gothic;
  text-align: justify;
  white-space: pre-line;
  margin: 0;
}

.btn-menu {
  position: absolute;
  bottom: 20px;
  left: 4.5vw;
  background: none;
  border: none;
  font-size: 1vw;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-family: Gothic;
}
  
.btn-menu:hover {
  color: rgb(255, 251, 171);
}

.btn-recap {
  position: absolute;
  bottom: 20px;
  right: 4.5vw;
  background: none;
  border: none;
  font-size: 1vw;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-family: Gothic;
}

.btn-recap:hover {
  color: rgb(255, 251, 171);
}

.btn-menu::before {
  content: "-";
  position: absolute;
  left: -0.5vw;
  opacity: 0;
  transform: translateX(4px);
  transition: all 0.1s ease;
  color: #F9F9F9;
}

.btn-menu:hover::before {
  opacity: 1;
  color: #E7DF8B;
  transform: translateX(0);
}

.btn-recap::before {
  content: "-";
  position: absolute;
  left: -0.5vw;
  opacity: 0;
  transform: translateX(4px);
  transition: all 0.1s ease;
  color: #F9F9F9;
}

.btn-recap:hover::before {
  opacity: 1;
  color: #E7DF8B;
  transform: translateX(0);
}

@media (min-width: 1920px) and (max-width: 2560px) {
 
 .fin-contenu p {
 font-size: 1vw;
 }

 .ending-header h1 {
  font-size: 6.1vw;
  margin-bottom: -2vw;
}
  
.ending-header h2 {
  font-size: 1.9vw;
}
}

@media (min-width: 1024px) and (max-width: 1920px) {

 .fin-contenu p {
 font-size: 2.2vw;
 }
}
</style>