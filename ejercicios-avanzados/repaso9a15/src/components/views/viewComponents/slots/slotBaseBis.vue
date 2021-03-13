<template>
  <section>
    <slot name="titulo">Sin valor para el titulo</slot>
    <p v-for="val in valores" :key="val.id">
      <slot
        name="cuerpo"
        :id="val.id"
        :nombre="val.nombre"
        :apellido="val.apellido"
      >
        Sin valor para el cuerpo
      </slot>
    </p>
    <slot name="pie">Sin valor para el pie</slot>
  </section>
</template>

<script>
export default {
    inject:['valores'],
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
