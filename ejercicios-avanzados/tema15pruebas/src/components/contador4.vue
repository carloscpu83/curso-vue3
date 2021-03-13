<template>
<h4>Contador4 (Real y asincrono)(Suma 5): {{ valor }}</h4>
  <input
    type="button"
    value="Incrementar desde el componente contador 4"
    @click="incrementar5"
  />
</template>

<script>
export default {
    computed:{
        valor(){
            return this.$store.getters['moduloValor/getValor'];
        }
    },
  methods: {
    incrementar5() {
      this.$store.dispatch({ type: 'moduloSegundos/incrementoAsincrono' , segundos: 1});
    }
  }
};
</script>