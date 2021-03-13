export default {
  addProductToCart(context, payload) {
    let prodId = payload.producto.id;
    let producto = context.rootGetters["products/getProducts"].find((nodo) => {
      if(nodo.id === prodId){return nodo;}
    });
    context.commit("addProductToCart", { producto: producto });
  },
  removeProductFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
};
