<template>
  <section><user-auth></user-auth></section>
  <section v-if="$store.getters['moduloSegundos/getLogueado'] === true">
    <contador></contador>
    <contador2></contador2>
    <contador3></contador3>
    <contador4></contador4>
    <contador5></contador5>
    <slot></slot>
  </section>
</template>

<script>
import contador from './contador.vue';
import contador2 from './contador2.vue';
import contador3 from './contador3.vue';
import contador4 from './contador4.vue';
import contador5 from './contador5.vue';
import UserAuth from './UserAuth.vue';
export default {
  components: {
    contador: contador,
    contador2: contador2,
    contador3: contador3,
    contador4: contador4,
    contador5: contador5,
    UserAuth
  },
  props:{
    title: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>
