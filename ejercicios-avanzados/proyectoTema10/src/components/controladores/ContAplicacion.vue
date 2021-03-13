<template>
  <menu-aplicacion @obtener-seccion="volcarSeccion"></menu-aplicacion>
  <component :is="componenteSeccion"></component>
</template>

<script>
import MenuAplicacion from '../capas/MenuAplicacion.vue';

import SeccionRecursos from './ContRecursos.vue';
import SeccionOtros from './ContOtros.vue';



export default {
  components: {
    'menu-aplicacion': MenuAplicacion,
    'seccion-recursos': SeccionRecursos,
    'seccion-otros':SeccionOtros
  },
  data(){
    return {
      componenteSeccion: ''
    };
  },
  methods:{
    volcarSeccion(seccion){
      this.componenteSeccion = seccion;
    }
  }
};
</script>
