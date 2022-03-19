import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "./components/index";
import {
  Home,
  Login,
  Signup,
  ProductListing,
  ProductDetails,
  Wishlist,
  Cart,
  Categories,
  CategoryListing,
} from "./pages/index";
import { useAuth } from "./context/auth-context";

function App() {
  const {
    authState: { user },
  } = useAuth();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate replace to="/" /> : <Signup />}
        />
        <Route
          path="/wishlist"
          element={user ? <Wishlist /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate replace to="/login" />}
        />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<CategoryListing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
