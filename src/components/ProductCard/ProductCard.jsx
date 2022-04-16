import React, { useState } from "react";
import "./ProductCard.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  checkWishlistActionHandler,
  checkWishlistAction,
  checkItemInCart,
  addToCartHandler,
} from "../../functions/";

import { useAuth, useCart, useWishlist } from "../../context/";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const callAddToCartHandler = () => {
    if (token) {
      addToCartHandler(
        token,
        { ...product, size },
        cartDispatch,
        cart,
        setIsProcessing
      );
    } else {
      navigate("/login");
      toast.warning("You are not logged in");
    }
  };

  const callWishlistHandler = () => {
    if (token) {
      checkWishlistActionHandler(
        id,
        wishlist,
        token,
        { ...product, size },
        wishlistDispatch
      );
    } else {
      navigate("/login");
      toast.warning("You are not logged in");
    }
  };

  const {
    _id: id,
    imageSrc: image,
    title,
    badge,
    rating,
    price,
    discount,
    inStock,
    sizes,
  } = product;

  const size = sizes[0];

  const {
    authState: { token },
  } = useAuth();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist, wishlistDisable },
    wishlistDispatch,
  } = useWishlist();

  const priceBefore =
    Number(price) +
    +Math.round(Number.parseFloat(price * (discount / 100)).toFixed(2));

  return (
    <div className="card">
      {inStock ? null : (
        <div className="overlay">
          <p className="overlay-text">Out Of Stock</p>
        </div>
      )}
      <div className="card-img">
        <img src={image} alt={title} loading="lazy" />
      </div>
      {badge ? <div className="card-badge">{badge}</div> : ""}
      <button
        className="card-icon"
        disabled={wishlistDisable}
        onClick={callWishlistHandler}
      >
        <i
          className={
            token
              ? `${
                  checkWishlistAction(id, wishlist) === "Remove"
                    ? "fa-solid"
                    : "fa-regular"
                } fa-heart`
              : "fa-regular fa-heart"
          }
        ></i>
      </button>
      <div className="card-head">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <div className="card-rating">
          <ul className="stars">
            {[...Array(5)].map((_, index) => {
              return rating > index ? (
                <li key={index} className="star star-filled">
                  <i className="fas fa-star"></i>
                </li>
              ) : (
                <li key={index} className="star">
                  <i className="fas fa-star"></i>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card-text">
          <p className="card-price">
            ₹{price} <small className="price-before">₹{priceBefore}</small>
            <small className="price-discount">{discount}%OFF</small>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/products/${id}`} className="card-btn card-btn-outline">
          <i className="fa-solid fa-eye view"></i>
          <span className="card-btn-text">View Item</span>
        </Link>
        {checkItemInCart(cart, id) ? (
          <button
            className="card-btn card-btn-green"
            onClick={() => navigate("/cart")}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="card-btn-text">Go To Cart</span>
          </button>
        ) : (
          <button
            className="card-btn card-btn-solid"
            onClick={callAddToCartHandler}
            disabled={isProcessing}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="card-btn-text">
              {isProcessing ? "Adding..." : "Add To Cart"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
