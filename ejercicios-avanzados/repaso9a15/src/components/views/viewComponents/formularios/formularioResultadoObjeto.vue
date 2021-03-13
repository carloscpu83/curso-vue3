<template>
  <slotFormulario>
    <template v-slot:titulo>
      <h3>Resultado formulario 1 paso por objeto</h3>
    </template>
    <template v-slot:cuerpo>
      <p>El texto basico es: {{ objeto.textoBasico }}</p>
      <p>El numero basico es: {{ objeto.numBasico }}</p>
      <p>
        El check basico es:
        {{ objeto.checkBasico === true ? "activado" : "desactivado" }}
      </p>
      <p>El check colectivo es: {{ objeto.checkColectivo.join(", ") }}</p>
      <p>El radiobutton basico es: {{ objeto.radioBut }}</p>
    </template>
  </slotFormulario>
</template>

<script>
import slotFormulario from "./slotFormulario.vue";
export default {
  components: {
    slotFormulario: slotFormulario,
  },
  props: ["modelValue"],
  data() {
    return {
      objeto: null,
    };
  },
  beforeMount() {
    this.objeto = this.modelValue;
  },
};
</script>
