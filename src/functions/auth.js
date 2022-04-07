import axios from "axios";
import { toast } from "react-toastify";

const signUp = (user) => {
  return axios.post("/api/auth/signup", user);
};

const login = (user) => {
  return axios.post("/api/auth/login", user);
};

const logout = (
  setLoader,
  authDispatch,
  navigate,
  cartDispatch,
  wishlistDispatch
) => {
  setLoader(true);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  cartDispatch({ type: "EMPTY_CART" });
  wishlistDispatch({ type: "EMPTY_WISHLIST" });
  authDispatch({ type: "LOGOUT" });
  toast.success("Logged Out Succesfully!!");
  navigate("/");
  setTimeout(() => setLoader(false), 800);
};

export { signUp, login, logout };
