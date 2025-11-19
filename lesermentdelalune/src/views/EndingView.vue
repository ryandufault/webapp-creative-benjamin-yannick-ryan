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
  
<style scoped>
.ending-container {
  width: 100%;
  height: 93vh;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  
.ending-header {
  position: absolute;
  top: 20px;
  right: 30px;
}
  
.ending-header h1 {
  font-size: 2rem;
  margin-bottom: 5px;
  color: #333;
}
  
.ending-header h2 {
  font-size: 1.3rem;
  font-weight: 400;
  color: #666;
}
  
.fin-contenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
  
.btn-menu {
  position: absolute;
  bottom: 20px;
  left: 30px;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  transition: 0.3s;
}
  
.btn-menu:hover {
  color: rgb(255, 251, 171);
}
</style>