import React from "react";
import "./Orders.css";
import { useOrders } from "../../context";
import { Link } from "react-router-dom";
import { getTotalCartItems } from "../../functions/";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <>
      <main className="orders-section">
        {orders.length > 0 ? (
          <>
            {orders.map((order, index) => {
              return (
                <div key={index} className="previous-orders">
                  <div className="order-description">
                    <h2 className="success order-title">Order Confirmed</h2>
                    <p className="order-date">{order.date}</p>
                    <p className="order-id">
                      Order Id: #{order._id.slice(0, 15)}
                    </p>

                    {order.cart.map((product) => {
                      return (
                        <div key={product._id} className="ordered-products">
                          <div>
                            <img
                              src={product.imageSrc}
                              className="prod-img"
                              alt="product"
                            />
                          </div>
                          <div className="order-products-details">
                            <h3>{product.name}</h3>
                            <p>Qty: {product.qty}</p>
                            <p>Price: {product.price}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <hr />
                  <div className="order-address">
                    <h3>Delivery Address:</h3>
                    <h4>{order.address.name}</h4>
                    <p>
                      {order.address.building}, {order.address.area},{" "}
                      {order.address.city}
                    </p>
                    <p>
                      {order.address.state}, India - {order.address.pincode}
                    </p>
                    <p>Mobile - {order.address.mobile}</p>
                  </div>
                  <hr />
                  <div className="order-price-details">
                    <h3>Price Details:</h3>
                    <ul className="bill-items">
                      <li className="bill-item">
                        <span>Total Items</span>
                        <span>{getTotalCartItems(order.cart)}</span>
                      </li>
                      <li className="bill-item">
                        <span>Total Price</span>
                        <span>₹{order.totalPrice}</span>
                      </li>
                      <li className="bill-item">
                        <span>Delivery Charges</span>
                        <span>₹0</span>
                      </li>
                      <li className="bill-item">
                        <span>Total Discount</span>
                        <span>₹{order.discount}</span>
                      </li>
                      <li className="bill-item">
                        <span>Total Amount Paid</span>
                        <span>₹{order.amountToBePayed}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="shop-btn-container">
              <Link to="/products" className="btn btn-primary">
                Shop More!!
              </Link>
            </div>
          </>
        ) : (
          <div className="no-orders">
            <p className="no-orders-text">You haven't shopped anything yet!!</p>
            <Link to="/products" className="btn btn-primary">
              Shop Something!!
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export { Orders };
