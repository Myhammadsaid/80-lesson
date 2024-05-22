export const cart = (set) => {
  return {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCard: (payload) =>
      set((state) => {
        let index = state.cart.findIndex((i) => i.id === payload.id);
        let newCart = state.cart;
        if (index < 0) {
          newCart = [...state.cart, { ...payload, quantity: 1 }];
        } else {
          newCart = state.cart.map((item, inx) =>
            inx === index ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
        };
      }),
  };
};
