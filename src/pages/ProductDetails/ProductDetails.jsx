import React from "react";
import { ProductDetailsCard } from "./components/ProductDetailsCard/ProductDetailsCard";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";

import { galleryOne } from "../../assets/index";

const ProductDetails = () => {
  return (
    <main class="main-section">
      <ProductDetailsCard
        cardImage={galleryOne}
        cardCategory={"T-Shirts"}
        cardAlt={"Red T-Shirt"}
        cardTitle={"Red T-Shirt"}
        cardPriceBefore={"1299"}
        cardPrice={"899"}
        cardDiscount={"40"}
        cardDescription={
          "Give your summer wardrobe a style upgrade with this Men's Active T-Shirt.Team it with a pair of shorts for your morning workout or a denims for an evening out."
        }
      />
      <RelatedProducts />
    </main>
  );
};

export { ProductDetails };
