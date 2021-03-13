<template>
    <li>
        <h2>{{contacto.nombre}}</h2>
        <button @click="cambioMostrarDetalle()">Motrar detalles</button>
        <ul v-if="mostrarDetalle === true">
            <li>{{contacto.apellido}}</li>
            <li>{{contacto.telefono}}</li>
            <li>{{contacto.sexo}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data(){
        return {
            mostrarDetalle: false,
            contacto: {
                nombre: 'Carlos',
                apellido: 'Carpintero',
                telefono: '123456789',
                sexo: 'Hombre'
            }
        };
    },
    methods:{
        cambioMostrarDetalle(){
            this.mostrarDetalle = !this.mostrarDetalle;
        }
    }
}
</script>