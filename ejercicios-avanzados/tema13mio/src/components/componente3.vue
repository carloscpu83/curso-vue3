<template>
    <h1>Bienvenido al componente 3</h1>
    <input type="button" value="Go Back" @click="goBack"/>
</template>

<script>
export default {
    props:{
        valorPropiedad:{
            type: String,
            required: true
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        }
    },
    created(){
        alert('El valor recibido es: ' + this.valorPropiedad);
        console.log(this.$router);
    }
}
</script>