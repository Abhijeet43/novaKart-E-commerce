import React from "react";
import "./CartTotal.css";
import { useCart } from "../../../../context";
import { getTotalCartItems } from "../../../../functions";
import { Link } from "react-router-dom";

const CartTotal = ({
  setOpenCouponModal,
  couponDiscountPrice,
  totalDiscount,
  totalPrice,
}) => {
  const {
    cartState: { cart },
  } = useCart();

  return (
    <section className="cart-price-container">
      <h2 className="price-heading">Price Total</h2>
      <div className="apply-coupon-container">
        <button
          className="apply-coupon-btn"
          onClick={() => setOpenCouponModal(true)}
        >
          <i className="fas fa-tags"></i> Apply Coupon
        </button>
      </div>
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
          <span className="price-item">Delivery Charges</span>
          <span className="price-item">Seller Discount</span>
          <span className="price-item">Cumm. Total</span>
          <span className="price-item coupon">Coupon Discount</span>
          <span className="price-item total">Total Amount</span>
        </div>
        <div className="prices">
          <span className="price-item">₹{totalPrice}</span>
          <span className="price-item">FREE</span>
          <span className="price-item">-₹{totalDiscount}</span>
          <span className="price-item">₹{totalPrice - totalDiscount}</span>
          <span className="price-item coupon">-₹{couponDiscountPrice}</span>
          <span className="price-item total">
            ₹{totalPrice - totalDiscount - couponDiscountPrice}
          </span>
        </div>
      </div>
      <p class="savings">You save  <span className="success">₹{totalDiscount + couponDiscountPrice}</span></p>
      <Link to="/checkout" className="cart-btn-order">
        Check Out
      </Link>
    </section>
  );
};

export { CartTotal };
