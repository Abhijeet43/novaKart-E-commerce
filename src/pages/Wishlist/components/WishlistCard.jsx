import React from "react";
import "./WishlistCard.css";
import { Link, useNavigate } from "react-router-dom";
import {
  checkWishlistActionHandler,
  checkWishlistAction,
  moveToCartHandler,
} from "../../../functions/";
import { useAuth, useCart, useWishlist } from "../../../context/";

const WishlistCard = ({ product }) => {
  const {
    _id: id,
    imageSrc: image,
    title,
    badge,
    price,
    discount,
    size,
  } = product;

  const navigate = useNavigate();

  const {
    authState: { token },
  } = useAuth();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const priceBefore =
    Number(price) +
    +Math.round(Number.parseFloat(price * (discount / 100)).toFixed(2));

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      {badge ? <div className="card-badge">{badge}</div> : ""}
      <button
        className="card-icon"
        onClick={() =>
          checkWishlistActionHandler(
            id,
            wishlist,
            token,
            product,
            wishlistDispatch
          )
        }
      >
        <i
          className={`${
            checkWishlistAction(id, wishlist) === "Remove"
              ? "fa-solid"
              : "fa-regular"
          } fa-heart`}
        ></i>
      </button>
      <div className="card-head">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <div className="card-rating">
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
            <li className="star">
              <i className="fas fa-star"></i>
            </li>
            <li className="star">
              <i className="fas fa-star"></i>
            </li>
          </ul>
        </div>
        <p className="size">
          Size: <strong>{size}</strong>
        </p>
        <div className="card-text">
          <p className="card-price">
            ₹{price} <small className="price-before">₹{priceBefore}</small>
            <small className="price-discount">{discount}%OFF</small>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/products/${id}`} className="card-btn card-btn-outline">
          <i className="fa-solid fa-eye"></i>
          <span className="card-btn-text">View Item</span>
        </Link>
        <button
          onClick={() =>
            moveToCartHandler(
              token,
              product,
              cartDispatch,
              cart,
              wishlistDispatch
            )
          }
          className="card-btn card-btn-solid"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="card-btn-text">Move To Cart</span>
        </button>
      </div>
    </div>
  );
};

export { WishlistCard };
