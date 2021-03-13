<template>
  <form @submit.prevent="recorerDatos">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="nombre" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="anyos" />
    </div>
    <div class="form-control">
      <label for="ageDays">Your Age (Days)</label>
      <input id="ageDays" name="ageDays" type="text" v-model.number="dias" />
    </div>
    <div class="form-control">
      <label for="ageWeek">Your Age (Weeks)</label>
      <input id="ageWeek" name="ageWeek" type="text" v-model.trim="semanas" />
    </div>
    <div class="form-control">
      <label for="validacion">Validacion de datos</label>
      <input
        id="validacion"
        name="validacion"
        type="text"
        v-model.trim="txtvalidacion"
        @blur="validar"
        :class="{ inputTextInvalido: txtvalido === false }"
      />
      <p v-if="txtvalido === false">Error, introduzca un valor para este elemento.</p>
    </div>
    <div class="form-control">
      <label for="selectorpordefecto">Seleccion por defecto</label>
      <select
        id="selectorpordefecto"
        name="selectorpordefecto"
        v-model="selectorpordefecto"
      >
        <option value="caso1">caso1</option>
        <option value="caso2">caso2</option>
        <option value="caso3">caso3</option>
      </select>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="selector">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>Check indiviadual (responde true/false)</h2>
      <div>
        <input id="pero" type="checkbox" v-model="checkboxIndividual" />
        <label for="perro">Perro</label>
      </div>
    </div>
    <div class="form-control">
      <h2>What are you interested in? (checkbox colectivo)</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="checkboxGrupo"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="checkboxGrupo"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="checkboxGrupo"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="radio"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="radio"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="radio"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <valoracion v-model="notaValoracion"></valoracion>
    </div>
    <div>
      <button type="submit">Save Data</button>
    </div>
  </form>
</template>

<script>
import Valoracion from './valoracion.vue';
export default {
  components: {
    'valoracion': Valoracion
  },
  data() {
    return {
      nombre: "",
      anyos: 0,
      dias: null,
      semanas: "",
      selectorpordefecto: "caso2",
      selector: null,
      checkboxIndividual: null,
      checkboxGrupo: [],
      radio: null,
      txtvalidacion: "",
      txtvalido: true,
      notaValoracion: 'alta'
    };
  },
  methods: {
    validar() {
      this.txtvalido = this.txtvalidacion === "" ? false : true;
    },
    recorerDatos() {
      // Nombre
      console.log("El nombre es: " + this.nombre);
      this.nombre = "";
      console.log("------------------------------");
      // Anyos
      console.log(this.anyos);
      this.anyos = null;
      console.log("------------------------------");
      // Dias
      console.log(this.dias);
      console.log(
        "Solamente funciona si lo introducido es un numero -> [33, 'Hola']"
      );
      this.dias = null;
      console.log("------------------------------");
      // Semanas
      console.log(this.semanas);
      console.log("------------------------------");
      // Selector por defecto
      this.selectorpordefecto = "caso2";
      console.log("------------------------------");
      // Selector
      console.log(this.selector);
      this.selector = null;
      console.log("------------------------------");
      //checkbox indiviadual
      console.log(
        this.checkboxIndividual === true
          ? "Es un perro"
          : "Es un gato u otra cosa"
      );
      this.checkboxIndividual = false;
      console.log("------------------------------");
      // Checkbox colectivo
      console.log(
        this.checkboxGrupo.map(function(nodo) {
          return nodo + ",";
        })
      );
      this.checkboxGrupo = [];
      console.log("------------------------------");
      // RadioButtons
      console.log(this.radio);
      this.radio = null;
      console.log("------------------------------");
      // Valoracion
      console.log(this.notaValoracion);
      this.notaValoracion = 'media';
      console.log('Reseteo a: ' + this.notaValoracion);
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.inputTextInvalido {
  border-color: red;
}
</style>
