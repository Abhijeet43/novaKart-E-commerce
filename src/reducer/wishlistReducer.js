const wishListReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};

export { wishListReducer };
