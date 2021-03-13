<template>
  <form @submit.prevent="almacenarDatos">
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="mensaje">Mensaje</label>
      <textarea id="mensaje" rows="5" v-model="mensaje"></textarea>
    </div>
    <div class="actions">
      <base-button isButton>Enviar mensaje</base-button>
    </div>
    <p v-if="valido === false" class="errors">Errores en el formulario</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      mensaje: "",
      valido: true,
    };
  },
  props:{
    id:{
      type: String,
      required: true
    }
  },
  methods: {
    crearDato(){
      return {
        email: this.email, 
        mensaje: this.mensaje
      };
    },
    formularioValido() {
      this.valido =
        this.email.includes("@") && this.email !== "" && this.mensaje !== "";
    },
    almacenarDatos() {
      this.formularioValido();
      if(this.valido){
        this.$store.dispatch({type: 'mod_peticiones/agregarPeticion', valor: this.crearDato()});
        this.$router.replace({name: 'entrenadoresListar'});
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
