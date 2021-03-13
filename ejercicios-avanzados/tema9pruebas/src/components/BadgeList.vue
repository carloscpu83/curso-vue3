<template>
  <slot-base>
    <template v-slot:cabecera>
      <h2>Available Badges</h2>
    </template>
    <template v-slot:default>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
    </template>
    <template v-slot:sinvalor>HOLAAAAAAAAAAA</template>
  </slot-base>
</template>

<script>
//import slot from './componenteslot.vue';
export default {
  /*components:{
    'slot-list': slot
  }*/
};
</script>

<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li{
  margin-right: 1rem;
}
</style>
