<template>
  <div class="choice-history">
    <h2>Récapitulatif des choix</h2>
    <div class="choix"> 
     <p> Choix : Titre du choix </p>
    </div>
    <div class="choix none"> 
     <p> Choix : Titre du choix </p>
    </div>
    <div class="choix"> 
     <p> Choix : Titre du choix </p>
    </div>
    <div class="choix none"> 
     <p> Choix : Titre du choix </p>
    </div>
    <div class="choix"> 
     <p> Choix : Titre du choix </p>
    </div>
    <div class="choix none"> 
     <p> Choix : Titre du choix </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoiceHistory',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.choice-history {
  width: 33%; /* 1/3 de l'écran */
  height: 16%; /* 1/6 de l'écran */
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  
}

.choix{
  width: 2vw;
  border-width: 2px;
  border-style: solid;
  border-color: red;
}

.choix.none{
  width: 2vw;
  border-width: 2px;
  border-style: solid;
  border-color: red;
  opacity: 50%;
}

</style>