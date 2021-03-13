<template>
  <slotruta>
    <template v-slot:titulo
      ><h3>
        Titulo de buenas tardes para la pantalla multi componente
      </h3>
    </template>
    <template v-slot:cuerpo>
     <router-link :to="rutaComputada">Navegar hacia el multicomponente</router-link>
     <router-view></router-view>
    </template>
  </slotruta>
</template>

<script>
import slotruta from "./slotRuta.vue";
export default {
  components: {
    slotruta: slotruta,
  },
  computed:{
      rutaComputada(){
          return {name: 'multicomponenteHijo'}
      }
  }
};
</script>
