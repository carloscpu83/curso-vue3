<template>
    <div><span>{{dia}}</span>-<span>{{mes}}</span>-<span>{{anyo}}</span></div>
</template>

<script>
export default {
    props:{
        dia:{
            type: Number,
            required: true,
            default: 1,
            validator:function(value){
                return value > 0 && value < 32;
            }
        },
        mes:{
            type: Number,
            required: true,
            default: function(value){
                return value <= 0 ? 1 : (value > 12 ? 12 : value);
            }
        },
        anyo:{
            type: Number,
            required: false,
            default: 1999
        }
    }
}
</script>

<style>

</style>