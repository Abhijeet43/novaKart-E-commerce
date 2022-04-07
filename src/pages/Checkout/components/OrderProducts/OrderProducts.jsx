import React from "react";
import "./OrderProducts.css";

const OrderProducts = ({ item }) => {
  return (
    <div className="order-product">
      <h3>{item.title}</h3>
      <div className="order-details">
        <p>Quantity: {item.qty}</p>
        <p>Final Price: Rs.{item.price * item.qty}</p>
      </div>
    </div>
  );
};

export { OrderProducts };
