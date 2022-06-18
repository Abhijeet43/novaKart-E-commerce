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

const validateEmail = (email) => {
  const regularExpression =
    /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (regularExpression.test(email)) {
    return true;
  } else {
    toast.warning("Enter a valid email address");
    return false;
  }
};

const validatePassword = (password) => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (regularExpression.test(password)) {
    return true;
  } else {
    toast.warning(
      "Password must be between 8 to 16 chars and must include a number, a uppercase letter, a lowercase letter and a special character"
    );
    return false;
  }
};

const confirmPasswordCheck = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    toast.error("Your password and confirm password do not match");
    return false;
  } else {
    return true;
  }
};

export {
  signUp,
  login,
  logout,
  validateEmail,
  validatePassword,
  confirmPasswordCheck,
};
