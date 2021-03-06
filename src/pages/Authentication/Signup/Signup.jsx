import React, { useState, useEffect } from "react";
import "../authentication.css";
import { headerImg } from "../../../assets/index";
import { Link } from "react-router-dom";
import { useAuth, useLoader } from "../../../context/";
import {
  signUp,
  validateEmail,
  validatePassword,
  confirmPasswordCheck,
} from "../../../functions/";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const {
    authState: { token },
    authDispatch,
  } = useAuth();

  const { setLoader } = useLoader();

  const [showPass, setShowPass] = useToggle(false);
  const [showConfirmPass, setShowConfirmPass] = useToggle(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
      if (
        validateEmail(user.email) &&
        validatePassword(user.password) &&
        confirmPasswordCheck(user.password, user.confirmPassword)
      ) {
        setLoader(true);
        const response = await signUp(user);
        if (response.status === 201) {
          authDispatch({
            type: "SIGNUP",
            payload: {
              token: response.data.encodedToken,
              user: response.data.createdUser,
            },
          });
          toast.success("Signup Success!!");
          setLoader(false);
          navigate("/");
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return (
    <main className="auth-section">
      <section className="section-img">
        <img src={headerImg} alt="section-img" loading="lazy" />
      </section>
      <section className="section-form">
        <form action="" onSubmit={submitHandler}>
          <h1 className="form-title">Sign Up</h1>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
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
