<template>
  <h4>Contador2 (Aumentado en 100) (Suma 10): {{ valor }}</h4>
  <input
    type="button"
    value="Incrementar desde el componente contador 2"
    @click="incrementar"
  />
</template>

<script>
export default {
  computed: {
      valor(){
          return this.$store.getters['moduloValor/sumar100'];
      }
  },
  methods: {
    incrementar() {
      this.$store.commit({ type: 'moduloValor/incrementar', value: 10 });
    }
  }
};
</script>
