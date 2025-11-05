<template>
  <div class="save-container">
    <div class="save-box">
      <div class="save-slot">
        <h2>Sauvegarde 1</h2>
        <p class="save-date">Dernière sauvegarde : 11 nov 2025</p>
      </div>
      
      <div class="save-slot">
        <h2>Sauvegarde 2</h2>
        <p class="save-date">Dernière sauvegarde : 23 oct 2025</p>
      </div>
      
      <div class="save-slot">
        <h2>Sauvegarde 3</h2>
        <p class="save-date">Dernière sauvegarde : 5 nov 2025</p>
      </div>
    </div>

    <button class="btn-menu">
      Retour au menu
    </button>
  </div>
</template>

<script>
export default {
  name: 'SaveSlotManager',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.save-container {
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0c0920;
  color: #fff6b3;
  font-family: 'Courier New', monospace;
}

.save-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
}

.save-slot {
  width: 33%;
  height: 16vh;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

.save-slot:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.save-slot h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff6b3;
}

.save-date {
  font-size: 0.9rem;
  color: rgba(255, 246, 179, 0.6);
  font-style: italic;
}

.btn-menu {
  margin-top: 60px;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: #fff6b3;
  transition: 0.3s;
}

.btn-menu:hover {
  opacity: 0.7;
}
</style>