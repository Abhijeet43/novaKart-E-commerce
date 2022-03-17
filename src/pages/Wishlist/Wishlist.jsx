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
            image={productOne}
            alt={"Red T-Shirt"}
            title={"Red T-Shirt"}
            badge={"New"}
            price={"499"}
            priceBefore={"1299"}
            discount={"62"}
          />

          <ProductCard
            image={productThree}
            alt={"Gray Track"}
            title={"Gray Track"}
            badge={"New"}
            price={"899"}
            priceBefore={"1299"}
            discount={"32"}
          />
          <ProductCard
            image={productFour}
            alt={"Blue T-Shirt"}
            title={"Blue T-Shirt"}
            badge={"New"}
            price={"699"}
            priceBefore={"899"}
            discount={"42"}
          />
          <ProductCard
            image={productFive}
            alt={"White Shoes"}
            title={"White Shoes"}
            badge={"New"}
            price={"499"}
            priceBefore={"1299"}
            discount={"62"}
          />
        </div>
      </section>
    </main>
  );
};

export { Wishlist };
