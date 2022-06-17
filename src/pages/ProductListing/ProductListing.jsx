import React, { useState } from "react";
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const {
    dataState: { products },
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

  const mobileFilterOpenHandler = () => setMobileFilterOpen(true);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const categorizedData = categoryData(currentProducts, category);
  const ratedData = ratingData(categorizedData, rating);
  const getOutOfStockedData = getOutOfStockData(ratedData, includeOutOfStock);
  const filteredData = filterPriceData(getOutOfStockedData, priceRangeValue);
  const sortedData = sortData(filteredData, sortBy);

  return (
    <>
      <main className="product-listing-section">
        <Filters
          mobileFilterOpen={mobileFilterOpen}
          setMobileFilterOpen={setMobileFilterOpen}
        />
        <section className="all-products">
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
          <div className="filter-btn-container">
            <button onClick={mobileFilterOpenHandler} className="filter-btn">
              Filter
            </button>
          </div>
        </section>
      </main>
      <ProductPagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export { ProductListing };
