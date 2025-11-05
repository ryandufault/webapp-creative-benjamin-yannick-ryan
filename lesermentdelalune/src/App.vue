<template>
    <div id="app">
      <AppHeader />
    </div>
  </template>
  
  <script>
  import AppHeader from './components/AppHeader.vue'
  
  export default {
    name: 'App',
    components: {
      AppHeader
    }
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