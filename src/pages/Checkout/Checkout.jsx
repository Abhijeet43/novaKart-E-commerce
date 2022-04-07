import React, { useState } from "react";
import { useCart, useAddress } from "../../context/";
import "./Checkout.css";
import { getCartTotal, getTotalCartItems } from "../../functions/";
import { CheckoutAddressCard } from "./components/CheckoutAddressCard/CheckoutAddressCard";
import { OrderProducts } from "./components/OrderProducts/OrderProducts";
import { BillDetails } from "./components/BillDetails/BillDetails";
import { DeliveryAddress } from "./components/DeliveryAddress/DeliveryAddress";
import { Link } from "react-router-dom";

const Checkout = () => {
  const {
    cartState: { cart },
  } = useCart();

  const [selectedAddress, setSelectedAddress] = useState("");

  const {
    addressState: { address },
  } = useAddress();

  const { totalPrice, totalDiscount } = getCartTotal(cart);
  const cartItems = getTotalCartItems(cart);

  return (
    <>
      <h2 className="section-title">Check Out</h2>
      <main className="checkout-section">
        <div className="addresses">
          {address.length > 0 ? (
            address.map((addressItem) => {
              return (
                <CheckoutAddressCard
                  key={addressItem._id}
                  address={addressItem}
                  setSelectedAddress={setSelectedAddress}
                />
              );
            })
          ) : (
            <div className="address-blank-text">
              <span className="blank-text">
                You currently donot have any addresses stored
              </span>
              <Link className="btn btn-primary" to="/profile/address">
                Add New Address
              </Link>
            </div>
          )}
        </div>
        <div className="order-summary">
          <h3 className="order-summary-title">Order Details</h3>
          {cart.length > 0 ? (
            cart.map((item) => {
              return <OrderProducts key={item._id} item={item} />;
            })
          ) : (
            <div className="order-text">
              "Currently No Products to show.. Add some products to cart"
              <Link to="/products" className="btn btn-primary">
                Add Products
              </Link>
            </div>
          )}
          {cart.length > 0 ? (
            <>
              <BillDetails
                totalPrice={totalPrice}
                totalDiscount={totalDiscount}
                cartItems={cartItems}
              />
              <DeliveryAddress address={selectedAddress} />
              <button
                className="btn btn-primary"
                disabled={selectedAddress ? false : true}
              >
                Place Order
              </button>
            </>
          ) : null}
        </div>
      </main>
    </>
  );
};

export { Checkout };
