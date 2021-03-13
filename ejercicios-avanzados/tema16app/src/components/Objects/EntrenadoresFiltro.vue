<template>
  <base-card>
    <h2>Busqueda por especialidad</h2>
    <span class="filter-option"
      ><input
        type="checkbox"
        id="frontend"
        :checked="filtros.frontend"
        @change="setFilters"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="backend"
        :checked="filtros.backend"
        @change="setFilters"
      />
      <label for="backend">Backend</label></span
    >
    <span class="filter-option">
      <input
        type="checkbox"
        id="career"
        :checked="filtros.career"
        @change="setFilters"
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["setFilter"],
  data() {
    return {
      filtros: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    fillFilters(nodeName, nodeChecked) {
      switch (nodeName) {
        case "frontend":
          this.filtros.frontend = nodeChecked;
          break;
        case "backend":
          this.filtros.backend = nodeChecked;
          break;
        case "career":
          this.filtros.career = nodeChecked;
          break;
      }
    },
    setFilters(event) {
      let nodeName = event.target.id;
      let nodeChecked = event.target.checked;

      this.fillFilters(nodeName, nodeChecked);

      this.$emit("setFilter", this.filtros);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
