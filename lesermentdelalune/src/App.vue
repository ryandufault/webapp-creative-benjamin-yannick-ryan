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
html{
  background-color: #1F1B33;
}

  #app {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>