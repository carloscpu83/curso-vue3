<template>
  <active-user 
    v-for="dato in datos"
    :key="dato.nombre"
    :nombre="dato.nombre"
    :edad="dato.edad"
    ></active-user>
    <user-data
        @anyadir-persona="anyadir"
    ></user-data>
</template>

<script>
export default {
  data() {
    return {
      datos: [
        { nombre: "carlos", edad: 12 },
        { nombre: "piki", edad: 4 },
      ],
    };
  },
  methods:{
      anyadir(v_nombre,v_edad){
          let valor = {nombre: v_nombre, edad: v_edad};
          this.datos.push(valor);
      }
  }
};
</script>
