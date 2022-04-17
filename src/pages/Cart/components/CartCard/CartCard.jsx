import React, { useState } from "react";
import { useAuth, useCart, useWishlist } from "../../../../context/";
import {
  removeFromCartHandler,
  updateCartHandler,
  moveToWishListHandler,
} from "../../../../functions/";
import "./CartCard.css";

const CartCard = ({ product }) => {
  const { _id: id, imageSrc, title, size, price, discount, qty } = product;

  const {
    authState: { token },
  } = useAuth();

  const { cartDispatch } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const priceBefore =
    Number(price) +
    +Math.round(Number.parseFloat(price * (discount / 100)).toFixed(2));
  return (
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={imageSrc} alt={title} loading="lazy" />
      </div>
      <div className="cart-card-content">
        <div className="cart-card-text">
          <h2 className="cart-card-title">{title}</h2>

          <div className="cart-card-quantity">
            <button
              disabled={isProcessing}
              className="qty-btn"
              onClick={() =>
                qty <= 1
                  ? removeFromCartHandler(token, id, cartDispatch)
                  : updateCartHandler(
                      token,
                      id,
                      cartDispatch,
                      "decrement",
                      setIsProcessing
                    )
              }
            >
              <i
                className={`fas ${qty === 1 ? "fa-trash-alt" : "fa-minus"}`}
              ></i>
            </button>
            <p className="qty-text">{qty}</p>
            <button
              className="qty-btn"
              disabled={isProcessing}
              onClick={() =>
                updateCartHandler(
                  token,
                  id,
                  cartDispatch,
                  "increment",
                  setIsProcessing
                )
              }
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <p className="cart-card-size">
            Size: <strong>{size}</strong>
          </p>
          <div className="cart-card-rating">
            <ul className="stars">
              <li className="star star-filled">
                <i className="fas fa-star"></i>
              </li>
              <li className="star star-filled">
                <i className="fas fa-star"></i>
              </li>
              <li className="star star-filled">
                <i className="fas fa-star"></i>
              </li>
              <li className="star star-filled">
                <i className="fas fa-star"></i>
              </li>
              <li className="star">
                <i className="fas fa-star"></i>
              </li>
            </ul>
          </div>
          <p className="cart-card-price">
            ₹{price}{" "}
            <small className="cart-card-price-before">₹{priceBefore}</small>
            <small className="cart-card-price-discount">{discount}%OFF</small>
          </p>
        </div>
        <div className="cart-card-action">
          <button
            onClick={() =>
              moveToWishListHandler(
                token,
                product,
                wishlistDispatch,
                cartDispatch,
                wishlist,
                setIsProcessing
              )
            }
            className="cart-btn btn-outline-primary"
          >
            Move to Wishlist
          </button>
          <button
            onClick={() => removeFromCartHandler(token, id, cartDispatch)}
            className="cart-btn btn-outline-danger"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
