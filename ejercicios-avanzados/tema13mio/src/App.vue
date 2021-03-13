<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <mimenu></mimenu>
  <router-view></router-view>
  <p><router-view  name="pie"></router-view></p>
</template>

<script>
import navegacion from './components/navegacion.vue';
export default {
  components:{
      'mimenu': navegacion
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
