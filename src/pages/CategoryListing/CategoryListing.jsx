import React, { useState } from "react";

import "./CategoryListing.css";

import { ProductPagination, ProductCard, Filters } from "../../components";
import { useData, useFilter } from "../../context/";
import { getCategoryName, getCategoryProducts } from "../../functions/";
import { useParams } from "react-router-dom";

import {
  sortData,
  ratingData,
  getOutOfStockData,
  filterPriceData,
} from "../../functions/";

const CategoryListing = () => {
  const {
    dataState: { products, categories },
  } = useData();

  const {
    filterState: { sortBy, rating, includeOutOfStock, priceRangeValue },
  } = useFilter();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { categoryId } = useParams();

  const [categoryName, description] = getCategoryName(categories, categoryId);

  const categoryProducts = getCategoryProducts(products, categoryName);

  const mobileFilterOpenHandler = () => setMobileFilterOpen(true);

  const ratedData = ratingData(categoryProducts, rating);
  const getOutOfStockedData = getOutOfStockData(ratedData, includeOutOfStock);
  const filteredData = filterPriceData(getOutOfStockedData, priceRangeValue);
  const sortedData = sortData(filteredData, sortBy);

  return (
    <>
      <main className="category-listing-section">
        <Filters
          mobileFilterOpen={mobileFilterOpen}
          setMobileFilterOpen={setMobileFilterOpen}
          categoryCheck={"true"}
        />
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
            {sortedData.length > 0 ? (
              sortedData.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })
            ) : (
              <h1>No Data Available</h1>
            )}
          </div>
          <div className="filter-btn-container">
            <button onClick={mobileFilterOpenHandler} className="filter-btn">
              Filter
            </button>
          </div>
        </section>
      </main>
      <ProductPagination />
    </>
  );
};

export { CategoryListing };
