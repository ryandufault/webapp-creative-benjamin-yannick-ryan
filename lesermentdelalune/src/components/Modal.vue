<template>
    <div class="modal-container">
    <div class="menu">
      <h1 class="title">Le serment de la lune</h1>

      <ul class="menu-options">
        <li><button class="btn" @click="btnContinuer">Continuer</button></li>
        <li><button class="btn" @click="btnRecommencer"> Recommencer</button></li>
        <li><button class="btn">Paramètres</button></li>
      </ul>

      <button class="btn-menu" @click="btnMenu">Menu principal</button>
    </div>
  </div>
  </template>
  
  <script>
  import { useStoryStore } from '../stores/useStoryStore'
  import { usePlayerStore } from '../stores/usePlayerStore'
  import { mapStores } from 'pinia'
  export default {
    name: 'Modal',
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
      console.log('storyStore:', this.storyStore);  // Débug
      console.log('playerStore:', this.playerStore); // Débug
      this.storyStore.resetChoices();
      this.playerStore.resetSysCons();
      // navigation programmatique vers menu
      this.$router.push({ name: 'home' });
    },
    btnContinuer() {
      this.$emit('close');
    },
    btnRecommencer() {
      // recup l'id actuel du chap avec l'url
      /* NE MARCHE PAS :const currentChapterId = this.$route.params.id;
      this.$router.push({ name: 'chapitre', params: { id: currentChapterId } });*/

      //alternative
      this.storyStore.resetChoices();
      this.playerStore.resetSysCons();
      window.location.reload();


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
  .modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10vw;
  color: #fff6b3; 
  z-index: 500;
  backdrop-filter: blur(2px);
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.title {
  font-family: Mostean;
  font-size: 3.33vw;
  font-weight: 400;
  color: #fff6b3;
  text-shadow: 0 0 20px rgba(255, 246, 179, 0.15);
}

.menu-options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  background: none;
  border: 0.1vw solid #303140;
  color: #E7DF8B;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  width: 340px;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease;
}

.btn::before {
  content: "-";
  position: absolute;
  left: 10px;
  opacity: 0;
  transition: opacity 0.25s;
}

.btn:hover::before {
  opacity: 1;
}

.btn:hover {
  opacity: 0.8;
  transform: translateX(6px);
  border-color: rgba(255, 246, 179, 0.4);
}

.btn-menu {
  margin-top: 3rem;
  background: none;
  border: none;
  color: rgba(255, 246, 179, 0.7);
  font-size: 1.2rem;
  cursor: pointer;
  text-align: left;
  transition: 0.3s;
}

.btn-menu::before {
  content: "-";
  position: absolute;
  left: -20px;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
  color: #fff6b3;
}

.btn-menu:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.btn-menu:hover {
  opacity: 1;
  transform: translateX(-20px);
  border-color: rgba(255, 246, 179, 0.4);
}
  </style>