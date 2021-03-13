<template>
    <slotFormulario>
        <template v-slot:titulo>
            <h3>Prueba peticion HTTP 1</h3>
        </template>
        <template v-slot:cuerpo>
            <p><router-link to="/peticiones/peticion1/agregar">Agregar</router-link></p>
            <p><router-link to="/peticiones/peticion1/ver">Ver</router-link></p>
            <router-view></router-view>
        </template>
    </slotFormulario>
</template>

<script>
import slotFormulario from './slotFormulario.vue';
export default {
    components: {
        'slotFormulario': slotFormulario
    }
}
</script>