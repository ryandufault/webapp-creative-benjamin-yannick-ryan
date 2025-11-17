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
  width: 50%;
  height: 75%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 30px;
}

.narrative-text {
  color: white;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-line;
}
</style>