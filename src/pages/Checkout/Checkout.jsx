import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCart, useAddress, useAuth, useOrders } from "../../context/";
import "./Checkout.css";
import {
  getCartTotal,
  getTotalCartItems,
  getCouponDiscountedPrice,
  removeFromCartHandler,
} from "../../functions/";
import { CheckoutAddressCard } from "./components/CheckoutAddressCard/CheckoutAddressCard";
import { OrderProducts } from "./components/OrderProducts/OrderProducts";
import { BillDetails } from "./components/BillDetails/BillDetails";
import { DeliveryAddress } from "./components/DeliveryAddress/DeliveryAddress";
import { Link } from "react-router-dom";
import { brandLogo } from "../../assets/";

const Checkout = () => {
  const {
    cartState: { cart, couponDiscount },
    cartDispatch,
  } = useCart();

  const { setOrders } = useOrders();

  const {
    authState: { user, token },
  } = useAuth();

  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState("");

  const {
    addressState: { address },
  } = useAddress();

  const { totalPrice, totalDiscount } = getCartTotal(cart);
  //calculating coupon discount
  const discountedPrice = totalPrice - totalDiscount;

  const couponDiscountPrice = getCouponDiscountedPrice(
    couponDiscount,
    discountedPrice
  );

  const amountToBePayed = totalPrice - totalDiscount - couponDiscountPrice;

  const cartItems = getTotalCartItems(cart);

  const loadSdk = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const placeOrder = async () => {
    const response = await loadSdk();
    if (response) {
      const options = {
        key: "rzp_test_IAgo0oFjYu4OeQ",
        key_id: "rzp_test_IAgo0oFjYu4OeQ",
        key_secret: "DWbXpkhFJyuIUzGlsui36zP4",
        amount: amountToBePayed * 100,
        currency: "INR",
        name: "Nova Kart",
        description: "Thank you for shopping with us",
        image: brandLogo,
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: user.firstName,
          email: user.email,
          contact: "8883452314",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#7d4cc8" },
        handler: function (response) {
          setOrders((prevState) => [
            ...prevState,
            {
              _id: uuid(),
              date: new Date().toDateString(),
              address: selectedAddress,
              cart,
              totalPrice,
              amountToBePayed,
              discount: totalPrice + couponDiscountPrice,
            },
          ]);
          cart.map((item) =>
            removeFromCartHandler(token, item._id, cartDispatch, "empty")
          );
          navigate("/products");
          toast.success("Order Placed Successfully");
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        toast.error("Something went wrong", response.error.code);
      });
    } else {
      toast.error("Something went wrong");
    }
  };

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
                couponDiscountPrice={couponDiscountPrice}
                amountToBePayed={amountToBePayed}
                cartItems={cartItems}
              />
              <DeliveryAddress address={selectedAddress} />
              <button
                className="btn btn-primary"
                disabled={selectedAddress ? false : true}
                onClick={placeOrder}
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
