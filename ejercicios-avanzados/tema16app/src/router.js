import { createRouter, createWebHistory } from "vue-router";

import EntrenadoresUi from "./components/UI/Entrenadores/EntrenadoresLista.vue";

import EntrenadorDetalleUi from "./components/Objects/EntrenadorDetalle.vue";
import EntrenadorRegistrarUi from "./components/Objects/EntrenadorRegistrar.vue";

import ContactoUi from "./components/UI/Contacto/Contacto.vue";

import PeticionesUi from "./components/UI/Peticiones/Peticiones.vue";

import ErrorUi from "./components/UI/Error/Error.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/entrenadores" },
    {
      name: "entrenadoresListar",
      path: "/entrenadores",
      component: EntrenadoresUi,
    },
    {
      name: "entrenadoresRegistrar",
      path: "/registrar",
      component: EntrenadorRegistrarUi,
    },
    {
      name: "entrenadoresObtener",
      path: "/entrenadores/:id",
      props: true,
      component: EntrenadorDetalleUi,
      children: [
        {
          name: "entrenadoresContactar",
          path: "contacto",
          props: true,
          component: ContactoUi,
        }
      ]
    },
    {
      name: "peticiones",
      path: "/peticiones",
      component: PeticionesUi,
    },
    {
      path: "/:error(.*)",
      component: ErrorUi,
    },
  ],
});

export default router;
