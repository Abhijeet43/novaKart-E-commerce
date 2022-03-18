const dataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_INITIAL_DATA":
      return { ...state, products: action.payload };
    case "LOAD_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export { dataReducer };
