<template>
  <h2>Componente del ciclo de vida</h2>
  <div>Por favor revise la consola</div>
  <div>
    {{ valor }} <input type="button" value="Incrementar" @click="inc" />
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';
export default {
  setup() {
    let valor = ref(5);

    let inc = function() {
      valor.value++;
    };

    onBeforeMount(() => console.log('onBeforeMount'));
    onMounted(() => console.log('onMounted'));
    onBeforeUpdate(() => console.log('onBeforeUpdate'));
    onUpdated(() => console.log('onUpdated'));

    return {
      valor,
      inc
    };
  }
};
</script>
