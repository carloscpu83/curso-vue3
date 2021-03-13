<template>
  <slotFormulario>
    <template v-slot:titulo>
      <h3>Prueba formulario 1</h3>
    </template>
    <template v-slot:cuerpo>
      <form id="formulario" name="formulario" @submit.prevent="mostrarValores">
        <p>Campo de texto: <input type="text" v-model.trim="textoBasico" /></p>
        <p>
          Campo numérico: <input type="number" v-model.number="numBasico" />
        </p>
        <p>Check individual: <input type="checkbox" v-model="checkBasico" /></p>
        <p>
          Check Colectivo:
          <label for="val1">Valor 1: </label>
          <input
            type="checkbox"
            v-model="checkColectivo"
            id="val1"
            name="checkcol"
            value="val1"
          />
          <label for="val2">Valor 2: </label>
          <input
            type="checkbox"
            v-model="checkColectivo"
            id="val2"
            name="checkcol"
            value="val2"
          />
          <label for="val3">Valor 3: </label>
          <input
            type="checkbox"
            v-model="checkColectivo"
            id="val3"
            name="checkcol"
            value="val3"
          />
        </p>
        <p>
          <label for="rad1">Radio 1: </label>
          <input
            type="radio"
            name="radioCol"
            id="rad1"
            value="rad1"
            v-model="radioBut"
          />
          <label for="rad2">Radio 2: </label>
          <input
            type="radio"
            name="radioCol"
            id="rad2"
            value="rad2"
            v-model="radioBut"
          />
        </p>
        <input type="submit" value="Enviar" />
      </form>
      <input type="button" value="Control cadena" @click="cambiarControlCadena" />
      <input type="button" value="Control objeto" @click="cambiarControlObjeto" />
      <component :is="componente" v-model="resFormulario"></component>
    </template>
  </slotFormulario>
</template>

<script>
import slotFormulario from "./slotFormulario.vue";
import formularioResultadoStr from './formularioResultadoStr.vue';
import formularioResultadoObjeto from './formularioResultadoObjeto.vue';
export default {
  components: {
    'slotFormulario': slotFormulario,
    'formularioResultadoStr': formularioResultadoStr,
    'formularioResultadoObjeto': formularioResultadoObjeto
  },
  data() {
    return {
      textoBasico: "",
      numBasico: 0,
      checkBasico: null,
      checkColectivo: [],
      radioBut: null,
      componente: null,
      resFormulario: null
    };
  },
  methods: {
    validarForm() {
      if (this.textoBasico !== "" && this.numBasico > 0) {
        return true;
      } else {
        return false;
      }
    },
    mostrarValores() {
      if (this.validarForm()) {
        alert(this.crearValoresCadena());
      } else {
        alert("Errores en el formulario.");
      }
    },
    crearValoresCadena() {
      let cad = "";
      cad += "El valor del campo de texto es: " + this.textoBasico + ".\r\n";
      cad += "El valor del campo numérico es: " + this.numBasico + ".\r\n";
      cad +=
        "El check se encuentra: " +
        (this.checkBasico === true ? "activado" : "desactivado") +
        ".\r\n";
      if (this.checkColectivo.length > 0) {
        cad +=
          "Los checks colectivos " +
          this.checkColectivo.join(", ") +
          " se encuentran activos" +
          ".\r\n";
      }

      if (this.radioBut !== null) {
        cad += "El radibutton activo es: " + this.radioBut;
      }
      return cad;
    },
    cambiarControlCadena(){
      this.resFormulario = this.crearValoresCadena();
      this.componente = 'formularioResultadoStr';
    },
    cambiarControlObjeto(){
      this.resFormulario = {
        textoBasico: this.textoBasico,
        numBasico: this.numBasico,
        checkBasico: this.checkBasico,
        checkColectivo: this.checkColectivo,
        radioBut: this.radioBut
      };
      this.componente = 'formularioResultadoObjeto';
    }
  },
};
</script>
