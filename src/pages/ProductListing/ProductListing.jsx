import React from "react";
import "./ProductListing.css";
import { ProductCard, ProductPagination, Filters } from "../../components/";
import { useData, useFilter } from "../../context/";
import {
  sortData,
  ratingData,
  getOutOfStockData,
  filterPriceData,
  categoryData,
} from "../../functions/";

const ProductListing = () => {
  const {
    dataState: { products, categories },
  } = useData();

  const {
    filterState: {
      sortBy,
      category,
      rating,
      includeOutOfStock,
      priceRangeValue,
    },
  } = useFilter();

  const categorizedData = categoryData(products, category);
  const ratedData = ratingData(categorizedData, rating);
  const getOutOfStockedData = getOutOfStockData(ratedData, includeOutOfStock);
  const filteredData = filterPriceData(getOutOfStockedData, priceRangeValue);
  const sortedData = sortData(filteredData, sortBy);

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
            {sortedData.length > 0 ? (
              sortedData.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })
            ) : (
              <h1>No Data to show</h1>
            )}
          </div>
        </section>
      </main>
      <ProductPagination />
    </>
  );
};

export { ProductListing };
