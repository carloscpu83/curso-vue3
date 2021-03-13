<template>
    <h3>Soy el componente dinamico 2</h3>
    <input type="text" ref="mimensaje">
    <input type="button" value="Validar" @click="validar">
    <error v-if="valido"></error>
</template>

<script>
export default {
    data(){
        return {
            valido: false
        };
    },
    methods:{
        validar(){
            this.valido = this.$refs.mimensaje.value === '' ? false : true;
        }
    }
}
</script>ipt<