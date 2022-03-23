import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context/";
import { getTotalCartItems } from "../../functions/";

const Header = () => {
  const {
    authState: { user, token },
    authDispatch,
  } = useAuth();

  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const checkStatus = (user) => (user ? "LOGOUT" : "LOGIN");

  const userHandler = async (type) => {
    type === "LOGIN" ? navigate("/login") : logoutHandler();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link className="nav-title" to="/">
            NOVAKART
          </Link>
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
            <Link to="/profile" className="nav-link">
              <span className="nav-user-name">
                {user ? `Hi, ${user.firstName}` : null}
              </span>
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <i className="fas fa-heart"></i>
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
              <i className="fas fa-shopping-cart"></i>
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
              className="btn btn-primary"
              onClick={() => userHandler(checkStatus(user))}
            >
              {checkStatus(user)}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
