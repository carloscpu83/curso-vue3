<template>
    <div>
        <h2>{{nombre}}</h2>
        <h3>{{edad}}</h3>
    </div>
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
            default: function(value){
                if (value === "" || value === 0){
                    value = 99;
                }
            }
        },
    }
}
</script>