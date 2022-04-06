import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer, Loader } from "./components/";
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
} from "./pages/";
import { Address, ProfileDetails } from "./pages/Profile/components/";
import { useAuth, useLoader } from "./context/";

function App() {
  const {
    authState: { user },
  } = useAuth();

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
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate replace to="/login" />}
        >
          <Route path="profiledetails" element={<ProfileDetails />} />
          <Route path="address" element={<Address />} />
          <Route path="settings" element={<Logout />} />
        </Route>
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
