<template>
    <input type="button" value="Login" @click="cambiarEstado" v-if="$store.getters.getLogueado === false">
    <input type="button" value="Log Out" @click="cambiarEstado" v-else/> 
</template>

<script>
export default {
    methods:{
        cambiarEstado(){
            this.$store.dispatch({type: 'moduloSegundos/cambiarEstadoLogueado'});
        }
    }
}
</script>