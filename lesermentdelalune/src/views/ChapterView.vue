<template>
    <div class="chapitre-container">
      <div class="chapitre-header">
        <h1>Chapitre 1</h1>
        <h2>L'appel de l'aube</h2>
      </div>
  
      <div class="chapitre-contenu">
        <NarrativeText />
        <ChoicePanel />
      </div>
  
      <button class="btn-continuer">Continuer</button>
    </div>
  </template>
  
  <script>
  import NarrativeText from '../components/NarrativeText.vue'
  import ChoicePanel from '../components/ChoicePanel.vue'
  
  export default {
    name: 'ChapterView',
    components: {
      NarrativeText,
      ChoicePanel
    },
    data() {
      return {
        
      }
    }
  }
  </script>
  
  <style scoped>
  .chapitre-container {
    width: 100%;
    height: 93vh; /* 93% de l'écran */
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .chapitre-header {
    position: absolute;
    top: 20px;
    left: 30px;
  }
  
  .chapitre-header h1 {
    font-size: 2rem;
    margin-bottom: 5px;
    color: #333;
  }
  
  .chapitre-header h2 {
    font-size: 1.3rem;
    font-weight: 400;
    color: #666;
  }
  
  .chapitre-contenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .btn-continuer {
    position: absolute;
    bottom: 20px;
    right: 30px;
    background: none;
    border: none;
    font-size: 1.1rem;
    color: #333;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .continue-btn:hover {
    color:rgb(255, 251, 171);
  }
  </style>