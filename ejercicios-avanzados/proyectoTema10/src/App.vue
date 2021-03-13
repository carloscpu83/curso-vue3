<template>
  <cabecera-aplicacion>Recursos en la red</cabecera-aplicacion>
  <cont-aplicacion></cont-aplicacion>
  <pie-aplicacion>Pagina diseñada por Carlos</pie-aplicacion>
</template>

<script>
import CabeceraAplicacion from './components/capas/Cabecera.vue';
import PieAplicacion from './components/capas/Pie.vue';

import ContAplicacion from './components/controladores/ContAplicacion.vue';
export default {
  components: {
    'cabecera-aplicacion': CabeceraAplicacion,
    'pie-aplicacion': PieAplicacion,
    'cont-aplicacion': ContAplicacion
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
