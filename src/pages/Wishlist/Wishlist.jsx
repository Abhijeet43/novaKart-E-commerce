import React from "react";
import "./Wishlist.css";
import { ProductCard } from "../../components/index";

import {
  productOne,
  productThree,
  productFour,
  productFive,
} from "../../assets/index";

const Wishlist = () => {
  return (
    <main className="main-section">
      <section className="wishlist-products">
        <h2 className="section-title">
          My Wishlist <span className="wishlist-items">(4)</span>
        </h2>
        <div className="card-container">
          <ProductCard
            cardImage={productOne}
            cardAlt={"Red T-Shirt"}
            cardTitle={"Red T-Shirt"}
            cardBadge={"New"}
            cardPrice={"499"}
            cardPriceBefore={"1299"}
            cardDiscount={"62"}
          />
          <ProductCard
            cardImage={productThree}
            cardAlt={"Gray Track"}
            cardTitle={"Gray Track"}
            cardBadge={"New"}
            cardPrice={"899"}
            cardPriceBefore={"1299"}
            cardDiscount={"32"}
          />
          <ProductCard
            cardImage={productFour}
            cardAlt={"Blue T-Shirt"}
            cardTitle={"Blue T-Shirt"}
            cardBadge={"New"}
            cardPrice={"699"}
            cardPriceBefore={"899"}
            cardDiscount={"42"}
          />
          <ProductCard
            cardImage={productFive}
            cardAlt={"White Shoes"}
            cardTitle={"White Shoes"}
            cardBadge={"New"}
            cardPrice={"499"}
            cardPriceBefore={"1299"}
            cardDiscount={"62"}
          />
        </div>
      </section>
    </main>
  );
};

export { Wishlist };
