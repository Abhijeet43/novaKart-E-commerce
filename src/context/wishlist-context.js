import React, { createContext, useContext, useReducer, useEffect } from "react";
import { wishListReducer } from "../reducer/";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishListReducer, {
    wishlist: [],
  });
  return (
    <WishlistContext.Provider value={(wishlistState, wishlistDispatch)}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
