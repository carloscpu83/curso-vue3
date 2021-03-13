<template>
    <tarjeta>
        <boton-menu @click="$emit('obtener-pantalla','fuentes-almacenadas')">Recursos almacenados</boton-menu>
        <boton-menu @click="$emit('obtener-pantalla','agregar-recurso')">Añadir recursos</boton-menu>
    </tarjeta>
</template>

<script>
import BotonMenu from '../../../UI/Boton.vue';
export default {
    components:{
        'boton-menu': BotonMenu
    }
}
</script>