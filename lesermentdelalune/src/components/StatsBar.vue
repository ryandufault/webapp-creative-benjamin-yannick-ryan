<template>
  <div class="stats-bar">
    <!-- recup depuis le store pinia + associe une couleur -->
    <StatIndicator 
      name="Aurore" 
      :value="playerStore.auroreValue" 
      color="#cac3dc" 
    />
    <StatIndicator 
      name="Soleil" 
      :value="playerStore.soleilValue" 
      color="#f0eece" 
    />
    <StatIndicator 
      name="Royaume" 
      :value="playerStore.royaumeValue" 
      color="#c1a8a4" 
    />
  </div>
</template>

<script>
import StatIndicator from './StatIndicator.vue'
import { usePlayerStore } from '../stores/usePlayerStore'
import { mapStores } from 'pinia'
import { gsap } from 'gsap';

export default {
  name: 'StatsBar',

  components: {
    StatIndicator
  },
  
  computed: {
    ...mapStores(usePlayerStore)
  },
  mounted() {
    this.$nextTick(() => {
      gsap.timeline()
        .from(".stats-bar", {
          opacity: 0,
          duration: 1
        })
    });
  }
}
</script>

<style scoped>
.stats-bar {
  display: flex;
  gap: 4vw;
  top: 0;
}
</style>