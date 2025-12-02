<template>
  <div class="app-wrapper">
    <img class="bg-img" src="../assets/img/home.png" />
     <h1>Le serment de la lune</h1>
     <div class="btn-container">
        <p class="btn" @click="startAdventure">Commencer</p>
     </div>
     <div class="info-container">
        <p class="info-text">
           Bienvenue dans notre histoire interactive qui se déroule dans un royaume médiéval. <br> Dans cette aventure, tu incarnes Agnès, le fils du roi, et chacun de tes choix influence ton avenir et ton destin. <br>
           Ton parcours évolue selon tes décisions : chaque choix modifie la trajectoire de ton histoire. <br>
           En appuyant sur Échap, un petit menu apparaît et te permet de recommencer l'histoire, de modifier les réglages ou de retourner au menu principal. <br><br>
           Découvre un monde où chacune de tes actions compte.
        </p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    startAdventure() {
      this.$router.replace({ 
        name: 'chapitre', 
        params: { id: '1' } 
      });
    }
  },
mounted() {
gsap.timeline()
.from(".btn-container",{
  y: "-1000px",
  opacity: 0,
  duration: 1
})
.from(".info-container",{
  x: "10000px",
  duration: 1,
  delay: -0.5
})
.from(".info-text",{
  opacity: 0,
  duration: 0.5,
  delay: -0.5
})
.from(".bg-img",{
  opacity: 0,
  duration: 1,
  delay: -0.5
})
.from("h1",{
  opacity: 0,
  duration: 0.5,
})
  }
}

//Section animation gsap
import { gsap } from 'gsap';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: #090909;
  overflow: hidden;
}
</style>

<style scoped>
@font-face {
    font-family: Gothic;
    src: url(../assets/DidactGothic-Regular.ttf) format(truetype);
    /*Ajout des fonts*/
    font-family: Mostean;
    src: url(../assets/Mostean.ttf) format(truetype);
}

.app-wrapper {
  width: 100%;
  height: 100%;
  background-color: #1F1B33;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 3vw;
  column-gap: 12vw;
  padding: 5vw 5vw;
}

.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.5;
}

h1 {
  text-align: center;
  color: #E7DF8B; 
  font-family: Mostean;
  font-size: 7vw;
  font-weight: 400;
  grid-column: 1 / -1;
  grid-row: 1;
  margin-bottom: -3vw;
  z-index: 1;
}

.btn-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15vw;
  grid-column: 1;
  grid-row: 2;
  z-index: 1;
}

.btn {
  color: #E7DF8B;
  font-size: 1.4vw;
  cursor: pointer;
  padding: 10px 30px;
  transition: color 0.3s;
  font-family: Gothic;
  position: relative;
}

.btn:hover {
  color: rgb(139, 139, 139);
}

a.btn {
  text-decoration: none;
  font-family: Gothic;
}

.btn::before {
  content: "-";
  position: absolute;
  left: -0.1vw;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.1s ease;
  color: #E7DF8B;
}

.btn:hover::before {
  opacity: 1;
  color: rgb(139, 139, 139);
  transform: translateX(0);
}

.info-container {
  min-width: 35vw;
  max-width: 25vw;
  min-height: 45vh;
  max-height: 36vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-width: 0.2vw;
  border-style: solid;
  border-color: #303140;
  grid-column: 2;
  grid-row: 2;
  margin-top: -6vw;
  z-index: 1;
  clip-path: polygon(
    0px calc(100% - 32px),
    8px calc(100% - 32px),
    8px calc(100% - 16px),
    16px calc(100% - 16px),
    16px calc(100% - 8px),
    32px calc(100% - 8px),
    32px 100%,
    calc(100% - 32px) 100%,
    calc(100% - 32px) calc(100% - 8px),
    calc(100% - 16px) calc(100% - 8px),
    calc(100% - 16px) calc(100% - 16px),
    calc(100% - 8px) calc(100% - 16px),
    calc(100% - 8px) calc(100% - 32px),
    100% calc(100% - 32px),
    100% 32px,
    calc(100% - 8px) 32px,
    calc(100% - 8px) 16px,
    calc(100% - 16px) 16px,
    calc(100% - 16px) 8px,
    calc(100% - 32px) 8px,
    calc(100% - 32px) 0px,
    32px 0px,
    32px 8px,
    16px 8px,
    16px 16px,
    8px 16px,
    8px 32px,
    0px 32px
  );
}

.info-text {
  color: #fff6b3;
  font-size: 1.3vw;
  text-align: justify;
  white-space: pre-line;
  font-family: Gothic;
}

@media (min-width: 500px) and (max-width: 1024px) {
  .app-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 4vw;
    padding: 5vw;
    justify-items: center;
  }

  h1 {
    font-size: 10vw;
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0;
  }

  .btn-container {
    grid-column: 1;
    grid-row: 2;
    padding-left: 0;
    align-items: center;
  }

  .btn {
    font-size: 4vw;
    padding: 15px 40px;
  }

  .info-container {
    grid-column: 1;
    grid-row: 3;
    min-width: 70vw;
    max-width: 80vw;
    min-height: auto;
    max-height: none;
    margin-top: 0;
    padding: 25px;
  }

  .info-text {
    font-size: 2.5vw;
  }
}

@media (max-width: 500px) {
  .app-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 5vw;
    padding: 8vw 5vw;
    justify-items: center;
    overflow-y: auto;
    height: auto;
    min-height: 100%;
  }

  h1 {
    font-size: 13vw;
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0;
  }

  .btn-container {
    grid-column: 1;
    grid-row: 2;
    padding-left: 0;
    align-items: center;
  }

  .btn {
    font-size: 6vw;
    padding: 15px 50px;
  }

  .info-container {
    grid-column: 1;
    grid-row: 3;
    min-width: 85vw;
    max-width: 90vw;
    min-height: auto;
    max-height: none;
    margin-top: 0;
    padding: 20px;
    border-width: 2px;
  }

  .info-text {
    font-size: 4vw;
    line-height: 1.6;
  }
}
</style>
