import React from "react";
import "./CartTotal.css";

const CartTotal = () => {
  return (
    <section className="cart-price-container">
      <h2 className="price-heading">Price Total</h2>
      <div className="price-details">
        <div>
          <span className="price-item">
            Price <span>(3 items)</span>
          </span>
          <span className="price-item">Discount</span>
          <span className="price-item">Delivery Charges</span>
          <span className="price-item coupon">Apply Coupon</span>
          <span className="price-item total">Total Amount</span>
        </div>
        <div className="prices">
          <span className="price-item">₹1800</span>
          <span className="price-item">-₹400</span>
          <span className="price-item">₹50</span>
          <span className="price-item coupon">
            <input type="text" id="" className="coupon-input" />
          </span>
          <span className="price-item total">₹1250</span>
        </div>
      </div>
      <button className="cart-btn cart-btn-order">Place Order</button>
    </section>
  );
};

export { CartTotal };
