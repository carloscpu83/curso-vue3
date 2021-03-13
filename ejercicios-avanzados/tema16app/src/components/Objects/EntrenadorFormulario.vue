<template>
  <base-dialog>
    <template v-slot:default
      ><p>{{ error }}</p></template
    >
  </base-dialog>
  <section>
    <form @submit.prevent="agregarEntrenador">
      <div class="form-control" :class="{ invalid: nombre.valid === false }">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          v-model.trim="nombre.value"
          @blur="limpiarValidacion('nombre')"
        />
        <p v-if="nombre.valid === false">Nombre vacio</p>
      </div>
      <div class="form-control" :class="{ invalid: apellido.valid === false }">
        <label for="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          v-model.trim="apellido.value"
          @blur="limpiarValidacion('apellido')"
        />
        <p v-if="apellido.valid === false">Apellido vacio</p>
      </div>
      <div
        class="form-control"
        :class="{ invalid: descripcion.valid === false }"
      >
        <label for="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          v-model.trim="descripcion.value"
          rows="5"
          @blur="limpiarValidacion('descripcion')"
        ></textarea>
        <p v-if="descripcion.valid === false">Descripcion vacia</p>
      </div>
      <div class="form-control" :class="{ invalid: tasa.valid === false }">
        <label for="tasa">Tasa</label>
        <input
          type="number"
          id="tasa"
          v-model.number="tasa.value"
          @blur="limpiarValidacion('tasa')"
        />
        <p v-if="tasa.valid === false">Tasa vacia o menor que cero</p>
      </div>
      <div class="form-control" :class="{ invalid: areas.valid === false }">
        <h3>Áreas</h3>
        <input
          type="checkbox"
          id="frontend"
          name="areas"
          value="frontend"
          v-model="areas.value"
          @blur="limpiarValidacion('areas')"
        />
        <label for="frontend">Frontend</label>
        <input
          type="checkbox"
          id="backend"
          name="areas"
          value="backend"
          v-model="areas.value"
          @blur="limpiarValidacion('areas')"
        />
        <label for="backend">Backend</label>
        <input
          type="checkbox"
          id="career"
          name="areas"
          value="career"
          v-model="areas.value"
          @blur="limpiarValidacion('areas')"
        />
        <label for="career">Career</label>
        <p v-if="areas.valid === false">Áreas vacias</p>
      </div>
      <base-button isButton @click="crearEntrenador">Registrar</base-button>
    </form>
  </section>
</template>

<script>
import BaseButton from "../UI/Objects/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      error: null,
      formularioValido: false,
      nombre: {
        value: "",
        valid: false,
      },
      apellido: {
        value: "",
        valid: false,
      },
      descripcion: {
        value: "",
        valid: false,
      },
      tasa: {
        value: null,
        valid: false,
      },
      areas: {
        value: [],
        valid: false,
      },
    };
  },
  methods: {
    validarDatos() {
      if (this.nombre !== "") {
        this.nombre.valid = true;
      }
      if (this.apellido !== "") {
        this.apellido.valid = true;
      }
      if (this.descripcion !== "") {
        this.descripcion.valid = true;
      }
      if (this.tasa && this.tasa >= 0) {
        this.tasa.valid = true;
      }
      if (this.areas.length > 0) {
        this.areas.valid = true;
      }

      if (
        this.nombre.valid === true &&
        this.apellido.valid === true &&
        this.descripcion.valid === true &&
        this.tasa.valid === true &&
        this.areas.valid === true
      ) {
        this.formularioValido = true;
      }
    },
    limpiarValidacion(controlId) {
      this[controlId].valid = true;
    },
    crearEntrenador() {
      return {
        firstName: this.nombre.value,
        lastName: this.apellido.value,
        description: this.descripcion.value,
        hourlyRate: this.tasa.value,
        areas: this.areas.value,
      };
    },
    agregarEntrenador() {
      try {
        this.validarDatos();

        if (this.formularioValido === true) {
          let nuevoEntrenador = this.crearEntrenador();
          this.$store.dispatch({
            type: "mod_entrenadores/addEntrenador",
            valor: nuevoEntrenador,
          });
          this.$router.push({ name: "entrenadoresListar" });
        }
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
