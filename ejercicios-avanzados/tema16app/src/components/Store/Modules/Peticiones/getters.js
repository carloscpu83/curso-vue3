export default {
  get(state) {
    return state.datos;
  },
  has(state, getters) {
    return getters.get && getters.get.length > 0;
  },
};
