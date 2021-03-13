export default {
  sumar100(state) {
    return state.valor + 100;
  },
  multiplo250(state, getters) {
    let mivalor = getters.sumar100;

    let divisor = parseInt(mivalor / 250);
    if (divisor > 0) {
      return divisor * 250;
    } else {
      return mivalor;
    }
  },
  getValor(state) {
    return state.valor;
  }
};
