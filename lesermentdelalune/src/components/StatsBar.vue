<template>
    <div class="stats-bar">
      <StatIndicator />
      <StatIndicator />
      <StatIndicator />
    </div>
</template>
  
<script>
  import StatIndicator from './StatIndicator.vue'
  
  export default {
    name: 'StatsBar',
    components: {
      StatIndicator
    },
    data() {
      return {
        
      }
    }
  }
</script>
  
<style scoped>
  .stats-bar {
    display: flex;
    gap: 30px;
    padding: 1rem;
  }
</style>