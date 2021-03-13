<template>
    <section>
        <span>Mi nombre es : {{nombre}} </span>
        <span v-if="veredad === true"> - {{edad}} años.</span>
        <input type="button" value="Mostrar edad" @click="mostrarEdad">
        <br>
    </section>
</template>

<script>
export default {
    props:{
        id:{
            type: Number,
            required: true
        },
        nombre:{
            type: String,
            required: true
        },
        edad:{
            type: Number,
            required: true
        }
    },
    data(){
        return {
            veredad: false
        };
    },
    emits:['mostrar-edad-persona'],
    methods:{
        mostrarEdad(){
            this.veredad = !this.veredad;
            this.$emit('mostrar-edad-persona',this.id);
        }
    }
}
</script>