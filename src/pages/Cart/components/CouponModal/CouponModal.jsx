import React from "react";
import "./CouponModal.css";
import { useCart } from "../../../../context/";

const CouponModal = ({ openCouponModal, setOpenCouponModal, totalPrice }) => {
  const {
    cartState: { couponDiscount },
    cartDispatch,
  } = useCart();
  return (
    <div>
      <section
        onClick={() => setOpenCouponModal(false)}
        className={`coupon-overlay ${openCouponModal ? "active" : ""}`}
      ></section>
      <section className={`coupon-modal ${openCouponModal ? "active" : ""}`}>
        <div className="coupon-header">
          <h3>Select Coupon</h3>
          <button
            className="close-coupon-modal"
            onClick={() => setOpenCouponModal(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="coupon-container">
          <div className="input-group">
            <input
              type="radio"
              disabled={totalPrice < 5000}
              name="discount"
              id="discount10"
              checked={couponDiscount === "10"}
              value="10"
              onChange={(e) =>
                cartDispatch({ type: "COUPON", payload: e.target.value })
              }
            />
            <label htmlFor="discount10">
              NOVA10 -10% Off on order above ₹5000
            </label>
          </div>
          <div className="input-group">
            <input
              type="radio"
              disabled={totalPrice < 8000}
              name="discount"
              id="discount15"
              value="15"
              checked={couponDiscount === "15"}
              onChange={(e) =>
                cartDispatch({ type: "COUPON", payload: e.target.value })
              }
            />
            <label htmlFor="discount15">
              NOVA15 - 15% Off on order above ₹8000
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export { CouponModal };
