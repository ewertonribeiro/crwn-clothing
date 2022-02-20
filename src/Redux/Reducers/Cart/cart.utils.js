const CART_UTILS = {
  ShowCart(state) {
    switch (state.show) {
      case true:
        return false;

      default:
        return true;
    }
  },

  AddItemsToCart(cartItems, payload) {
    const itemExist = cartItems.find((item) => item.name === payload.name);

    switch (itemExist) {
      case undefined:
        return (cartItems = [...cartItems, { ...payload, count: 1 }]);

      default:
        const newArray = cartItems.map((item) =>
          item.name === payload.name
            ? { ...item, count: (item.count += 1) }
            : item
        );

        return newArray;
    }
  },

  ClearItemFromCart(state, action) {
    const index = state.cartItems.findIndex(
      (item) => item.name === action.payload.name
    );

    return index;
  },

  increment(state, action) {
    const Increment = state.cartItems.map((item) =>
      item.name === action.payload.name
        ? { ...item, count: (item.count += 1) }
        : item
    );

    return Increment;
  },

  decrement(state, action) {
    const Decrement = state.cartItems.map((item) =>
      item.name === action.payload.name
        ? { ...item, count: (item.count -= 1) }
        : item
    );

    return Decrement;
  },
};

export default CART_UTILS;
