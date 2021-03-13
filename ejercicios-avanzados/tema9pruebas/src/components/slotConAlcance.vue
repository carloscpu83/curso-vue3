<template>
    <ul>
        <li v-for="item in lista" :key="item.id">
            <!--<slot name="porDefecto">Mi id es {{item.id}} y me llamo {{item.nombre}} {{item.apellido}}</slot>-->
            <slot name="porDefecto" :id="item.id" :nombre="item.nombre"></slot>
            <slot name="valordepega">No tengo valor</slot>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            lista: [
                {id:1, nombre: 'carlos', apellido: 'apellido1'},
                {id:2, nombre: 'carlos2', apellido: 'apellido2'},
                {id:3, nombre: 'carlos3', apellido: 'apellido3'}
            ]
        };
    }
}
</script>