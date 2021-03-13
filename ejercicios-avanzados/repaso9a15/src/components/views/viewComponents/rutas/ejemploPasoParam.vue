<template>
  <p v-if="param === '' || param === null">Por favor agregue a la URL un parámetro en caso de no haberlo hecho ya.</p>
  <p v-else>El parámetro recibido es: {{param}}</p>
</template>

<script>
export default {
  data() {
    return {
      param: "",
    };
  },
  mounted() {
      this.param = this.$route.params.miparam;
  },
};
</script>
