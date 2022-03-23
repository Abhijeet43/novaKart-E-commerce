import React, { createContext, useContext, useReducer, useEffect } from "react";
import { filterReducer } from "../reducer/";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    category: [],
    rating: null,
    includeOutOfStock: true,
    priceRangeValue: 10000,
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
