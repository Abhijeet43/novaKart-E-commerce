import React from "react";
import { logout } from "../../../functions/";
import { useAuth, useLoader, useCart, useWishlist } from "../../../context/";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { setLoader } = useLoader();
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        logout(
          setLoader,
          authDispatch,
          navigate,
          cartDispatch,
          wishlistDispatch
        )
      }
    >
      Logout
    </button>
  );
};

export { Logout };
