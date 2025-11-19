<template>
  <div class="narrative-container">
    <p class="narrative-text">
      {{ texte }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NarrativeText',
  props: {
    texte: {
      type: String, // puisque c'est des strings json
      default: '' // rien par défaut
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.narrative-container {
  min-width: 45vw;
  max-width: 75vw;
  min-height: 75vh;
  max-height: 76vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 30px;
  z-index: 1;
}

.narrative-text {
  color: white;
  font-size: 0.9vw;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-line;
}
</style>