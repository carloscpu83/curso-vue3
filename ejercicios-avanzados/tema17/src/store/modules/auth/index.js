import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  state() {
    return {
      userId: null, 
      tokenId: null,
      expiresIn: null
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};
