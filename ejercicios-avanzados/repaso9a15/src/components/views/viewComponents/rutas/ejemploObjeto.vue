<template>
  <input type="button" value="Url con objeto" @click="miObjUrl" />
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    miObjUrl() {
      alert("entrando");
      this.$router.push({
        name: "pasoparamObj",
        params: { miparamObj: "HolayAdios" },
      });
    },
  },
};
</script>
