import mutations from './mutations.js';
import getter from './getters.js';
import action from './actions.js';

export default {
    namespaced: true,
    state() {
      return {
        logueado: false
      };
    },
    mutations: mutations,
    getters: getter,
    actions: action
  };