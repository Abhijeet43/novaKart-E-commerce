import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>NovaKart - an all in one store for all your needs</p>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" to="/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <Link className="footer-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" to="/wishlist">
              My Wishlist
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" to="/profile/settings">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
