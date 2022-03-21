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
            {products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </section>
      </main>
      <ProductPagination />
    </>
  );
};

export { ProductListing };
