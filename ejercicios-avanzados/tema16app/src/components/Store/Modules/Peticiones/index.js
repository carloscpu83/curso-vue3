import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const Peticiones = {
  namespaced: true,
  state() {
    return {
      datos: [],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};

export default Peticiones;
