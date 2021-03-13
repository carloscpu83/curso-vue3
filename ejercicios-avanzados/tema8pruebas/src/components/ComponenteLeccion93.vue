<template>
    <div>{{nombre}}, {{edad}} y {{esHombre}}</div>
</template>

<script>
export default {
    props:{
        nombre:{
            type: String,
            required: true
        },
        edad:{
            type: Number,
            required: true,
            validator: function(valor){
                return valor <= 0 ? false : true;
            }
        },
        esHombre:{
            type: Boolean,
            required: true,
            default: function(value){
                return value === true ? 'Hombre' : 'Mujer';
            }
        }
    }
}
</script>