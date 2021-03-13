<template>
    <section>
      <slot-base>
      <template v-slot:cabecera>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
       </slot-base>
    </section>
</template>

<script>
//import slot from "./componenteslot.vue";
export default {
  /*components: {
    "slot-user": slot,
  },*/
  props: ["fullName", "infoText", "role"]
};
</script>

<style scoped>

</style>
