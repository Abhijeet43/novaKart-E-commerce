import React from "react";
import "./BillDetails.css";

const BillDetails = ({ totalPrice, totalDiscount, cartItems }) => {
  return (
    <div className="bill-details">
      <ul className="bill-items">
        <li className="bill-item">
          <span>Total Items</span>
          <span>{cartItems}</span>
        </li>
        <li className="bill-item">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </li>
        <li className="bill-item">
          <span>Total Discount</span>
          <span>₹{totalDiscount}</span>
        </li>
        <li className="bill-item">
          <span>Delivery Charges</span>
          <span>₹0</span>
        </li>
        <li className="bill-item">
          <span>Total Amount Payable</span>
          <span>₹{totalPrice - totalDiscount}</span>
        </li>
      </ul>
    </div>
  );
};

export { BillDetails };
