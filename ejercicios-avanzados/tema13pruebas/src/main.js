import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import listaEquipos from './components/teams/TeamsList.vue';
import listaUsuarios from './components/users/UsersList.vue';
import miembros from './components/teams/TeamMembers.vue';

const miRouter = createRouter({
  routes: [
    {
      name: 'equipos',
      path: '/equipos',
      component: listaEquipos,
      children: [{name: 'miembros', path: '/miembros/:team', component: miembros, props: true }]
    },
    { path: '/usuarios', component: listaUsuarios }
  ],
  history: createWebHistory(),
  linkActiveClass: 'minuevaclaseactiva',
  linkExactActiveClass: 'miexactanuevaclase'
});

const app = createApp(App);
app.use(miRouter);

app.mount('#app');
