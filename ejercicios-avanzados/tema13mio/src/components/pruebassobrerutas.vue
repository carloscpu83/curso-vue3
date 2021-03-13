<template>
  <h1>Bienvenido al componente de pruebas sobre rutas</h1>
  <p><span>Introduce una ruta correcta</span></p>
  <p><span>La ruta introducida es: {{$route.path}}</span></p>
  <p><router-link to="/">Vuelve a la pagina principal</router-link></p>
</template>

<script>
export default {

};
</script>

<style scoped>
span{
    color: red;
}
</style>