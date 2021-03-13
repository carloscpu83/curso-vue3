import { createStore } from "vuex";

import mod_entrenadores from "./Modules/Entrenadores/index.js";
import mod_peticiones from "./Modules/Peticiones/index.js";

const Store = createStore({
  modules: {
    mod_entrenadores: mod_entrenadores,
    mod_peticiones: mod_peticiones,
  },
  state() {
    return {
      userId: "c255",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default Store;
