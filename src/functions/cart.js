import axios from "axios";

const loadCart = (token) =>
  axios.get("/api/user/cart", { headers: { authorization: token } });

const addToCartHandler = async (token, product, cartDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
  } catch (error) {
    alert(error);
  }
};

const updateCartHandler = async (token, id, cartDispatch, action) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type: action } },
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
    } else {
      throw new Error("Something Went Wrong.... Try Later");
    }
  } catch (error) {
    alert(error);
  }
};

const removeFromCartHandler = async (token, id, cartDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    } else {
      throw new Error("Something Went Wrong.... Try Later");
    }
  } catch (error) {
    alert(error);
  }
};

const checkAction = (id, cart) => {
  const item = cart.find((item) => item._id === id);
  return item ? "GO TO CART" : "ADD TO CART";
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

export {
  loadCart,
  addToCartHandler,
  checkAction,
  updateCartHandler,
  removeFromCartHandler,
  getCartTotal,
};
