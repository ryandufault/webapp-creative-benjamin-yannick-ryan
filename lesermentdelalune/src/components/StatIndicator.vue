<template>
  <div class="stat-indicator">
    <div class="stat-bar">
      <p>{{ name }}</p>
      <!-- change de largeur selon la valeurr -->
      <div class="stat-fill" :style="{ width: value + '%', backgroundColor: color }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatIndicator',
  // received de statsbar avec le store pinia
  props: {
    name: {
      type: String, // nom de la métrique
    },
    value: {
      type: Number, // int
    },
    color: {
      type: String, // parce que un hex c'est sous forme de string
    }
  }
}
</script>

<style scoped>
.stat-indicator {
  width: 200px;
  margin: 10px 0;
  top: 0;
}

p {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: #1F1B33;
  font-size: 0.8vw;
  font-family: Gothic;
  margin: 0;
  z-index: 4;
}

.stat-bar {
  width: 100%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0.2vw;
  overflow: hidden;
  position: relative;
}

.stat-fill {
  height: 100%;
  border-radius: 0.2vw;
  position: absolute;
  top: 0;
  left: 0;
}
</style>