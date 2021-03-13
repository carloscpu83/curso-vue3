<template>
  <base-dialog :show="!!error" title="Error" @close="cerrarDialogo">
    <template v-slot:default
      ><p>{{ error }}</p></template
    >
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Solicitudes recibidas</h2>
      </header>
      <div v-if="cargando === true">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="listaPeticionesHas === true && cargando === false">
        <peticion
          v-for="pet in listaPeticiones"
          :key="pet.email"
          :id="pet.id"
          :email="pet.email"
          :mensaje="pet.mensaje"
        ></peticion>
      </ul>
      <h3 v-else>No tienes solicitudes</h3>
    </base-card>
  </section>
</template>

<script>
import Peticion from "../../Objects/Peticion.vue";
export default {
  components: {
    peticion: Peticion,
  },
  computed: {
    listaPeticiones() {
      return this.$store.getters["mod_peticiones/get"];
    },
    listaPeticionesHas() {
      return this.$store.getters["mod_peticiones/has"];
    },
  },
  async created() {
    try {
      this.cargando = true;
      await this.$store.dispatch({ type: "mod_peticiones/cargarDatos" });
      this.cargando = false;
    } catch (error) {
      this.error = error.message || 'Error no controlado';
    }
  },
  data() {
    return {
      cargando: false,
      error: null,
    };
  },
  methods: {
    cerrarDialogo() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
