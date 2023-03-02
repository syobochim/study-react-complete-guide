import CartContext from "./cart-content";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const reomveItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler(),
    removeItem: reomveItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
