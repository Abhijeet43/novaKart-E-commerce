import React from "react";
import "../authentication.css";
import { headerImg } from "../../../assets/index";

const Signup = () => {
  return (
    <main className="auth-section">
      <section className="section-img">
        <img src={headerImg} alt="section-img" />
      </section>
      <section className="section-form">
        <form action="">
          <h1 className="form-title">Sign Up</h1>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <span className="err-msg">Error</span>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" />
            <span className="err-msg">Error</span>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
            <span className="err-msg">Error</span>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
            <i className="fas fa-eye"></i>
            <span className="err-msg">Error</span>
          </div>
          <div className="form-group checkbox-group-signup">
            <input type="checkbox" id="news-letter" />
            <label for="news-letter">
              Sign up for emails to get updates from NovaKart.
            </label>
          </div>
          <div className="form-group">
            <span className="terms">
              By creating an account you agree to our
              <a href="#" className="form-link">
                Privacy Policy
              </a>{" "}
              and
              <a href="#" className="form-link">
                Terms of Use
              </a>
            </span>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <p className="login-text">
              Already Have an Account?
              <a href="./login.html" className="form-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Signup };
