<template>
    <div class="text-container">
      <p class="text-narratif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NarrativeText',
    data() {
      return {
        
      }
    }
  }
  </script>
  
  <style scoped>
  .text-container {
    width: 50%;
    height: 75%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 30px;
  }
  
  .text-narratif {
    color: white;
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: justify;
  }
  </style>