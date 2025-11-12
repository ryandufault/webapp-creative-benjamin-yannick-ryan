<template>
  <div id="app">
      <!-- Les liens vers les différentes Views (pages) via <router-link> -->
      <router-view />
  </div>
</template>
  
<script>
export default {
  name: 'App',
}
</script>

<style>
  #app {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>