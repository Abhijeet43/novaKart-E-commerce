import axios from "axios";
import { toast } from "react-toastify";

const signUp = (user) => {
  return axios.post("/api/auth/signup", user);
};

const login = (user) => {
  return axios.post("/api/auth/login", user);
};

const logout = (setLoader, authDispatch, navigate) => {
  setLoader(true);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authDispatch({ type: "LOGOUT" });
  toast.success("Logged Out Succesfully!!");
  navigate("/");
  setTimeout(() => setLoader(false), 800);
};

export { signUp, login, logout };
