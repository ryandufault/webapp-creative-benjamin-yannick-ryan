<template>
  <div class="choice-panel">
    <div class="choice">
      Choix 1
    </div>
    <div class="choice">
      Choix 2
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoicePanel',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.choice-panel {
  width: 33%; /* 1/3 de l'écran */
  height: 16%; /* 1/6 de l'écran */
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
}

.choice {
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.3s;
}

.choice:hover {
  color:rgb(251, 255, 146);
  transform: scale(1.1);
}
</style>