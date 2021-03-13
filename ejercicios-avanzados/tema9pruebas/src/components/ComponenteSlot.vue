<template>
  <section>
    <div id="cabecera">
      <slot name="cabecera"></slot>
    </div>
    <slot></slot>
    <slot name="sinvalor"><h1>SIN VALOR</h1></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div #cabecera{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
