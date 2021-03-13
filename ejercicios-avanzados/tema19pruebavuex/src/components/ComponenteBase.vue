<template>
  <div>El valor es: {{ valor }}</div>
  <div><input type="button" value="Incrementar" @click="inc" /></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    let valor = computed(function() {
      return store.getters.valor;
    });

    const inc = function() {
      store.dispatch({ type: "incrementar" });
    };

    return {
      valor,
      inc,
    };
  },
};
</script>
