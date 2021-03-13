<template>
  <h1>Bienvenido al componente 6</h1>
  <section>
   El parametro obtenido es ({{ miparam }}) y el valor del extra es ({{$route.query.extra}}).
  </section>
</template>

<script>
export default {
    props: ['miparam'],

};
</script>