const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return {
        ...state,
        cart: action.payload,
        coupon: 0,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "EMPTY_CART":
      return { ...state, cart: [] };
    case "COUPON":
      return {
        ...state,
        couponDiscount: action.payload,
      };
    default:
      return state;
  }
};

export { cartReducer };
