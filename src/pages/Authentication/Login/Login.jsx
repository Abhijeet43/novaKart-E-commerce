import React, { useState } from "react";
import "../authentication.css";
import { headerImg } from "../../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLoader, useCart, useWishlist } from "../../../context/";
import {
  login,
  getCartItemsHandler,
  getWishlistItemsHandler,
  validateEmail,
} from "../../../functions/";
import { useToggle } from "../../../hooks/useToggle";
import { toast } from "react-toastify";

const Login = () => {
  const { authDispatch } = useAuth();

  const { cartDispatch } = useCart();

  const { wishlistDispatch } = useWishlist();

  const { setLoader } = useLoader();

  const navigate = useNavigate();

  const [showPass, setShowPass] = useToggle(false);

  const [saveUser, setSaveUser] = useToggle(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const guestUser = {
    email: "user@gmail.com",
    password: "user123",
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const guestUserHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
    setSaveUser(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (validateEmail(user.email)) {
        setLoader(true);
        const response = await login(user);
        if (response.status === 200) {
          if (saveUser) {
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.foundUser)
            );
          }
          getWishlistItemsHandler(response.data.encodedToken, wishlistDispatch);
          getCartItemsHandler(response.data.encodedToken, cartDispatch);
          authDispatch({
            type: "LOGIN",
            payload: {
              token: response.data.encodedToken,
              user: response.data.foundUser,
            },
          });
          navigate(-1);
          toast.success(`Welcome Back ${response.data.foundUser.firstName}`);
          setLoader(false);
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  return (
    <main className="auth-section">
      <section className="section-img">
        <img src={headerImg} alt="section-img" loading="lazy" />
      </section>
      <section className="section-form">
        <form action="" onSubmit={submitHandler}>
          <h1 className="form-title">Login</h1>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={changeHandler}
              value={user.email}
              required
            />
          </div>
          <div className="form-group">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={changeHandler}
              value={user.password}
              required
            />
            <i
              onClick={setShowPass}
              className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
          <div className="form-group check-remember">
            <div className="checkbox-group">
              <input
                checked={saveUser === true}
                type="checkbox"
                id="checkbox-remember"
              />
              <label htmlFor="checkbox-remember">Remember Me</label>
            </div>
            <Link to="/forgotpassword" className="form-link">
              Forgot Password?
            </Link>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={guestUserHandler}>
              Add Guest credentials
            </button>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <p className="register-text">
              Don't have an account?
              <Link to="/signup" className="form-link">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Login };
