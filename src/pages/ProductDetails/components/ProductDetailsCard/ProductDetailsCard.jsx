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
    <section class="product-details-section">
      <div class="product-img">
        <img src={cardImage} alt={cardAlt} />
      </div>
      <div class="product-details">
        <p class="product-section">Home / {cardCategory}</p>
        <h1 class="product-title">{cardTitle}</h1>
        <p class="product-price">
          ₹{cardPrice} <small class="price-before">₹{cardPriceBefore}</small>
          <small class="price-discount">{cardDiscount}%OFF</small>
        </p>
        <select name="sizes" class="size-select">
          <option>Select Size</option>
          <option value="xxl">XXL</option>
          <option value="xl">XL</option>
          <option value="large">L</option>
          <option value="medium">M</option>
        </select>
        <input
          type="number"
          name="quantity"
          class="quantity-select"
          value="1"
        />
        <a href="#" class="btn btn-primary">
          Add To Cart
        </a>
        <h3 class="product-description-title">
          Product Description <i class="fas fa-indent"></i>
        </h3>
        <br />
        <p class="product-description">{cardDescription}</p>
      </div>
    </section>
  );
};

export { ProductDetailsCard };
