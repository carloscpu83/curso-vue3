<template>
  <h1>Bienvenido al componente 5</h1>
  <section>
    <p>Mi id es : {{ id }} y mi nombre: {{ nombre }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      nombre: "",
    };
  },
  created(){
      this.id = this.$route.params.miid;
      this.nombre = this.$route.params.minombre;
  }
};
</script>
