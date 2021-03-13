<template>
  <li>
    <div>{{ nombre }} {{ apellido }} {{edadAux}}</div>
    <input type="button" value="Ejecutar" @click="mostrarEdad()" />
    <input type="button" value="Incrementar" @click="incrementar()" />
    <input type="button" value="Decrementar" @click="decrementar()" />
  </li>
</template>

<script>
export default {
  data() {
    return {
        edadAux: this.edad
    };
  },
  props: ["nombre", "apellido", "edad"],
  methods: {
    mostrarEdad() {
      if (this.edadAux > 10) {
        alert("Mayor que 10");
      }else if(this.edadAux === 10){
          alert("Igual que 10");
      } else {
        alert("Menor que 10");
      }
    },
    incrementar() {
        this.edadAux++;
        },
    decrementar() {
        this.edadAux--;
    }
  }
};
</script>
