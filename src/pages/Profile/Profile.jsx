import React from "react";
import "./Profile.css";
import { useLoader, useAuth } from "../../context/";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const { authDispatch } = useAuth();
  const { setLoader } = useLoader();

  const navigate = useNavigate();

  const logoutHandler = () => {
    setLoader(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("Logged Out Succesfully!!");
    navigate("/");
    setTimeout(() => setLoader(false), 800);
  };

  return (
    <main className="profile-section">
      <button onClick={logoutHandler} className="btn btn-primary">
        Logout
      </button>
    </main>
  );
};

export { Profile };
