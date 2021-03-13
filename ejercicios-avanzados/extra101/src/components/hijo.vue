<template>
    <div>
        <h6>
            Mi id es: {{id}}, me llamo {{nombre}} y pulsa para conocer un dato oculto
            <input type="button" value="Mostrar" @click="mostrarParentesco(parentesco)">
        </h6>
    </div>
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
        }
    },
    inject: ["mostrarParentesco"],
    data(){
        return {
            parentesco: 'hijo'
        };
    }
}
</script>