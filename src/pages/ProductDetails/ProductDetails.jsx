import React from "react";
import { ProductDetailsCard } from "./components/ProductDetailsCard/ProductDetailsCard";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";

import { useData } from "../../context/data-context";
import { getCategoryId } from "../../functions/category";
import { getProduct } from "../../functions/products";

const ProductDetails = () => {
  const {
    dataState: { products, categories },
  } = useData();

  const { productId } = useParams();

  const product = getProduct(products, productId);
  const categoryId = getCategoryId(categories, product.categoryName);

  return (
    <main className="main-section">
      <ProductDetailsCard product={product} categoryId={categoryId} />
      <RelatedProducts
        category={product.categoryName}
        id={product.id}
        categoryId={categoryId}
      />
    </main>
  );
};

export { ProductDetails };
