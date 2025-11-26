<template>
  <div class="narrative-wrapper">
    <div class="narrative-container">
      <p class="narrative-text">
        {{ texte }}
      </p>
    </div>
    <button @click="scrollDown" class="scroll-btn">↓</button>
  </div>
</template>

<script>
import { gsap } from 'gsap';
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
  },
  mounted() {
    this.$nextTick(() => {
      gsap.timeline()
        .from(".narrative-text", {
          opacity: 0,
          duration: 1
        }); 

      gsap.to(".scroll-btn", {
        y: 5,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

    });
  },

  methods: {
    scrollDown() {
      const container = document.getElementsByClassName('narrative-container')[0];
      gsap.to(container, {
        scrollTop: container.scrollTop + 200,
        duration: 1,
        ease: "power1.out"
      });

      gsap.to(".scroll-btn", {
        scale: 0.85,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: Gothic;
    src: url(../assets/DidactGothic.ttf) format(truetype);
    /*Ajout des fonts*/
    font-family: Mostean;
    src: url(../assets/Mostean.ttf) format(truetype);
}

.narrative-wrapper {
  position: relative;
  display: inline-block;
}

.narrative-container {
  min-width: 45vw;
  max-width: 75vw;
  min-height: 75vh;
  max-height: 76vh;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: 1;
  border-width: 0.25vw;
  border-style: solid;
  border-color: #303140;
  filter: drop-shadow(0px 0px 15rem rgb(47, 42, 56));
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
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}

.narrative-text {
  color: #fff6b3;
  font-size: 1.2vw;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-line;
  font-family: Gothic;
}

.narrative-container::-webkit-scrollbar {
  display: none;
}

.narrative-container { /* disable la scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-btn {
  all: unset;
  position: absolute;
  bottom: 2vw;
  right: 3vw;
  cursor: pointer;
  font-size: 2vw;
  color: #fff6b3;
  z-index: 10;
  transition: all 0.3s ease;
  filter: drop-shadow(0px 0px 0.75rem rgb(0, 0, 0));
}

.scroll-btn:hover {
  color: rgba(255, 246, 179, 0.4);
  transform: scale(1.2);
}

.scroll-btn:active {
  color: rgba(255, 246, 179, 0.4);
  transform: scale(0.9);
}

@media (min-width: 1920px) and (max-width: 2560px) {
 
 .narrative-text {
   font-size: 1.1vw;
}

 .narrative-container {
   min-width: 20vw;
   min-height: 30vh;
 }
}

@media (min-width: 1024px) and (max-width: 1920px) {

 .narrative-text {
   font-size: 1.8vw;
}

 .narrative-container {
   min-width: 10vw;
   min-height: 20vh;
 }
}
</style>