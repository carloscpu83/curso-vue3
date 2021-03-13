<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="cargarDatos"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from '../../axios-mod.js';
export default {
  components: {
    SurveyResult
  },
  data(){
    return {
      results: []
    };
  },
  methods: {
    cargarDatos() {
      axios
        .get(
          '/experiencias.json'
        )
        .then(respuesta => {
          this.results = [];
          if (respuesta.status === 200) {
            for(let key in respuesta.data){
              this.results.push(
                {
                  id: key,
                  name: respuesta.data[key].nombre,
                  rating: respuesta.data[key].ratio
                }
              );
            }
          } else {
            throw new Error('Se ha producido un error.');
          }
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
