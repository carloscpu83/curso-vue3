<template>
  <h4>Contador (real) (Suma 2): {{ valor }}</h4>
  <input
    type="button"
    value="Incrementar desde el componente contador"
    @click="incrementar"
  />
</template>

<script>
export default {
  computed: {
    valor() {
      // Acceso al valor despues de que este mute mediante el evento click
      return this.$store.getters['moduloValor/getValor'];

    }
  },
  methods: {
    incrementar() {
      this.$store.commit('moduloValor/incrementar', { value: 2 });
    }
  }
};
</script>
