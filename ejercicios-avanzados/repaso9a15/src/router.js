import { createRouter, createWebHistory } from "vue-router";

import mainPage from "./components/views/mainPage.vue";

import slotsView from "./components/views/slotsView.vue";
import ejemploSlot1 from "./components/views/viewComponents/slots/ejemploSlot1.vue";
import ejemploSlot2 from "./components/views/viewComponents/slots/ejemploSlot2.vue";

import formulariosView from "./components/views/formulariosView.vue";
import ejemploFormulario1 from "./components/views/viewComponents/formularios/ejemploFormulario1.vue";

import peticioneshttpView from "./components/views/peticioneshttpView.vue";
import ejemploPeticion1 from "./components/views/viewComponents/peticiones/ejemploPeticion1.vue";
import agregarHttp from "./components/views/viewComponents/peticiones/agregarHttp.vue";
import verHttp from "./components/views/viewComponents/peticiones/verHttp.vue";

import rutasView from "./components/views/rutaView.vue";
import ejemploPasoParam from "./components/views/viewComponents/rutas/ejemploPasoParam.vue";
import ejemploPasoParamProp from "./components/views/viewComponents/rutas/ejemploPasoParamProp.vue";
import ejemploObjeto from "./components/views/viewComponents/rutas/ejemploObjeto.vue";
import ejemploObjetoCrear from "./components/views/viewComponents/rutas/ejemploObjetoCrear.vue";
import ejemploObjetoCrearRes from "./components/views/viewComponents/rutas/ejemploObjetoCrearRes.vue";
import ejemploMultiObjeto from "./components/views/viewComponents/rutas/ejemploMultiObjeto.vue";
import multiComponenteHijo from "./components/views/viewComponents/rutas/multiComponenteHijo.vue";
//import comp1 from "./components/views/viewComponents/rutas/rutamulticomponente/com1.vue";
//import comp2 from "./components/views/viewComponents/rutas/rutamulticomponente/com2.vue";

import errorPage from "./components/views/errorPage.vue";
import footer from "./components/footers/footer.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "main", path: "/", component: mainPage },
    {
      name: "slots",
      path: "/slots",
      components: { default: slotsView, footer: footer },
      children: [
        { path: "ejemploSlot1", component: ejemploSlot1 },
        { path: "ejemploSlot2", component: ejemploSlot2 },
      ],
    },
    {
      name: "formularios",
      path: "/formularios",
      components: { default: formulariosView, footer: footer },
      children: [{ path: "ejemploFormulario1", component: ejemploFormulario1 }],
    },
    {
      name: "peticiones",
      path: "/peticiones",
      components: { default: peticioneshttpView, footer: footer },
      children: [
        {
          path: "peticion1",
          component: ejemploPeticion1,
          children: [
            { path: "agregar", component: agregarHttp },
            { path: "ver", component: verHttp },
          ],
        },
      ],
    },
    {
      name: "rutas",
      path: "/rutas",
      components: { default: rutasView, footer: footer },
      children: [
        { path: "pasoparametro/:miparam", component: ejemploPasoParam },
        {
          path: "pasoparametroprop/:miparam",
          component: ejemploPasoParamProp,
          props: true,
        },
        {
          path: "objetos",
          component: ejemploObjeto,
          children: [
            {
              name: "crearObj",
              path: "crear",
              component: ejemploObjetoCrear,
              children: [
                {
                  name: "pasoparamObj",
                  path: "pasoparamobj",
                  component: ejemploObjetoCrearRes,
                },
              ],
            },
          ],
        },
        {
          path: "multicomponente",
          name: "multicomponente",
          component: ejemploMultiObjeto,
          children: [
            {
              name: "multicomponenteHijo",
              path: "multicomponenteHijo",
              component: multiComponenteHijo
            },
          ],
        },
      ],
    },
    { name: "error", path: "/:error(.*)", component: errorPage },
  ],
  linkActiveClass: "activo",
});

export default router;
