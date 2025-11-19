<template>
  <div class="ending-container">
    <div class="ending-header" v-if="finActuelle">
      <h1>Fin</h1>
      <h2>{{ finActuelle.titre }}</h2>
    </div>

    <div class="fin-contenu" v-if="finActuelle">
      <p>{{ finActuelle.texte }}</p>
    </div>

    <button class="btn-menu" @click="btnMenu">Retourner au menu</button>
  </div>
</template>

<script>
import { useStoryStore } from '../stores/useStoryStore'
import { usePlayerStore } from '../stores/usePlayerStore'
import { mapStores } from 'pinia'

export default {
name: 'EndingView',

data() {
  return {
    endingId: null
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
},

methods: {
  btnMenu() {
    // reset les choix et sys de cons
    this.storyStore.resetChoices();
    this.playerStore.resetSysCons(); 
    
    // navigation programmatique vers menu
    this.$router.push({ name: 'home' });
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
    /*Ajout des fonts*/
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
  
.ending-header {
  position: absolute;
  top: 1vw;
  right: 1.5vw;
}
  
.ending-header h1 {
  font-size: 4.1vw;
  margin-bottom: -2vw;
  color: #E7DF8B;
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
  gap: 20px;
}
  
.fin-contenu p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #E7DF8B;
  font-family: Gothic;
  text-align: justify;
  white-space: pre-line;
  margin: 0;
}

.btn-menu {
  position: absolute;
  bottom: 20px;
  left: 30px;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
  
.btn-menu:hover {
  color: rgb(255, 251, 171);
}
</style>