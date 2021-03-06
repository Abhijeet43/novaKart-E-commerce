import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    couponDiscount: 0,
  });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
