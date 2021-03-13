<template>
  <div>Mi nombre completo es {{ nombre }} y tengo {{ edad }} años.</div>
</template>

<script>
import { inject} from 'vue';
export default {
    setup(){
        let nombre = inject('nombre');
        let edad = inject('edad');

        return {nombre, edad};
    }
};
</script>