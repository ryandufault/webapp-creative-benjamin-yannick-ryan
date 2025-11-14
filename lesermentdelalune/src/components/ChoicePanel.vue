<template>
  <div class="choice-panel" v-if="choix1 || choix2">
    <div class="choix" v-if="choix1" @click="selectChoice(1)">
      {{ choix1 }}
    </div>
    <div class="choix" v-if="choix2" @click="selectChoice(2)">
      {{ choix2 }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoicePanel',
  props: {
    choix1: {
      type: String,
      default: null
    },
    choix2: {
      type: String,
      default: null
    }
  },
  methods: {
    selectChoice(choiceNumber) {
      this.$emit('choice-selected', choiceNumber);
    }
  }
}
</script>

<style scoped>
.choice-panel {
  width: 33%;
  height: 16%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
}

.choix {
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.3s;
}

.choix:hover {
  color: rgb(251, 255, 146);
}
</style>