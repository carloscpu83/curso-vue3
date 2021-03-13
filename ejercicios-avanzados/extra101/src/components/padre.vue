<template>
    <div>
        <h3>
            Mi id es: {{id}}, me llamo {{nombre}} y pulsa para conocer un dato oculto
            <input type="button" value="Mostrar" @click="mostrarParentesco(parentesco)">
        </h3>
    </div>
    <c-hijo
        v-for="hijo in hijos"
        :key="hijo.id"
        :id="hijo.id"
        :nombre="hijo.nombre"
    ></c-hijo>
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
    inject: ["mostrarParentesco","hijos"],
    data(){
        return {
            parentesco: 'padre'
        };
    }
}
</script>