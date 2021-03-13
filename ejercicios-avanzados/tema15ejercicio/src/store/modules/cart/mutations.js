export default {
  addProductToCart(state, payload) {
    const producto = payload.producto;

    const productInCartIndex = state.items.findIndex(
      (ci) => ci.productId === producto.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: producto.id,
        title: producto.title,
        image: producto.image,
        price: producto.price,
        qty: 1,
      };
      state.items.push(newItem);
    }
    state.qty++;
    state.total += producto.price;
  },

  removeProductFromCart(state, payload) {
    const producto = payload.producto;

    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === producto.prodId
    );

    const prodData = state.items[productInCartIndex];

    state.items.splice(productInCartIndex, 1);

    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty
  },
};
