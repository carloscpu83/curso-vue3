<template>
    <input type="button" value="Atras" @click="atras" />
    <input type="button" value="Principal" @click="principal" />
    <input type="button" value="Adelante" @click="adelante" />
</template>

<script>
export default {
    methods:{
        principal(){
            this.$router.push({path: '/'});
        },
        atras(){
            this.$router.go(-1);
        },
        adelante(){
            this.$router.forward();
        },
    }
}
</script>