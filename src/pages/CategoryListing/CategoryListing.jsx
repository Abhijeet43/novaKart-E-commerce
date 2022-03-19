import React from "react";

import "./CategoryListing.css";

import { ProductPagination, ProductCard, Filters } from "../../components";
import { useData } from "../../context/";
import { getCategoryName, getCategoryProducts } from "../../functions/";
import { useParams } from "react-router-dom";

const CategoryListing = () => {
  const {
    dataState: { products, categories },
  } = useData();
  const { categoryId } = useParams();
  const [categoryName, description] = getCategoryName(categories, categoryId);
  const categoryProducts = getCategoryProducts(products, categoryName);

  return (
    <>
      <main className="category-listing-section">
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
          <h2 className="section-title">{categoryName}</h2>
          <p className="description">{description}</p>
          <div className="card-container">
            {categoryProducts.map(
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
      </main>
      <ProductPagination />
    </>
  );
};

export { CategoryListing };
