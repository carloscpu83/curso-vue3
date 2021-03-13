<template>
  <slotFormulario>
    <template v-slot:titulo>
      <h3>Resultado formulario 1 paso por cadena</h3>
    </template>
    <template v-slot:cuerpo>
      {{ str }}
    </template>
  </slotFormulario>
</template>

<script>
import slotFormulario from "./slotFormulario.vue";
export default {
  components: {
    'slotFormulario': slotFormulario,
  },
  props: ["modelValue"],
  data() {
    return {
      str: null,
    };
  },
  beforeMount() {
    this.str = this.modelValue;
  },
};
</script>
