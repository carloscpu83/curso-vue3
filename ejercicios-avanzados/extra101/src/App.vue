<template>
<c-abuelo
:key="abuelo.id"
:id="abuelo.id"
:nombre="abuelo.nombre"
></c-abuelo>
</template>

<script>
export default {
    data(){
      return {
        abuelo: {id:1, nombre:"Eufrasio"},
        padre: {id:3, nombre:"Ataulfo"},
        hijos:[
          {id:4, nombre:"Piki"},
          {id:5, nombre:"Raskina"}
        ]
      };
    
  },
  provide(){
    return {
      padre: this.padre,
      mostrarParentesco: this.mostrarParentesco,
      hijos: this.hijos
    };
  },
  methods:{
    mostrarParentesco(valor){
      alert('Soy el ' + valor);
    }
  }
}
</script>

<style>

</style>
