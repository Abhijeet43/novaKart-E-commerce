import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="../landing-page/landing-page.html" className="nav-title">
            NOVAKART
          </a>
        </div>
        <div className="nav-search">
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="search"
            className="nav-search"
            placeholder="search items here"
          />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="../wishlist/wishlist.html" className="nav-link">
              <i className="fas fa-heart"></i>
              <div className="numeric-badge danger-bg">20</div>
            </a>
          </li>

          <li className="nav-item">
            <a href="../cart/cart.html" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
              <div className="numeric-badge danger-bg">20</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="../../pages/authentication/login.html"
              className="btn btn-primary"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
