import React from "react";
import "./ProductDetailsCard.css";

const ProductDetailsCard = ({
  cardImage,
  cardAlt,
  cardCategory,
  cardTitle,
  cardDiscount,
  cardPriceBefore,
  cardPrice,
  cardDescription,
}) => {
  return (
    <section className="product-details-section">
      <div className="product-img">
        <img src={cardImage} alt={cardAlt} />
      </div>
      <div className="product-details">
        <p className="product-section">Home / {cardCategory}</p>
        <h1 className="product-title">{cardTitle}</h1>
        <p className="product-price">
          ₹{cardPrice}{" "}
          <small className="price-before">₹{cardPriceBefore}</small>
          <small className="price-discount">{cardDiscount}%OFF</small>
        </p>
        <select name="sizes" className="size-select">
          <option>Select Size</option>
          <option value="xxl">XXL</option>
          <option value="xl">XL</option>
          <option value="large">L</option>
          <option value="medium">M</option>
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
        <p className="product-description">{cardDescription}</p>
      </div>
    </section>
  );
};

export { ProductDetailsCard };
