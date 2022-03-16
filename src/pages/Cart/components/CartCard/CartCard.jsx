import React from "react";
import "./CartCard.css";

const CartCard = ({
  cardImage,
  cardAlt,
  cardTitle,
  cardPrice,
  cardPriceBefore,
  cardDiscount,
  cardSize,
}) => {
  return (
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={cardImage} alt={cardAlt} />
      </div>
      <div className="cart-card-content">
        <div className="cart-card-text">
          <h2 className="cart-card-title">{cardTitle}</h2>
          <label for="quantity-1" className="cart-card-quantity-label">
            Quantity
          </label>
          <input
            type="number"
            id="quantity-1"
            className="cart-card-quantity"
            value="1"
          />
          <p className="cart-card-size">
            Size: <strong>{cardSize}</strong>
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
            ₹{cardPrice}{" "}
            <small className="cart-card-price-before">₹{cardPriceBefore}</small>
            <small className="cart-card-price-discount">
              {cardDiscount}%OFF
            </small>
          </p>
        </div>
        <div className="cart-card-action">
          <button className="cart-btn btn-outline-primary">
            Move to Wishlist
          </button>
          <button className="cart-btn btn-outline-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
