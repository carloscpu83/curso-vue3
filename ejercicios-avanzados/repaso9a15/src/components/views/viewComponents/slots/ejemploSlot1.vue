<template>
  <slotBase>
    <template v-slot:titulo>
      <h3>Prueba Slot 1</h3>
    </template>
    <template v-slot:cuerpo>
      <p>Valor para el cuerpo</p>
    </template>
  </slotBase>
</template>

<script>
import slotBase from "./slotBase.vue";
export default {
  components: {
    'slotBase': slotBase
  }
};
</script>
