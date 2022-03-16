import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  cardImage,
  cardTitle,
  cardBadge,
  cardPrice,
  cardPriceBefore,
  cardDiscount,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={cardImage} alt="product-1.img" />
      </div>
      <div className="card-badge">{cardBadge}</div>
      <div className="card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--bi"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <g>
            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
          </g>
        </svg>
      </div>
      <div className="card-head">
        <h4 className="card-title">{cardTitle}</h4>
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
        <div className="card-text">
          <p className="card-price">
            ₹{cardPrice}{" "}
            <small className="price-before">₹{cardPriceBefore}</small>
            <small className="price-discount">{cardDiscount}%OFF</small>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <button className="card-btn">Add to Cart</button>
        <button className="card-btn">View Item</button>
      </div>
    </div>
  );
};

export { ProductCard };
