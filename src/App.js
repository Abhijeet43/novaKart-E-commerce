import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
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
