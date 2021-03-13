<template>
  <section>
    <h2>{{ producto.title }}</h2>
    <h3>${{ producto.price }}</h3>
    <p>{{ producto.description }}</p>
    <p><router-link to="/products/p2">Producto 2</router-link></p>
  </section>
</template>

<script>
import { inject, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    pid: {
      type: String,
      required: true,
    },
  },
  setup() {
    const productos = inject("products");
    const route = useRoute();

    const producto = computed(function() {
      return productos.value.find((pro) => pro.id === route.params.pid);
    });

    const title = producto.value.title;
    const price = producto.value.price;
    const description = producto.value.description;

    return { title, price, description, producto };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
