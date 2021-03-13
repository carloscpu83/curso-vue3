<template>
  <p>
    <label for="txt">Valor: </label>
    <input type="text" id="txt" name="txt" v-model="valor" />
  </p>
  <input type="button" value="Agregar valor" @click="agregar" />
  <p v-if="hasError">{{ error }}</p>
</template>

<script>
export default {
  data() {
    return {
      valor: "",
      hasError: false,
      error: "",
    };
  },
  methods: {
    agregar() {
      fetch("https://bdvue-5d091-default-rtdb.firebaseio.com/almacen.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ valor: this.valor }),
      })
        .then((data) => {
          if (data.ok === false) {
            throw new Error(data.statusText);
          }
        })
        .catch((error) => {
          this.hasError = true;
          this.error = error.message;
        })
        .finally(() => {
          this.valor = "";
        });
    },
  },
};
</script>

<style scoped>
p.clerror {
  color: brown;
}
</style>
