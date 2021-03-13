import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import componente1 from "./components/componente1.vue";
import componente2 from "./components/componente2.vue";
import componente3 from "./components/componente3.vue";
import componente4 from "./components/componente4.vue";
import componente5 from "./components/componente5.vue";
import componente6 from "./components/componente6.vue";
//import componente11 from "./components/componente11.vue";
import componentePie from "./components/componentePie.vue";
import componente12 from "./components/componente12.vue";
import pruebasrutas from "./components/pruebassobrerutas.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'c1',
      path: "/componente1",
      components: { default: componente1, pie: componentePie },
      alias: "/",
      children: [
        {
          path: "componente12",
          component: componente12,
          props: true,
        },
      ],
    },
    {
      name: 'c2',
      path: "/componente2/:valor",
      components: { default: componente2, pie: componentePie },
    },
    {
      path: "/componente3/:valorPropiedad",
      component: componente3,
      props: true,
    },
    { path: "/componente4", component: componente4, redirect: "/pruebasrutas" },
    { path: "/componente5/:miid/:minombre", component: componente5 },
    {
      name: "c6",
      path: "/componente6/:miparam",
      component: componente6,
      props: true,
    },
    { path: "/pruebasrutas", component: pruebasrutas },
    // Ruta desconocida
    { path: "/:errorRuta(.*)", component: pruebasrutas },
  ],
  linkActiveClass: "activo",
  scrollBehavior(to, from, pos) {
    return pos !== null ? pos : { top: 0, left: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

const app = createApp(App);
app.use(router);
app.mount("#app");
