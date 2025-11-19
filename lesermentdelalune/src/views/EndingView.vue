<template>
    <div class="ending-container">
      <div class="ending-header">
        <h1>Fin</h1>
        <h2>Nom de la fin</h2>
      </div>
  
      <div class="fin-contenu">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
      
    }
  },
  computed: {
      ...mapStores(useStoryStore),
      ...mapStores(usePlayerStore),
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
  top: 20px;
  right: 30px;
}
  
.ending-header h1 {
  font-size: 5rem;
  margin-bottom: 1vw;
  color: #E7DF8B;
  font-family: Mostean;
  font-weight: 400;
}
  
.ending-header h2 {
  font-size: 2.3rem;
  font-weight: 400;
  margin-top: -1.5vw;
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