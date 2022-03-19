import React, { useState } from "react";
import "../authentication.css";
import { headerImg } from "../../../assets/index";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/";
import { signUp } from "../../../functions/";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";

const Signup = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const [passwordMatch, setPasswordMatch] = useState(true);

  const [showPass, setShowPass] = useToggle(false);
  const [showConfirmPass, setShowConfirmPass] = useToggle(false);

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = async (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (user.password !== user.confirmPassword) {
        setPasswordMatch(false);
        return;
      }
      const response = await signUp(user);
      if (response.status === 201) {
        authDispatch({
          type: "SIGNUP",
          payload: {
            token: response.data.encodedToken,
            user: response.data.createdUser,
          },
        });
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        navigate("/");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <main className="auth-section">
      <section className="section-img">
        <img src={headerImg} alt="section-img" />
      </section>
      <section className="section-form">
        <form action="" onSubmit={submitHandler}>
          <h1 className="form-title">Sign Up</h1>
          <div className="form-group">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={user.fname}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={user.lname}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={changeHandler}
              required
            />
            <i
              className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"}`}
              onClick={setShowPass}
            ></i>
          </div>
          <div className="form-group">
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={changeHandler}
              required
            />
            <i
              className={`fas ${showConfirmPass ? "fa-eye-slash" : "fa-eye"}`}
              onClick={setShowConfirmPass}
            ></i>
          </div>
          <div className="form-group">
            <span className="terms">
              By creating an account you agree to our
              <Link to="/privacy" className="form-link">
                Privacy Policy
              </Link>
              and
              <Link to="/terms" className="form-link">
                Terms of Use
              </Link>
            </span>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <p className="login-text">
              Already Have an Account?
              <Link to="/login" className="form-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Signup };
