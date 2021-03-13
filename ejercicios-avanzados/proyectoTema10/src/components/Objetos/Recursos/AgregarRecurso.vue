<template>
    <dialogo-app v-if="datoValido === false" titulo="Error" @cerrar-cuadro="cerrarDialogo">
        <template v-slot:cuerpo>
            <p>Es necesario rellenar todos los campos</p>
        </template>
        <template v-slot:acciones>
            <boton-formulario @click="cerrarDialogo">Cerrar</boton-formulario>
        </template>
    </dialogo-app>
  <tarjeta>
    <h4>Agregar recurso</h4>
    <form id="formulario" name="formulario" @submit.prevent="agregarRecurso">
      <div class="form-control">
        <label>Titulo</label>
        <input id="titulo" name="titulo" type="text" ref="titulo" />
      </div>
      <div class="form-control">
        <label>Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          ref="descripcion"
        ></textarea>
      </div>
      <div class="form-control">
        <label>Link</label>
        <input id="link" name="link" type="url" ref="link" />
      </div>
      <boton-formulario type="submit" onsubmit="agregarRecurso"
        >Agregar</boton-formulario
      >
    </form>
  </tarjeta>
</template>

<script>
import BotonFormulario from '../../UI/Boton.vue';

export default {
  components: {
    'boton-formulario': BotonFormulario
  },
  data() {
    return {
      datoValido: true
    };
  },
  inject: ['fuentesAlmacenadas'],
  methods: {
    agregarRecurso() {
        debugger;
      this.datoValido = this.validarDatos();

      if (this.datoValido === true) {
        this.fuentesAlmacenadas.push({
          id: new Date().getUTCMilliseconds(),
          titulo: this.$refs.titulo.value,
          descripcion: this.$refs.descripcion.value,
          link: this.$refs.link.value
        });
      } 
    },
    validarDatos() {
      return this.$refs.titulo.value !== '' &&
        this.$refs.descripcion.value !== '' &&
        this.$refs.link.value !== ''
        ? true
        : false;
    },
    cerrarDialogo(){
        this.datoValido = true;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
