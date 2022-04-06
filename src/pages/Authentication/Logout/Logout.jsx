import React from "react";
import { logout } from "../../../functions/";
import { useAuth, useLoader } from "../../../context/";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { authDispatch } = useAuth();
  const { setLoader } = useLoader();
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary"
      onClick={() => logout(setLoader, authDispatch, navigate)}
    >
      Logout
    </button>
  );
};

export { Logout };
