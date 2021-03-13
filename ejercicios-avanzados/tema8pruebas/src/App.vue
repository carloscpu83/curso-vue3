<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="cuadrado">
    <contacto-persona
      nombre="Carlos"
      apellido="Carpintero"
      edad="9"
    ></contacto-persona>
    <contacto-persona
      nombre="Roci"
      apellido="Moreno"
      edad="11"
    ></contacto-persona>
  </div>
  <div class="cuadrado">
    <componente-leccion91 dia="32" mes="1" anyo="2001"></componente-leccion91>
  </div>

  <div class="cuadrado">
    <componente-leccion93
      v-for="dato in datos"
      :key="dato.nombre"
      :nombre="dato.nombre"
      :edad="dato.edad"
      :esHombre="dato.esHombre"
    ></componente-leccion93>
  </div>

  <div class="cuadrado">
    <componente-leccion97 @enviar-datos="enviarDatos"></componente-leccion97>
    <componente-leccion94
      v-for="dato in datos"
      :key="dato.nombre"
      :nombre="dato.nombre"
      :edad="dato.edad"
      :esHombre="dato.esHombre"
      @cambiar-sexo="cambiarSexo"
      @incrementar-edad="incrementarEdad"
    ></componente-leccion94>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datos: [
        { nombre: "Carlos", edad: 17, esHombre: true },
        { nombre: "Carlos2", edad: 18, esHombre: true },
        { nombre: "Roci", edad: 2, esHombre: false },
        { nombre: "Sasa", edad: 11, esHombre: false },
        { nombre: "Piki", edad: 20, esHombre: true },
      ],
    };
  },
  methods: {
    cambiarSexo(nombre) {
      let dato = this.datos.find(function(nodo) {
        if (nodo.nombre === nombre) {
          return nodo;
        }
      });
      dato.esHombre = !dato.esHombre;
    },
    incrementarEdad(nombre){
      let dato = this.datos.find(function(nodo) {
        if (nodo.nombre === nombre) {
          return nodo;
        }
      });
      dato.edad++;
    },
    enviarDatos(v_nombre, v_edad, v_hombre){
      let objDato = {
        nombre: v_nombre, edad: v_edad, esHombre: v_hombre
      }

      this.datos.push(objDato);
    }
  }
};
</script>

<style>
.cuadrado {
  border: 1px solid black;
  margin-bottom: 25px;
}
</style>
