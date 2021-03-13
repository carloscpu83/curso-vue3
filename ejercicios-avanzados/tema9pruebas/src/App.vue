<template>
  <div>
    <the-header></the-header>

    <badge-list></badge-list>

    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <div class="parche">
      <slot-con-alcance>
      <template v-slot:porDefecto="valor">
        <span>{{valor.id}} - {{valor.nombre}}</span>
      </template>
    </slot-con-alcance>
    </div>

    <div class="parche">
      <input type="button" value="Switch componente" @click="swichComponente()">
      <keep-alive>
        <component :is="componenteactivo"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import BadgeList from './components/BadgeList.vue';
  import UserInfo from './components/UserInfo.vue';

  import slotConAlcance from './components/slotConAlcance.vue';

  import componente1 from './components/componenteDinamico1.vue';
  import componente2 from './components/componenteDinamico2.vue';

  import error from './components/error.vue';

export default {
  components:{
      'the-header': TheHeader,
      'badge-list': BadgeList,
      'user-info': UserInfo,
      'slot-con-alcance': slotConAlcance,
      'componente-dinamico-1': componente1,
      'componente-dinamico-2': componente2,
      'error': error
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      componenteactivo:'componente-dinamico-1'
    };
  },
  methods:{
    swichComponente(){
      this.componenteactivo = this.componenteactivo === 'componente-dinamico-1' ? 'componente-dinamico-2' : 'componente-dinamico-1';
    }
  }
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

div .parche {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>