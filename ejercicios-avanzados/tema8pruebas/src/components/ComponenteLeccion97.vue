<template>
    <input type="button" value="Mostrar formulario insercion" ref="btnFormulario" @click="visualizarFormulario">
    <section v-show="mostrar === true">
        <div>
            <div>Nombre: <input type="text" v-model="nombre"></div>
            <div>Años: <input type="number" v-model="anyos"></div>
            <div><input type="checkbox" v-model="sexoHombre">Hombre</div>
            <div><input type="button" value="Agregar datos" @click.prevent="enviarDatos"></div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            mostrar: false,
            nombre: '',
            anyos: '',
            sexoHombre: false
        };
    },
    emits:[
        'enviar-datos'
    ],
    methods:{
        limpiarformulario(){
            let txt = this.mostrar === true ? 'Mostrar formulario insercion' : 'Ocultar formulario insercion';
            this.$refs.btnFormulario.value = txt;

            this.nombre = "";
            this.anyos = "";
            this.sexoHombre =false;
        },
        visualizarFormulario(){
            this.limpiarformulario();

            this.mostrar = !this.mostrar ;
        },
        enviarDatos(){
            this.$emit('enviar-datos',this.nombre, this.anyos, this.sexoHombre);
        }
    }
}
</script>