export default {
    incrementoAsincrono(context, payload) {
      context.state.segundos = payload.segundos; // podria segnarse directamente al crear el estado
      setTimeout(function() {
        console.log(context);
        context.commit('incrementarEspecial');
      }, context.state.segundos * 1000);
    },
    cambiarEstadoLogueado(context) {
      context.commit('cambiarEstadoLogueado', {
        logueado: context.state.logueado
      });
    }
  }