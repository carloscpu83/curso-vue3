<template>
  <componente-compuesto
  :personas="lista"
  @cambiar-flag-desde-compuesto="cambio"
  ></componente-compuesto>

  <componente-compuesto2
  @cambiar-flag-desde-compuesto="alertar"
  ></componente-compuesto2>
</template>

<script>
export default {
  data(){
      return {
          lista: [
              {id:1,nombre:'Carlos',edad:15,flagEdad:false},
              {id:2,nombre:'Carlos2',edad:16,flagEdad:false},
              {id:3,nombre:'Carlos3',edad:17,flagEdad:false},
          ],
          lista2: [
              {id:1,nombre:'Carlos',edad:15},
              {id:2,nombre:'Carlos2',edad:16},
              {id:3,nombre:'Carlos3',edad:17},
          ]
      };
  },
  provide(){
      return{
          personas: this.lista2
      };
  },
  methods:{
      cambio(idPersona){
          alert('Cambiando el mensaje desde el componente 2 para el elemento con id: ' + idPersona);
      },
      alertar(idPersona){
          alert('Cambiando el mensaje desde el componente 2 para el elemento con id:' + idPersona);
      }
  }
};
</script>

<style></style>
