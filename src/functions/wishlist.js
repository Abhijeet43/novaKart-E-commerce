import axios from "axios";
import { addToCartHandler, removeFromCartHandler } from "./cart";

const loadWishlist = (token) =>
  axios.get("/api/user/wishlist", { headers: { authorization: token } });

const addToWishListHandler = async (token, product, wishlistDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      throw new Error("Something Went Wrong...Try Again Later");
    }
  } catch (error) {
    alert(error);
  }
};

const removeFromWishlistHandler = async (token, id, wishlistDispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      throw new Error("Something Went Wrong.... Try Later");
    }
  } catch (error) {
    alert(error);
  }
};

const checkWishlistAction = (id, wishlist) => {
  const product = wishlist.find((product) => product._id === id);
  return product ? "Remove" : "Add";
};

const checkWishlistActionHandler = (
  id,
  wishlist,
  token,
  product,
  wishlistDispatch
) => {
  return checkWishlistAction(id, wishlist, product, token) === "Add"
    ? addToWishListHandler(token, product, wishlistDispatch)
    : removeFromWishlistHandler(token, id, wishlistDispatch);
};

const moveToCartHandler = (
  token,
  product,
  cartDispatch,
  cart,
  wishlistDispatch
) => {
  addToCartHandler(token, product, cartDispatch, cart);
  removeFromWishlistHandler(token, product._id, wishlistDispatch);
};

const moveToWishListHandler = (
  token,
  product,
  wishlistDispatch,
  cartDispatch
) => {
  addToWishListHandler(token, product, wishlistDispatch);
  removeFromCartHandler(token, product._id, cartDispatch);
};

export {
  loadWishlist,
  addToWishListHandler,
  removeFromWishlistHandler,
  checkWishlistAction,
  checkWishlistActionHandler,
  moveToCartHandler,
  moveToWishListHandler,
};