import React, { createContext, useContext, useReducer, useEffect } from "react";
import { wishListReducer } from "../reducer/";
import { useAuth } from "../context/index";
import { loadWishlist } from "../functions/";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const { token } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishListReducer, {
    wishlist: [],
  });

  useEffect(() => {
    return token
      ? (async () => {
          try {
            const response = await loadWishlist(token);
            if (response.status === 201) {
              wishlistDispatch({
                type: "LOAD_WISHLIST",
                payload: response.data.wishlist,
              });
            } else {
              throw new Error("Something went wrong....Try Again");
            }
          } catch (error) {
            console.log("Error", error);
          }
        })()
      : null;
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
