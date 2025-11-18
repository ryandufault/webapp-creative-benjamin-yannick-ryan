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
  max-width: 85vw;
  max-height: 65vh;
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
  font-size: 1rem;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-line;
}
</style>