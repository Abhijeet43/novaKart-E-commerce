import React from "react";
import "./RelatedProducts.css";

import { ProductCard } from "../../../../components/ProductCard/ProductCard";
import { useData } from "../../../../context/";
import { getRelatedProducts } from "../../../../functions/";
import { Link } from "react-router-dom";

const RelatedProducts = ({ category, id, categoryId }) => {
  const {
    dataState: { products, categories },
  } = useData();

  const relatedProductsList = getRelatedProducts(products, category, id);

  return (
    <section className="related-products">
      <div className="related-products-header">
        <h2 className="related-products-title">Related Products</h2>
        <Link to={`/categories/${categoryId}`} className="section-link">
          View All
        </Link>
      </div>
      <div className="card-container">
        {relatedProductsList.map(
          ({ id, title, price, discount, imageSrc, badge, inStock }) => {
            return (
              <ProductCard
                key={id}
                id={id}
                title={title}
                alt={title}
                price={price}
                discount={discount}
                image={imageSrc}
                badge={badge}
                inStock={inStock}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export { RelatedProducts };
