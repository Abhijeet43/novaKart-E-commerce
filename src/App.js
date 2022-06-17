import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer, Loader } from "./components/";
import { RequiresAuth } from "./RequiresAuth";
import { ScrollToTop } from "./ScrollToTop";
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
  Profile,
  Logout,
  Checkout,
  Error404,
  Orders,
} from "./pages/";
import { Address, ProfileDetails } from "./pages/Profile/components/";
import { useLoader } from "./context/";

function App() {
  const { loader } = useLoader();

  return (
    <>
      {loader ? <Loader /> : null}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-text"
      />

      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        >
          <Route path="profiledetails" element={<ProfileDetails />} />
          <Route path="address" element={<Address />} />
          <Route path="settings" element={<Logout />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<CategoryListing />} />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
