<template>
  <menu-recursos @obtener-pantalla="volcarPantalla"></menu-recursos>
  <keep-alive>
  <component :is="pantalla"></component>
  </keep-alive>
</template>

<script>
import MenuRecursos from '../Objetos/Recursos/capas/MenuRecursos.vue';

import FuentesAlmacenadas from '../Objetos/Recursos/FuentesAlmacenadas.vue';
import AgregarRecurso from '../Objetos/Recursos/AgregarRecurso.vue';
export default {
  components: {
    'menu-recursos': MenuRecursos,
    'fuentes-almacenadas': FuentesAlmacenadas,
    'agregar-recurso': AgregarRecurso
  },
  data() {
    return {
      pantalla: '',
      fuentesAlmacenadas: [
        {
          id: 'google',
          titulo: 'Google',
          descripcion: 'Buscador web',
          link: 'http://www.google.es'
        },
        {
          id: 'amazon',
          titulo: 'Amazon',
          descripcion: 'Compras online',
          link: 'http://www.amazon.es'
        }
      ]
    };
  },
  provide() {
    return {
      fuentesAlmacenadas: this.fuentesAlmacenadas
    };
  },
  methods: {
    volcarPantalla(pantalla) {
      this.pantalla = pantalla;
    }
  }
};
</script>
