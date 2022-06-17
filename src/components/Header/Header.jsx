import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context/";
import { getTotalCartItems, getProducts } from "../../functions/";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const timerRef = useRef();
  const searchBarRef = useRef();

  const navigate = useNavigate();

  const checkStatus = (user) => (user ? `Hi, ${user.firstName}` : "LOGIN");

  const userHandler = async (type) => {
    type === "LOGIN" ? navigate("/login") : navigate("/profile/profileDetails");
  };

  useEffect(() => {
    clearTimeout(timerRef.current);
    setIsDebouncing(false);
    timerRef.current = setTimeout(() => {
      const availableProducts = products.filter(
        (product) =>
          searchQuery.length !== 0 &&
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedProducts(availableProducts);
      setIsDebouncing(true);
    }, 300);
  }, [searchQuery]);

  const navigateHandler = (productId) => {
    navigate(`products/${productId}`);
    setSearchQuery("");
  };

  const closeSearchBar = (e) => {
    if (!searchBarRef.current.contains(e.target)) {
      setShowSearchResult(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSearchBar);

    return () => {
      document.removeEventListener("click", closeSearchBar);
    };
  }, []);

  useEffect(() => getProducts("", "", setProducts), []);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link className="nav-title" to="/">
            NOVAKART
          </Link>
        </div>
        <div className="nav-search" ref={searchBarRef}>
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="search"
            className="search-input"
            placeholder="search items here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResult(true)}
          />
          {showSearchResult && isDebouncing && searchQuery ? (
            <div className="search-results">
              {searchedProducts.length > 0 ? (
                searchedProducts.map((product) => (
                  <div
                    className="searched-product"
                    onClick={() => navigateHandler(product._id)}
                  >
                    {product.title}
                  </div>
                ))
              ) : (
                <p className="not-found-text">No result found</p>
              )}
            </div>
          ) : null}
        </div>

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
