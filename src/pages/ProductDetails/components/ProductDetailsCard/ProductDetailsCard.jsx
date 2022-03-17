import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetailsCard.css";

const ProductDetailsCard = ({
  product: {
    imageSrc,
    title,
    price,
    discount,
    categoryName,
    rating,
    description,
    sizes,
  },
  categoryId,
}) => {
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

        <select name="sizes" className="size-select">
          <option>Select Size</option>
          {sizes.map((size) => {
            return <option value={size}>{size}</option>;
          })}
        </select>

        <input
          type="number"
          name="quantity"
          className="quantity-select"
          value="1"
        />
        <a href="#" className="btn btn-primary">
          Add To Cart
        </a>
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
