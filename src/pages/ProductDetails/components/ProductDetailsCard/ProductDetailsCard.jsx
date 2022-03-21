import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../../../context/";
import { addToCartHandler, checkAction } from "../../../../functions/";
import "./ProductDetailsCard.css";

const ProductDetailsCard = ({ product, categoryId }) => {
  const {
    authState: { token },
  } = useAuth();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
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
        <p className="product-section">
          Home / <Link to={`/categories/${categoryId}`}>{categoryName}</Link>
        </p>
        <h1 className="product-title">{title}</h1>
        <p className="product-price">
          ₹{price} <small className="price-before">₹{priceBefore}</small>
          <small className="price-discount">{discount}%OFF</small>
        </p>

        <select
          name="sizes"
          className="size-select"
          onChange={(e) => setSize(e.target.value)}
        >
          <option>Select Size</option>
          {sizes.map((size, index) => {
            return (
              <option key={index} value={size}>
                {size}
              </option>
            );
          })}
        </select>
        <button
          onClick={() =>
            token
              ? checkAction(id, cart) === "ADD TO CART"
                ? addToCartHandler(token, { ...product, size }, cartDispatch)
                : navigate("/cart")
              : navigate("/login")
          }
          className={`btn  btn-primary details-btn ${
            checkAction(id, cart) === "GO TO CART" ? "success-bg" : null
          }`}
        >
          {checkAction(id, cart)}
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
