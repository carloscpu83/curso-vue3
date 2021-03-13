<template>
  <base-dialog :show="!!error" title="Error" @close="cerrarDialogo">
    <template v-slot:default><p>{{ error }}</p></template>
  </base-dialog>
  <section>
    <entrenador-filtro @setFilter="applyFilter"></entrenador-filtro>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button isButton myStyle="outline" @click="refrescarLista"
          >Refrescar</base-button
        >
        <base-button
          v-if="esEntrenadorRegistrado === false && cargando === false"
          :link="rutaRegistrar"
          >Registrar entrenador</base-button
        >
      </div>
      <div v-if="cargando === true">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="listaEntrenadoresHas">
        <entrenador
          v-for="entrenador in listaEntrenadores"
          :key="entrenador.id"
          :id="entrenador.id"
          :nombre="entrenador.firstName"
          :areas="entrenador.areas"
          :tarifa="entrenador.hourlyRate"
        ></entrenador>
      </ul>
      <div v-else>No hay elementos a mostrar.</div>
    </base-card>
  </section>
</template>

<script>
import Entrenador from "../../Objects/Entrenador.vue";
import EntrenadorFiltro from "../../Objects/EntrenadoresFiltro.vue";

export default {
  components: { Entrenador, EntrenadorFiltro },
  data() {
    return {
      cargando: false,
      error: null,
      filtroLocal: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    cerrarDialogo() {
      this.error = null;
    },
    applyFilter(filtro) {
      this.filtroLocal = filtro;
    },
    filtrarEntrenadores(listadoEntrenadores, filtro) {
      let funcionAnonima = function(filtro) {
        return function(nodo) {
          if (
            (filtro.frontend === true && nodo.areas.includes("frontend")) ||
            (filtro.backend === true && nodo.areas.includes("backend")) ||
            (filtro.career === true && nodo.areas.includes("career"))
          ) {
            return nodo;
          }
        };
      };

      return listadoEntrenadores.filter(funcionAnonima(filtro));
    },
    async cargarDatos() {
      try {
        this.cargando = true;
        await this.$store.dispatch("mod_entrenadores/cargarDatos");
        this.cargando = false;
      } catch (error) {
        this.error = error.message || "Error no controlado.";
      }
    },
    async refrescarLista() {
      this.filtroLocal.frontend = true;
      this.filtroLocal.backend = true;
      this.filtroLocal.career = true;

      this.cargarDatos();
    },
  },
  async created() {
    this.cargarDatos();
  },
  computed: {
    esEntrenadorRegistrado() {
      return this.$store.getters["mod_entrenadores/esEntrenadorRegistrado"];
    },
    rutaRegistrar() {
      return { name: "entrenadoresRegistrar" };
    },
    listaEntrenadores() {
      // FORMA A)
      /*let filtroLocalAux = this.filtroLocal;
      let listEntrenadoresAux = this.$store.getters["mod_entrenadores/get"];
      let buscarEntrenadores = function(nodo) {
        if (
          (filtroLocalAux.frontend === true &&
            nodo.areas.includes("frontend")) ||
          (filtroLocalAux.backend === true && nodo.areas.includes("backend")) ||
          (filtroLocalAux.career === true && nodo.areas.includes("career"))
        ) {
          return nodo;
        }
      };

      return listEntrenadoresAux.filter(buscarEntrenadores);
      */

      // FORMA B)
      /*let listEntrenadoresAux = this.$store.getters["mod_entrenadores/get"];

      let funcionAnonima = function(filtro) {
        return function(nodo) {
          if (
            (filtro.frontend === true && nodo.areas.includes("frontend")) ||
            (filtro.backend === true && nodo.areas.includes("backend")) ||
            (filtro.career === true && nodo.areas.includes("career"))
          ) {
            return nodo;
          }
        };
      };

      return listEntrenadoresAux.filter(funcionAnonima(this.filtroLocal));*/

      // FORMA C)
      return this.filtrarEntrenadores(
        this.$store.getters["mod_entrenadores/get"],
        this.filtroLocal
      );
    },
    listaEntrenadoresHas() {
      return (
        this.filtrarEntrenadores(
          this.$store.getters["mod_entrenadores/get"],
          this.filtroLocal
        ).length > 0 && this.cargando === false
      );
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
