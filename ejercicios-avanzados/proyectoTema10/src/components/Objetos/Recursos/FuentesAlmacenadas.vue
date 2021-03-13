<template>
  <ul>
    <fuente-almacenada @eliminar="eliminarElemento"
      v-for="fuente in fuentesAlmacenadas"
      :key="fuente.id"
      :id="fuente.id"
      :titulo="fuente.titulo"
      :descripcion="fuente.descripcion"
      :link="fuente.link"
    ></fuente-almacenada>
  </ul>
</template>

<script>
import FuenteAlmacenada from './FuenteAlmacenada.vue';
export default {
  components: { 'fuente-almacenada': FuenteAlmacenada },
  inject:['fuentesAlmacenadas'],
  methods:{
    eliminarElemento(id){
      let indice = this.fuentesAlmacenadas.findIndex(
        function(nodo){
          if(nodo.id === id){
            return nodo;
          }
        }
      );

      this.fuentesAlmacenadas.splice(indice,1);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
