import React from "react";
import "./Wishlist.css";
import { ProductCard } from "../../components/";

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
          <p>Wishlist is currently empty.</p>
        </div>
      </section>
    </main>
  );
};

export { Wishlist };
