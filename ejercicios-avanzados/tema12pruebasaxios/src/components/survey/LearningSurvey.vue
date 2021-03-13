<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'https://bdvue-5d091-default-rtdb.firebaseio.com';
axios.defaults.headers.common['mivalor'] = 'xxx';
axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});
axios.interceptors.response.use(res => {
  res.headers['truco'] = 'si';
  console.log(res);
  return res;
});
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false
    };
  },
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      axios
        .post('/experiencias.json', {
          nombre: this.enteredName,
          ratio: this.chosenRating
        })
        .then(resultado => {
          //console.log(resultado);
          if (resultado.status === 200) {
            console.log('Codigo 200');
          }
          if (resultado.statusText === 'OK') {
            console.log('Todo OK');
          }
        })
        .catch(error => {
          console.log('Se ha recibido un error: ' + error.message);
        });

      this.enteredName = '';
      this.chosenRating = null;
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
