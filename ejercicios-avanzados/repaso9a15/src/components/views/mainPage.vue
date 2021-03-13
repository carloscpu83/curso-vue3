<template>
    <ul>
        <li><input type="button" value="Slots" @click="cargarSlots"/></li>
        <li><input type="button" value="Formularios" @click="cargarFormularios"/></li>
        <li><input type="button" value="Peticiones HTTP" @click="cargarPeticiones"/></li>
        <li><input type="button" value="Rutas" @click="cargarRutas"/></li>
    </ul>
</template>

<script>
export default {
    methods:{
        cargarSlots(){
            this.$router.push({name: 'slots'})
        },
        cargarFormularios(){
            this.$router.push({name: 'formularios'})
        },
        cargarPeticiones(){
            this.$router.push({name: 'peticiones'})
        },
        cargarRutas(){
            this.$router.push({name: 'rutas'})
        }
    }
}
</script>

<style scoped>
li {
    list-style:none;
}

</style>