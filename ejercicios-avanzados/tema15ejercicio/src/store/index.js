import { createStore } from "vuex";

import products from "./modules/products/index.js";
import cart from './modules/cart/index.js';

const miStore = createStore({
  modules: {
    products: products,
    cart: cart
  },
});

export default miStore;
