<template>
  <section>
    <h2>{{ teamName }} (tipo {{$route.query.tipo}})</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
  <router-link to="/miembros/t2">Ver el equipo 2</router-link>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users','teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  props:{
    team: {
      type: String,
      required: true
    }
  },
  methods:{
    teamFilter(){
      return this.teams.find(nodo => nodo.id === this.team);
    },
    userFilter(id){
      return this.users.find(nodo => nodo.id === id);
    },
    dataFilter(){
      let equipo = this.teamFilter();
      this.teamName = equipo.name;
      this.members = equipo.members.map(valor => this.userFilter(valor));
    }
  },
  created(){
    this.dataFilter(this.team);
  },
  watch: {
    team(nuevoValor){
      this.dataFilter(nuevoValor);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>