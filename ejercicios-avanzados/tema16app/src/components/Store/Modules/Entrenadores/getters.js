export default {
  get(state) {
    return state.datos;
  },
  has(state) {
    return state.datos && state.datos.length > 0;
  },
  esEntrenadorRegistrado(state, _, _2, rootGetters){
    return state.datos.some(nodo => nodo.id === rootGetters.userId);
  }
};
