<template>
  <div class="app-wrapper">
    <h1>Le serment de la lune</h1>
    <div class="btn-container">
      <p class="btn" @click="startAdventure">Commencer</p>
      <p class="btn">Continuer</p>
      <p class="btn">Sauvegardes</p>
      <p class="btn">Options</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    startAdventure() {
      this.$router.push({ 
        name: 'chapitre', 
        params: { id: '1' } 
      });
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

.app-wrapper {
  width: 100%;
  height: 100%;
  background-color: #1F1B33;
}

h1 {
  padding-top: 5vw;
  text-align: center;
  color: #E7DF8B; 
  font-family: Mostean;
  font-size: 5rem;
  font-weight: 400;
}

.btn-container {
  padding-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15vw;
}

.btn {
  color: #E7DF8B;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: color 0.3s;
}

.btn:hover {
  color: rgb(139, 139, 139);
}

a.btn {
  text-decoration: none; /* pour enlever les styles du router-link */
  font-family: Gothic;
}
</style>
