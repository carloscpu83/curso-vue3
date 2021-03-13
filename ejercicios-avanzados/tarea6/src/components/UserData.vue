<template>
    <div>
        <input type="text" v-model="nombre">
        <input type="number" v-model="edad">
        <input type="button" value="Insertar" @click="anyadirPersona">
    </div>
</template>

<script>
export default {
    data(){
        return {
            nombre: '',
            edad: 0
        };
    },
    emits: ['anyadir-persona'],
    methods:{
        anyadirPersona(){
            this.$emit('anyadir-persona', this.nombre, this.edad);
        }
    }
}
</script>