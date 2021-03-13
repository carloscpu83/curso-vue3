import { createStore } from 'vuex';

import moduloValor from './modules/valor/index.js';
import moduloSegundos from './modules/segundos/index.js';

const estado = createStore({
    modules: {
      moduloValor: moduloValor,
      moduloSegundos: moduloSegundos
    }
  });

export default estado;