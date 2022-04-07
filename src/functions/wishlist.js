import axios from "axios";
import { addToCartHandler, removeFromCartHandler } from "./cart";
import { toast } from "react-toastify";

const loadWishlist = (token) =>
  axios.get("/api/user/wishlist", { headers: { authorization: token } });

const getWishlistItemsHandler = async (
  token,
  wishlistDispatch,
  setWishlistLoader
) => {
  if (token) {
    try {
      setWishlistLoader(true);
      const response = await loadWishlist(token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "LOAD_WISHLIST",
          payload: response.data.wishlist,
        });
        setWishlistLoader(false);
      } else {
        throw new Error("Something Went Wrong...Try Again Later");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  }
};

const addToWishListHandler = async (
  token,
  product,
  wishlistDispatch,
  setWishlistDisable
) => {
  try {
    setWishlistDisable(true);
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
      toast.info(`${product.title} added to wishlist`);
    } else {
      throw new Error("Something Went Wrong...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setWishlistDisable(false);
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
    toast.error(error.response.data.errors[0]);
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
  wishlistDispatch,
  setWishlistDisable
) => {
  return checkWishlistAction(id, wishlist, product, token) === "Add"
    ? addToWishListHandler(token, product, wishlistDispatch, setWishlistDisable)
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

const getWishlistItem = (wishlist, id) =>
  wishlist.find((item) => item._id === id);

const moveToWishListHandler = (
  token,
  product,
  wishlistDispatch,
  cartDispatch,
  wishlist
) => {
  const item = getWishlistItem(wishlist, product._id);
  !item && addToWishListHandler(token, product, wishlistDispatch);

  removeFromCartHandler(token, product._id, cartDispatch);
};

export {
  loadWishlist,
  getWishlistItemsHandler,
  addToWishListHandler,
  removeFromWishlistHandler,
  checkWishlistAction,
  checkWishlistActionHandler,
  moveToCartHandler,
  moveToWishListHandler,
};
