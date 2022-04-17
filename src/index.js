import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  DataProvider,
  AuthProvider,
  CartProvider,
  WishlistProvider,
  FilterProvider,
  LoaderProvider,
  AddressProvider,
  OrderProvider,
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <AuthProvider>
          <AddressProvider>
            <DataProvider>
              <OrderProvider>
                <CartProvider>
                  <FilterProvider>
                    <WishlistProvider>
                      <App />
                    </WishlistProvider>
                  </FilterProvider>
                </CartProvider>
              </OrderProvider>
            </DataProvider>
          </AddressProvider>
        </AuthProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
