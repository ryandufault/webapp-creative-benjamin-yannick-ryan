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
  background-color: #303140;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  clip-path: polygon(
    0px calc(100% - 8px),
    4px calc(100% - 8px),
    4px calc(100% - 4px),
    8px calc(100% - 4px),
    8px 100%,
    calc(100% - 8px) 100%,
    calc(100% - 8px) calc(100% - 4px),
    calc(100% - 4px) calc(100% - 4px),
    calc(100% - 4px) calc(100% - 8px),
    100% calc(100% - 8px),
    100% 8px,
    calc(100% - 4px) 8px,
    calc(100% - 4px) 4px,
    calc(100% - 8px) 4px,
    calc(100% - 8px) 0px,
    8px 0px,
    8px 4px,
    4px 4px,
    4px 8px,
    0px 8px
  );
}

.choix {
  color: #F9F9F9;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.3s;
  position: relative;
}

.choix:hover {
  color: rgb(251, 255, 146);
}

@media (min-width: 500px) and (max-width: 1024px) {

.choice-panel {
  width: 62%
}
}

@media (min-width: 200px) and (max-width: 500px) {

.choix {
  font-size: 1rem
}

.choice-panel {
  width: 74%
}
}
</style>