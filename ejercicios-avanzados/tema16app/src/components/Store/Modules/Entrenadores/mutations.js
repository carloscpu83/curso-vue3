export default {
  agregarEntrenador(state, payload) {
    state.datos.push(payload.valor);
  },
  cargarDatos(state, payload){
    state.datos = payload;
  }
};
