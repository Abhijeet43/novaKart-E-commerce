import React, { createContext, useContext, useReducer } from "react";
import { addressReducer } from "../reducer/";

const AddressContext = createContext({
  address: "",
});

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    address: [],
  });
  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
