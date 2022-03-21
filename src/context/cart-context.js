import React, { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/";
import { useAuth } from "./index";
import { loadCart } from "../functions/";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {
    return token
      ? (async () => {
          try {
            const response = await loadCart(token);
            cartDispatch({
              type: "LOAD_CART",
              payload: response.data.cart,
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
