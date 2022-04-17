import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrders = () => useContext(OrderContext);

export { useOrders, OrderProvider };
