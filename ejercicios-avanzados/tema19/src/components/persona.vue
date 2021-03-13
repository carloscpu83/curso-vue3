<template>
  <div>Mi nombre completo es {{ nombreCompleto }} y tengo {{ edad }} años.</div>
</template>

<script>
import { computed } from 'vue';
export default {
    props:{
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        }
    },
    setup(props){
        let nombreCompleto = computed(function(){
            return props.nombre + ' ' + props.apellido;
        });

        return {nombreCompleto};
    }
};
</script>
