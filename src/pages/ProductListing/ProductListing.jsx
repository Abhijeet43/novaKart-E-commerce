import React from "react";
import "./ProductListing.css";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
  productSeven,
  productEight,
  productNine,
  productTen,
  productEleven,
  productTwelve,
} from "../../assets/index";

import { Filters } from "./components/Filters/Filters";
import { ProductCard } from "../../components/index";
import { ProductPagination } from "./components/ProductPagination/ProductPagination";

const ProductListing = () => {
  return (
    <main className="product-listing-section">
      <Filters />
      <section className="all-products">
        <div className="nav-search">
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="search"
            className="nav-search"
            placeholder="search items here"
          />
        </div>
        <h2 className="section-title">All Products</h2>
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
          <ProductCard
            cardImage={productNine}
            cardAlt={"Black and Yellow Watch"}
            cardTitle={"Black and Yellow Watch"}
            cardBadge={"New"}
            cardPrice={"1599"}
            cardPriceBefore={"3999"}
            cardDiscount={"50"}
          />
          <ProductCard
            cardImage={productTen}
            cardAlt={"Black Sports Shoes"}
            cardTitle={"Black Sports Shoes"}
            cardBadge={"New"}
            cardPrice={"999"}
            cardPriceBefore={"1299"}
            cardDiscount={"30"}
          />
          <ProductCard
            cardImage={productEleven}
            cardAlt={"White Loafers"}
            cardTitle={"White Loafers"}
            cardBadge={"New"}
            cardPrice={"999"}
            cardPriceBefore={"1299"}
            cardDiscount={"20"}
          />
          <ProductCard
            cardImage={productTwelve}
            cardAlt={"Black Track"}
            cardTitle={"Black Track"}
            cardBadge={"New"}
            cardPrice={"499"}
            cardPriceBefore={"899"}
            cardDiscount={"40"}
          />
        </div>
        <ProductPagination />
      </section>
    </main>
  );
};

export { ProductListing };
