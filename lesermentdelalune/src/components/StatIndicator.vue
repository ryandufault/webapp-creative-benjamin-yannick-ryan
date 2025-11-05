<template>
    <div class="stat-indicator">
      <p>Métrique</p>
      <div class="stat-bar">
        <div class="stat-fill"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatIndicator',
    data() {
      return {
        
      }
    }
  }
  </script>
  
  <style scoped>
  .stat-indicator {
    width: 200px;
    margin: 10px 0;
  }
  
  p {
    color: black;
    font-size: 1rem;
    margin-left: 5px;
    margin-bottom: 8px;
  }
  
  .stat-bar {
    width: 100%;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2vw;
    overflow: hidden;
    position: relative;
  }
  
  .stat-fill {
    width: 50%; /* sera dynamique plus tard */
    height: 100%;
    background-color: red;
    border-radius: 2vw;
    position: relative;
  }
  
  
  </style>