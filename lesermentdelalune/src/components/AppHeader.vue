<template>
  <div class="app-wrapper">
    <h1>Le serment de la lune</h1>
    <div class="btn-container">
    <div class="btn">
      Commencer
    </div>
    <div class="btn">
      Continuer
    </div>
     <div class="btn">
      Sauvegardes
    </div>
       <div class="btn">
      Options
    </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  width: 100%; /* 1/3 de l'écran */
  height: 100%; /* 1/6 de l'écran */
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent */
}

h1{
  text-align: center;
}

.btn-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding-left: 100px;
}

.btn {
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.3s;
}

.btn:hover {
  color:rgb(251, 255, 146);
}


</style>