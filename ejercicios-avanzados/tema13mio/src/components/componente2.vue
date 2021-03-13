<template>
  <h1>Bienvenido al componente 2</h1>
  <input type="button" value="Go to Componente 3" @click="gotocomponente3" />
  <input type="button" value="Go Back" @click="goBack" />
  <input type="button" value="Go Forward" @click="goForward" />
  <p>
    <input type="text" v-model="paramcomputado" />
    <input type="button" value="Cambiar valor url" @click="cambiarRutaEstatica" />
  </p>
  <p>
      <router-link :to="cambiarRutaDinamicaNoFunciona">cambiar</router-link>
  </p>
  <p>(Estatico) El valor recibido mediante parametro en la url es : {{ miparametro }}</p>
  <p>(Dinamico) El valor recibido mediante parametro en la url es : {{ paramcomputado }}</p>
</template>

<script>
export default {
  data() {
    return {
      miparametro: "",
      paramcomputado: ''
    };
  },
  methods: {
    gotocomponente3() {
      this.$router.push({ path: "/componente3" });
    },
    goBack() {
      this.$router.back();
    },
    goForward() {
      // Para ejecutar este metodo previamente tengo que haber ejecutado un back desde otro componente
      this.$router.forward();
    },
    cambiarRutaEstatica(){
       this.$router.push({path: '/componente2/' + this.miparametro});
    }
  },
  created() {
    this.miparametro = this.$route.params.valor;
  },
  watch:{
      $route(){
          this.$router.push({path: this.cambiarRutaDinamicaNoFunciona});
      }
  },
  computed: {
      cambiarRutaDinamicaNoFunciona(){
       return'/componente2/' + this.paramcomputado;
    }
  }
};
</script>
