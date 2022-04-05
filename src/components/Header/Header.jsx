import React from "react";
import "./Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context/";
import { getTotalCartItems } from "../../functions/";

const Header = () => {
  const {
    authState: { user, token },
  } = useAuth();

  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

  const location = useLocation();

  const navigate = useNavigate();

  const checkStatus = (user) => (user ? `Hi, ${user.firstName}` : "LOGIN");

  const userHandler = async (type) => {
    type === "LOGIN" ? navigate("/login") : navigate("/profile");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link className="nav-title" to="/">
            NOVAKART
          </Link>
        </div>
        {location.pathname === "/products" && (
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
        )}

        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <i className="fas fa-heart nav-icon"></i>
              <div
                className={`numeric-badge danger-bg ${
                  token ? (wishlist.length > 0 ? "display" : "hide") : "hide"
                }`}
              >
                {wishlist.length}
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart nav-icon"></i>
              <div
                className={`numeric-badge danger-bg ${
                  token ? (cart.length > 0 ? "display" : "hide") : "hide"
                }`}
              >
                {getTotalCartItems(cart)}
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary btn-nav"
              onClick={() => userHandler(checkStatus(user))}
            >
              <i className="fa-solid fa-user user-icon"></i>
              <span>{checkStatus(user)}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
