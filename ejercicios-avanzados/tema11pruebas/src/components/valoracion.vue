<template>
  <p>Introduzca una valoración de la aplicacion:</p>
  <div>
    <input type="button" value="Baja" @click="volcarValor('baja')" />
    <input type="button" value="Media" @click="volcarValor('media')" />
    <input type="button" value="Alta" @click="volcarValor('alta')" />
  </div>
  <div
    class="cuadrado"
    :class="[
      { rojo: modelValue === 'bajo' },
      { amarillo: modelValue === 'media' },
      { verde: modelValue === 'alta' },
    ]"
  ></div>
</template>

<script>
export default {
  props:['modelValue'],
  emits:['update:modelValue'],
  beforeMount(){
    this.volcarValor(this.modelValue);
  },
  methods: {
    volcarValor(valor) {
      this.$emit('update:modelValue', valor);
    },
  },
};
</script>

<style scoped>
.cuadrado {
  width: 50px;
  height: 50px;
}
.rojo {
  background: red;
}
.amarillo {
  background-color: yellow;
}
.verde {
  background-color: green;
}
</style>
