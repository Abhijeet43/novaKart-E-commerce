import React from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCartHandler,
  checkWishlistActionHandler,
  checkWishlistAction,
} from "../../functions/";
import { useAuth, useCart, useWishlist } from "../../context/";

const ProductCard = ({ product }) => {
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

  const navigate = useNavigate();

  const size = sizes[0];

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
      {inStock ? null : (
        <div className="overlay">
          <p className="overlay-text">Out Of Stock</p>
        </div>
      )}
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      {badge ? <div className="card-badge">{badge}</div> : ""}
      <button
        className="card-icon"
        onClick={() =>
          token
            ? checkWishlistActionHandler(
                id,
                wishlist,
                token,
                { ...product, size },
                wishlistDispatch
              )
            : navigate("/login")
        }
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
                <li className="star star-filled">
                  <i className="fas fa-star"></i>
                </li>
              ) : (
                <li className="star">
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
          <i className="fa-solid fa-eye"></i>
          <span className="card-btn-text">View Item</span>
        </Link>
        <button
          className="card-btn card-btn-solid"
          onClick={() =>
            token
              ? addToCartHandler(
                  token,
                  { ...product, size },
                  cartDispatch,
                  cart
                )
              : navigate("/login")
          }
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="card-btn-text">Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
