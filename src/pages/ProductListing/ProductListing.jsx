import React from "react";
import "./ProductListing.css";
import { ProductCard, ProductPagination, Filters } from "../../components/";
import { useData } from "../../context/";

const ProductListing = () => {
  const {
    dataState: { products, categories },
  } = useData();

  return (
    <>
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
            {products.map(
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

export { ProductListing };
