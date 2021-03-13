<template>
  <slotRuta>
    <template v-slot:titulo>
      <h3>Titulo para el enrutado mediante objeto</h3>
    </template>
    <template v-slot:cuerpo>
      <h3>Cuerpo</h3>
    </template>
  </slotRuta>
  <router-view></router-view>
</template>

<script>
import slotRuta from "./slotRuta.vue";
export default {
  components: {
    'slotRuta': slotRuta,
  },
};
</script>
