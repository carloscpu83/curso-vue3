<template>
    <tarjeta>
    <h4>Menu de la aplicacion</h4>
    <boton-menu-app @click="$emit('obtener-seccion','seccion-recursos')"
      >Recursos</boton-menu-app
    >
    <boton-menu-app @click="$emit('obtener-seccion','seccion-otros')"
      >Otras cosas</boton-menu-app
    >
  </tarjeta>
</template>

<script>
import BotonMenuApp from '../UI/Boton.vue';
export default {
    components: {
        'boton-menu-app': BotonMenuApp
    },
    emits:['obtener-seccion']
}
</script>