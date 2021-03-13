<template>
  <section>
    <base-card>
      <h2>Pantalla de registro</h2>
      <entrenador-formulario></entrenador-formulario>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "../UI/Objects/BaseCard.vue";
import EntrenadorFormulario from "./EntrenadorFormulario.vue";
export default {
  components: {
    EntrenadorFormulario,
    BaseCard,
  },
};
</script>

<style scoped></style>
