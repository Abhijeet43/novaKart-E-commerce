import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../../../context/";
import {
  addToCartHandler,
  checkWishlistActionHandler,
  checkWishlistAction,
  moveToCartHandler,
  getProduct,
} from "../../../../functions/";
import "./ProductDetailsCard.css";

const ProductDetailsCard = ({ product, categoryId }) => {
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

  const [size, setSize] = useState(product.sizes[0]);

  const navigate = useNavigate();

  const {
    _id: id,
    imageSrc,
    title,
    price,
    discount,
    categoryName,
    rating,
    description,
    sizes,
  } = product;

  const priceBefore =
    Number(price) +
    +Math.round(Number.parseFloat(price * (discount / 100)).toFixed(2));

  return (
    <section className="product-details-section">
      <div className="product-img">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="product-details">
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
        <p className="product-section">
          Home / <Link to={`/categories/${categoryId}`}>{categoryName}</Link>
        </p>
        <h1 className="product-title">{title}</h1>
        <p className="product-price">
          ₹{price} <small className="price-before">₹{priceBefore}</small>
          <small className="price-discount">{discount}%OFF</small>
        </p>
        <select
          defaultValue={
            wishlist.length > 0 ? getProduct(wishlist, id).size : null
          }
          name="sizes"
          className="size-select"
          onChange={(e) => setSize(e.target.value)}
        >
          {sizes.map((size, index) => {
            return (
              <option key={index} value={size}>
                {size}
              </option>
            );
          })}
        </select>
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
        <button
          className="btn btn-primary details-btn"
          onClick={() =>
            token
              ? checkWishlistAction(id, wishlist) === "Remove"
                ? moveToCartHandler(
                    token,
                    product,
                    cartDispatch,
                    cart,
                    wishlistDispatch
                  )
                : addToCartHandler(
                    token,
                    { ...product, size },
                    cartDispatch,
                    cart
                  )
              : navigate("/login")
          }
        >
          {checkWishlistAction(id, wishlist) === "Remove"
            ? "Move To Cart"
            : "Add To Cart"}
        </button>
        <h3 className="product-description-title">
          Product Description <i className="fas fa-indent"></i>
        </h3>
        <br />
        <p className="product-description">{description}</p>
      </div>
    </section>
  );
};

export { ProductDetailsCard };
