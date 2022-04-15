import axios from "axios";
import { toast } from "react-toastify";

const loadCart = async (token) =>
  axios.get("/api/user/cart", { headers: { authorization: token } });

const getCartItemsHandler = async (token, cartDispatch) => {
  if (token) {
    try {
      const response = await loadCart(token);
      if (response.status === 200) {
        cartDispatch({
          type: "LOAD_CART",
          payload: response.data.cart,
        });
      } else {
        throw new Error("Something Went Wrong...Try Again Later");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  }
};

const addToCartHandler = async (
  token,
  product,
  cartDispatch,
  cart,
  setIsProcessing
) => {
  const prod = cart.find(
    (item) => item.id === product.id && item.size === product.size
  );
  if (prod) {
    updateCartHandler(
      token,
      product._id,
      cartDispatch,
      "increment",
      setIsProcessing
    );
  } else {
    try {
      setIsProcessing(true);
      const response = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: response.data.cart,
        });
        toast.info(`${product.title} added to cart`);
      } else {
        throw new Error("Something Went Wrong.... Try Later");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    } finally {
      setIsProcessing(false);
    }
  }
};

const updateCartHandler = async (
  token,
  id,
  cartDispatch,
  action,
  setIsProcessing
) => {
  try {
    setIsProcessing(true);
    cartDispatch({ cartBtnDisable: true });
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type: action } },
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: response.data.cart,
      });
      toast.info("Item Already Exists In Cart. Quantity Updated");
    } else {
      throw new Error("Something Went Wrong.... Try Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setIsProcessing(false);
  }
};

const removeFromCartHandler = async (token, id, cartDispatch, from = "") => {
  try {
    cartDispatch({ cartBtnDisable: true });
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: response.data.cart,
      });
      !from && toast.warning("Item Removed from cart");
    } else {
      throw new Error("Something Went Wrong.... Try Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const getCartTotal = (products) => {
  return products.reduce(
    (acc, product) => {
      return {
        ...acc,
        totalPrice:
          product.discount > 0
            ? Math.round(
                (acc.totalPrice +
                  Number(product.price) +
                  Number(product.price) * (Number(product.discount) / 100)) *
                  Number(product.qty)
              )
            : acc.totalPrice,
        totalDiscount:
          product.discount > 0
            ? Math.round(
                acc.totalDiscount +
                  Number(product.qty) *
                    Number(product.price) *
                    (Number(product.discount) / 100)
              )
            : acc.totalDiscount,
      };
    },
    { totalPrice: 0, totalDiscount: 0 }
  );
};

const getTotalCartItems = (cart) =>
  cart.reduce((acc, item) => (acc += item.qty), 0);

const checkItemInCart = (cart, id) =>
  cart.some((product) => product._id === id);

export {
  loadCart,
  getCartItemsHandler,
  addToCartHandler,
  updateCartHandler,
  removeFromCartHandler,
  getCartTotal,
  getTotalCartItems,
  checkItemInCart,
};
