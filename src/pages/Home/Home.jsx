import React from "react";
import "./Home.css";

import { Category } from "./components/Category/Category";
import { ProductCard } from "../../components/index";
import { Hero } from "./components/Hero/Hero";
import {
  categoryOne,
  categoryTwo,
  categoryThree,
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
  productSeven,
  productEight,
} from "../../assets/index";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="main-section">
        {/* <!-- CATEGORIES --> */}
        <section className="categories">
          <Category
            categoryTitle="Denims"
            categoryImage={categoryOne}
            catgoryAlt="denims-category"
          />
          <Category
            categoryTitle="Sneakers"
            categoryImage={categoryTwo}
            catgoryAlt="sneakers-category"
          />
          <Category
            categoryTitle="T-Shirts"
            categoryImage={categoryThree}
            catgoryAlt="tshirts-category"
          />
        </section>

        {/* <!-- FEATURED PRODUCTS --> */}
        <section className="featured-products">
          <h2 className="section-title">Featured Products</h2>
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
              cardImage={productTwo}
              cardAlt={"Black Shoes"}
              cardTitle={"Black Shoes"}
              cardBadge={"New"}
              cardPrice={"799"}
              cardPriceBefore={"1499"}
              cardDiscount={"50"}
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
          </div>
        </section>

        {/* <!-- LATEST-PRODUCTS --> */}
        <section className="latest-products">
          <h2 className="section-title">Latest Products</h2>
          <div className="card-container">
            <ProductCard
              cardImage={productFive}
              cardAlt={"White Shoes"}
              cardTitle={"White Shoes"}
              cardBadge={"New"}
              cardPrice={"499"}
              cardPriceBefore={"1299"}
              cardDiscount={"62"}
            />
            <ProductCard
              cardImage={productSix}
              cardAlt={"Black T-Shirt"}
              cardTitle={"Black T-Shirt"}
              cardBadge={"New"}
              cardPrice={"599"}
              cardPriceBefore={"1099"}
              cardDiscount={"40"}
            />
            <ProductCard
              cardImage={productSeven}
              cardAlt={"Pair of Socks"}
              cardTitle={"Pair of Socks"}
              cardBadge={"New"}
              cardPrice={"399"}
              cardPriceBefore={"799"}
              cardDiscount={"60"}
            />
            <ProductCard
              cardImage={productEight}
              cardAlt={"Black Watch"}
              cardTitle={"Black Watch"}
              cardBadge={"New"}
              cardPrice={"1299"}
              cardPriceBefore={"2299"}
              cardDiscount={"50"}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export { Home };
