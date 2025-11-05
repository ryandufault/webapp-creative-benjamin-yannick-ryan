<template>
    <div class="stats-container">
      <div class="stat-indicator">
        <p>Royaume</p>
        <div class="stat-bar"></div>
        <p class="percentage">0%</p>
      </div>
  
      <div class="stat-indicator">
        <p>Aurore</p>
        <div class="stat-bar"></div>
        <p class="percentage">0%</p>
      </div>
  
      <div class="stat-indicator">
        <p>Soleil</p>
        <div class="stat-bar"></div>
        <p class="percentage">0%</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatsSummary',
    data() {
      return {
        
      }
    }
  }
  </script>
  
  <style scoped>
  .stats-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2rem;
  }
  
  .stat-indicator {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .stat-indicator p {
    color: black;
    font-size: 1rem;
    margin: 0;
    min-width: 100px;
  }
  
  .stat-bar {
    width: 300px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2vw;
    position: relative;
  }
  
  .stat-bar::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 30%; /* sera dynamisé */
    height: 100%;
    background-color: red;
    border-radius: 2vw;
  }
  
  .percentage {
    min-width: 40px !important;
    font-weight: bold;
  }
  </style>