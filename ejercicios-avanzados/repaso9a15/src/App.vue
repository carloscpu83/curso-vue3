<template>
  <p><img alt="Vue logo" src="./assets/logo.png" /></p>
  <main><router-view></router-view></main>
  <footer><router-view name="footer"></router-view></footer>
</template>

<script>
export default {};
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

.activo {
  color: green;
}
</style>
