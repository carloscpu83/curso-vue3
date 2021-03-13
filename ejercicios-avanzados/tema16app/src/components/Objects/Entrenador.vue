<template>
  <section>
    <li>
      <h3>{{ nombre }}</h3>
      <h4>{{ tarifa }}/hora</h4>
      <base-badge v-for="area in areas" :key="area" :titulo="area" :myStyle="area"></base-badge>
      <div class="actions">
        <base-button myStyle="outline" :to="getRutaContacto">Contactar</base-button>
        <base-button  :to="getDetalle">Detalle</base-button >
      </div>
    </li>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    areas: {
      type: Array,
      required: true,
    },
    tarifa: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getAreas() {
      return this.areas.join(",");
    },
    getRutaContacto() {
      return {
        name: "entrenadoresContactar",
        params: { id: this.id },
      };
    },
    getDetalle() {
      return {
        name: "entrenadoresObtener",
        params: { id: this.id },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
