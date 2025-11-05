<template>
  <div class="choice-history">
    <h2>Récapitulatif des choix</h2>
    <div class="choice-container">
      <div class="choix"> 
        <p>Choix : Titre du choix</p>
      </div>
      <div class="choix none"> 
        <p>Choix : Titre du choix</p>
      </div>
      <div class="choix"> 
        <p>Choix : Titre du choix</p>
      </div>
      <div class="choix none"> 
        <p>Choix : Titre du choix</p>
      </div>
      <div class="choix"> 
        <p>Choix : Titre du choix</p>
      </div>
      <div class="choix none"> 
        <p>Choix : Titre du choix</p>
      </div>
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
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: black;
}

.choice-history h2 {
  margin-bottom: 2rem;
  color: white;
}

.choice-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.choix {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 15vw;
}

.choix.none {
  opacity: 0.4;
}

.choix p {
  margin: 0;
}

</style>