import React from "react";
import "./Cart.css";
import { CartCard } from "./components/CartCard/CartCard";
import { CartTotal } from "./components/CartTotal/CartTotal";
import { productOne, productThree, productFour } from "../../assets/index";

const Cart = () => {
  return (
    <main className="main-section">
      <section className="cart-products">
        <h2 className="cart-title">
          My Cart <small className="cart-total-items">(3 Items)</small>
        </h2>

        <section className="cart-container">
          <section className="cart-items">
            <CartCard
              cardImage={productOne}
              cardAlt={"Red T-Shirt"}
              cardTitle={"Red T-Shirt"}
              cardSize={"XL"}
              cardPrice={"699"}
              cardPriceBefore={"1299"}
              cardDiscount={"50"}
            />
            <CartCard
              cardImage={productThree}
              cardAlt={"Gray Track"}
              cardTitle={"Gray Track"}
              cardSize={"XL"}
              cardPrice={"499"}
              cardPriceBefore={"1099"}
              cardDiscount={"40"}
            />
            <CartCard
              cardImage={productFour}
              cardAlt={"Blue T-Shirt"}
              cardTitle={"Blue T-Shirt"}
              cardSize={"L"}
              cardPrice={"799"}
              cardPriceBefore={"1299"}
              cardDiscount={"40"}
            />
          </section>
          <CartTotal />
        </section>
      </section>
    </main>
  );
};

export { Cart };
