<template>
  <section>
    <base-card>
      <h2>{{ nombreCompleto}}</h2>
      <h3>{{ entrenador.hourlyRate }} Euros</h3>
    </base-card>
    <section>
      <base-card>
        <header>
          <h2>Aprenda ya!!</h2>
          <base-button :link="enlaceContacto">Contactar</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in entrenador.areas"
          :key="area"
          :titulo="area"
          :myStyle="area"
        ></base-badge>
        <p>{{ entrenador.description }}</p>
      </base-card>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entrenador: null,
    };
  },
  methods: {
    getData() {
      this.entrenador = this.$store.getters["mod_entrenadores/get"].find(
        (ent) => ent.id === this.id
      );
    },
  },
  computed: {
    nombreCompleto(){
      return this.entrenador.firstName + ' ' + this.entrenador.lastName;
    },
    enlaceContacto() {
      return this.$route.path + '/' + 'contacto';
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
</style>
