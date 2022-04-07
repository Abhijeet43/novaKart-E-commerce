import React from "react";
import "./CartTotal.css";
import { useCart } from "../../../../context";
import { getCartTotal, getTotalCartItems } from "../../../../functions";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const {
    cartState: { cart },
  } = useCart();

  const { totalPrice, totalDiscount } = getCartTotal(cart);
  return (
    <section className="cart-price-container">
      <h2 className="price-heading">Price Total</h2>
      <div className="price-details">
        <div>
          <span className="price-item">
            Price{" "}
            <span>
              (
              {`${getTotalCartItems(cart)} ${
                getTotalCartItems(cart) > 1 ? "Items" : "Item"
              }`}
              )
            </span>
          </span>
          <span className="price-item">Discount</span>
          <span className="price-item">Delivery Charges</span>
          <span className="price-item coupon">Apply Coupon</span>
          <span className="price-item total">Total Amount</span>
        </div>
        <div className="prices">
          <span className="price-item">₹{totalPrice}</span>
          <span className="price-item">-₹{totalDiscount}</span>
          <span className="price-item">FREE</span>
          <span className="price-item coupon">
            <input type="text" id="" className="coupon-input" />
          </span>
          <span className="price-item total">
            ₹{totalPrice - totalDiscount}
          </span>
        </div>
      </div>

      <Link to="/checkout" className="cart-btn-order">
        Check Out
      </Link>
    </section>
  );
};

export { CartTotal };
