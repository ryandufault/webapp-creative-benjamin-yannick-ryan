<template>
  <div class="app-wrapper">
    <img class="bg-img" src="../assets/img/home.png" />
     <h1>Le serment de la lune</h1>
     <div class="btn-container">
        <p class="btn" @click="startAdventure">Commencer</p>
        <p class="btn">Continuer</p>
        <p class="btn">Sauvegardes</p>
        <p class="btn">Options</p>
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
      this.$router.push({ 
        name: 'chapitre', 
        params: { id: '1' } 
      });
    }
  }
}
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
}

h1 {
  text-align: center;
  color: #E7DF8B; 
  font-family: Mostean;
  font-size: 5vw;
  font-weight: 400;
  grid-column: 1 / -1;
  margin-bottom: 3vw;
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
  font-size: 1vw;
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
  text-decoration: none; /* pour enlever les styles du router-link */
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
  z-index: 1;
  border-width: 0.2vw;
  border-style: solid;
  border-color: #303140;
  grid-column: 2;
  grid-row: 2;
  margin-top: -3vw;
  z-index: 1;
  clip-path: polygon( /* https://pixelcorners.lukeb.co.uk/?radius=8&multiplier=4 */
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
  color: #E7DF8B;
  font-size: 0.9vw;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-line;
  font-family: Gothic;
}
</style>
