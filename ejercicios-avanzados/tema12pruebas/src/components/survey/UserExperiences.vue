<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="cargarDatos"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="cargando === true">Cargando datos desde la BD, por favor espere un momento.</p>
      <p v-else-if="cargando === false && results && results.length === 0">No existen datos que mostrar.</p>
      <ul v-else-if="cargando === false && results && results.length > 0">
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

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      cargando: false,
      results: []
    };
  },
  methods: {
    cargarDatos() {
      fetch(
        'https://bdvue-5d091-default-rtdb.firebaseio.com/valoraciones.json',
        { method: 'GET' }
      )
        .then((respuesta) => {
          this.cargando = true;
          if (respuesta.ok) {
            return respuesta.json();
          }
        })
        .then((datos) => {
          this.cargando = false;
          for (let id in datos) {
            this.results.push({
              id: id,
              name: datos[id].nombre,
              rating: datos[id].valor
            });
          }
        });
    }
  },
  mounted(){
    this.cargarDatos();
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
