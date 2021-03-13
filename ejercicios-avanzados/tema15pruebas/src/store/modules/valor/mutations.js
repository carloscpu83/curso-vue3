export default {
  incrementar(state, payload) {
    state.valor += payload.value;
  },
  incrementarEspecial(state) {
    state.valor += state.segundos;
  }
};
