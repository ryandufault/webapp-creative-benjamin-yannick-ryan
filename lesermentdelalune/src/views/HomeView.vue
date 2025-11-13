<template>
  <div class="app-wrapper">
    <h1>Le serment de la lune</h1>
    <div class="btn-container">
      <router-link class="btn" to="/chapter/1">Commencer</router-link>
      <p class="btn">Continuer</p>
      <p class="btn">Sauvegardes</p>
      <p class="btn">Options</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

h1 {
  padding-top: 5vw;
  text-align: center;
}

.btn-container {
  padding-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15vw;
}

.btn {
  color: black;
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
}
</style>
