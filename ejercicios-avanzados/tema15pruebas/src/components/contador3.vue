<template>
<h4>Contador3 (Multiplos de 250)(Suma 20): {{ valor }}</h4>
  <input
    type="button"
    value="Incrementar desde el componente contador 3"
    @click="incrementar"
  />
</template>

<script>
export default {
    computed:{
        valor(){
            return this.$store.getters['moduloValor/multiplo250'];
        }
    },
  methods: {
    incrementar() {
      this.$store.commit({ type: 'moduloValor/incrementar', value: 20 });
    }
  }
};
</script>