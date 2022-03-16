import React from "react";
import "./RelatedProducts.css";

import { ProductCard } from "../../../../components/ProductCard/ProductCard";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
} from "../../../../assets/index";

const RelatedProducts = () => {
  return (
    <section className="related-products">
      <div className="related-products-header">
        <h2 className="related-products-title">Related Products</h2>
        <a href="#" className="section-link">
          View All
        </a>
      </div>
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
  );
};

export { RelatedProducts };
