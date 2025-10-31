<template>
    <div class="save-container">
    <div class="save-box">
        <p> sauvegarde #1</p>
        <p> sauvegarde #2</p>
        <p> sauvegarde #3</p>
    </div>

    <button class="btn-menu" @click="goBack">
      Retour au menu
    </button>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'EndingScreen',
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
  .save-container {
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0c0920; /* Violet très foncé */
  color: #fff6b3; /* Jaune/beige pâle */
  font-family: 'Courier New', monospace;
}

.save-box {
  padding: 40px 100px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.save-item {
  font-size: 2rem;
  margin: 12px 0;
  cursor: pointer;
  transition: 0.2s;
}

.save-item:hover {
  opacity: 0.7;
}

.active {
  font-weight: bold;
}

.slot-prefix {
  margin-right: 10px;
}

.save-line {
  position: relative;
  font-size: 2rem;
  margin: 15px 0;
  cursor: pointer;
  color: #fff6b3;
  transition: 0.25s;
  padding-left: 25px; /* espace pour le tiret */
}

/* Tiret avant le texte */
.save-line::before {
  content: "-";
  position: absolute;
  left: 0;
  top: 0;
  color: #fff6b3;
  opacity: 0;
  transition: 0.25s;
}

/* Hover : le tiret apparaît */
.save-line:hover::before {
  opacity: 1;
}


.btn-menu {
  margin-top: 60px;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: #fff6b3;
  transition: 0.3s;
}

.btn-menu:hover {
  opacity: 0.7;
}
  </style>