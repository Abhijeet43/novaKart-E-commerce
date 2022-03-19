import React, { useState } from "react";
import "../authentication.css";
import { headerImg } from "../../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/";
import { login } from "../../../functions/";
import { useToggle } from "../../../hooks/useToggle";

const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useToggle(false);

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
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await login(user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({
          type: "LOGIN",
          payload: {
            token: response.data.encodedToken,
            user: response.data.foundUser,
          },
        });
        navigate("/");
      }

      if (response.status === 404) {
        throw new Error(
          "The email entered is not Registered. Please Enter a valid Email"
        );
      } else if (response.status === 401) {
        throw new Error("Incorrect Password! Please try again.");
      } else if (response.status === 500) {
        throw new Error("Internal Server Error");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <main className="auth-section">
      <section className="section-img">
        <img src={headerImg} alt="section-img" />
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
              <input type="checkbox" id="checkbox-remember" />
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
