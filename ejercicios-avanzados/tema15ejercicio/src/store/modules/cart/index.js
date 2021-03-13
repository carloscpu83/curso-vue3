import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const cart = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};

export default cart;
