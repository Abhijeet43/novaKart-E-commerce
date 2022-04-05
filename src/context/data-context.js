import React, { createContext, useContext, useReducer, useEffect } from "react";
import { dataReducer } from "../reducer";
import { getProducts, getCategories } from "../functions";
import { useLoader } from "./";

const DataContext = createContext({
  dataState: [],
  dataDispatch: () => {},
});

const initialState = {
  products: [],
  categories: [],
};

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  const { setLoader } = useLoader();

  useEffect(() => {
    getProducts(dataDispatch, setLoader);
    getCategories(dataDispatch, setLoader);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
