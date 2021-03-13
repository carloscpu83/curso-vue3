<template>
  <h4>Contador5 (Mapper Helper) (Aumentado en 100) (Suma 10): {{ s100 }}</h4>
  <input
    type="button"
    value="Incrementar desde el componente contador 2"
    @click="incrementar"
  />
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('moduloValor',{s100: 'sumar100'}),
    valor() {
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
