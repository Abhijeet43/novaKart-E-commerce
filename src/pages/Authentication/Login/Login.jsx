import React from "react";
import "../authentication.css";
import { headerImg } from "../../../assets/index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="auth-section">
      <section className="section-img">
        <img src={headerImg} alt="section-img" />
      </section>
      <section className="section-form">
        <form action="">
          <h1 className="form-title">Login</h1>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
            <span className="err-msg">Error</span>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
            <i className="fas fa-eye"></i>
            <span className="err-msg">Error</span>
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
