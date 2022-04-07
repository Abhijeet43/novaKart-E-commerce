import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/";
import { useAuth } from "./index";
import { loadCart } from "../functions/";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
