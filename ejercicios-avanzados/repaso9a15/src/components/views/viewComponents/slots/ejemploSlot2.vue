<template>
  <slotBaseBis>
    <template v-slot:titulo>
      <h3>Prueba Slot con alcance</h3>
    </template>
    <template v-slot:cuerpo="fila">
      <p>El id es {{fila.id}} con nombre {{fila.nombre}} <input type="button" @click="eliminar(fila.id)" value="borrar" /></p>
    </template>
  </slotBaseBis>
</template>

<script>
import slotBaseBis from "./slotBaseBis.vue";
export default {
  provide() {
    return {
      valores: this.valores,
    };
  },
  data() {
    return {
      valores: [
        { id: 10, nombre: "n1", apellido: "a1" },
        { id: 9, nombre: "n2", apellido: "a2" },
        { id: 8, nombre: "n3", apellido: "a3" },
      ],
    };
  },
  components: {
    'slotBaseBis': slotBaseBis
  },
  methods:{
      eliminar(idx){
          let indice = this.valores.findIndex((nodo) => nodo.id === idx);
          this.valores.splice(indice, 1);
      }
  }
};

</script>