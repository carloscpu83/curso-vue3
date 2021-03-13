<template>
    <div>
        <h1>
            Mi id es: {{id}}, me llamo {{nombre}} y pulsa para conocer un dato oculto
            <input type="button" value="Mostrar" @click="mostrarParentesco(parentesco)">
        </h1>
        <c-padre
        :key="padre.id"
        :id="padre.id"
        :nombre="padre.nombre"
        ></c-padre>
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
    inject: ["mostrarParentesco","padre"],
    data(){
        return {
            parentesco: 'abuelo'
        };
    }
}
</script>