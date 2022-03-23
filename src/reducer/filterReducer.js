const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "CATEGORY":
      if (!state.category.includes(action.payload.categoryType)) {
        return {
          ...state,
          category: [...state.category, action.payload.categoryType],
        };
      }
      const filterCategories = state.category.filter(
        (item) => item !== action.payload.categoryType
      );
      return { ...state, category: filterCategories };
    case "RESET":
      return {
        sortBy: null,
        category: [],
        rating: null,
        includeOutOfStock: true,
        maxPriceRange: 10000,
      };
    default:
      return state;
  }
};

export { filterReducer };
