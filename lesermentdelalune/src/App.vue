<template>
    <div id="app">
      <ChapterView />
    </div>
  </template>
  
  <script>
  import ChapterView from './components/ChapterView.vue'
  
  export default {
    name: 'App',
    components: {
      ChapterView
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