import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext({
  isActive: "",
});

const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

const useLoader = () => useContext(LoaderContext);

export { LoaderProvider, useLoader };
