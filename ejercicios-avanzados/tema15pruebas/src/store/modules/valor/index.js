import mutacion from './mutations.js';
import getter from './getters.js';
export default {
    namespaced: true,
    state() {
      return {
        valor: 0,
        segundos: 0
      };
    },
    mutations: mutacion,
    getters: getter
  }