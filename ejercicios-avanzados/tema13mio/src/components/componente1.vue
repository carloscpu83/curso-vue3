<template>
    <h1>Bienvenido al componente 1</h1>
    <p><input type="button" value="Go to Componente 2" @click="gotocomponente2"/></p>
    <router-link to="/componente1/componente12">Ir al componente 12</router-link>
    <router-view></router-view>
</template>

<script>
export default {
    methods:{
        gotocomponente2(){
            this.$router.push({path: '/componente2/parammmmm'});
            
        }
    }
}
</script>