<template>
  <p v-for="item in lista" :key="item.valor">-> {{ item.valor }}</p>
</template>

<script>
export default {
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    getData() {
      fetch("https://bdvue-5d091-default-rtdb.firebaseio.com/almacen.json", {
        method: "GET",
      })
        .then((respuesta) => {
          if (respuesta.ok) {
            return respuesta.json();
          }
        })
        .then((data) => {
          for (let id in data) {
            this.lista.push({ valor: data[id].valor });
          }
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
