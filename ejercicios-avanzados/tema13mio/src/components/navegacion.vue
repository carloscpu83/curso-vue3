<template>
  <ul>
    <li>
      <router-link to="/componente1">Componente 1</router-link>
    </li>
    <li><router-link :to="rutaDinamica">Componente 2</router-link></li>
    <li><router-link :to="rutaPropiedad">Componente 3</router-link></li>
    <li>
      <router-link to="/componente4"
        >Componente 4 (Enlace a pagina de error)</router-link
      >
    </li>
    <li><router-link to="/componente5/a/b">Componente 5</router-link></li>
    <li><router-link :to="comp6">Componente 6 (objeto + query parameters)</router-link></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      rutaDinamica: "/componente2/(paramDinamico)",
      rutaPropiedad: "/componente3/miPropiedad",
    };
  },
  computed: {
    comp6(){
      return {name: 'c6', params: {miparam: 'parametro pasado por propiedad'}, query: {extra: 'si'}};
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}

a:hover,
a:active,
a.activo {
  background-color: seagreen;
  color: aliceblue;
}
</style>
