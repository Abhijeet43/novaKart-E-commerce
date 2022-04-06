import React, { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    category: [],
    rating: null,
    includeOutOfStock: true,
    priceRangeValue: 10000,
    search: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
