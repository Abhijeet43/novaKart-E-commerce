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
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
