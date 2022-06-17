import React, { useState, useEffect } from "react";

import "./CategoryListing.css";

import { ProductPagination, ProductCard, Filters } from "../../components";
import { useData, useFilter, useLoader } from "../../context/";
import { getCategoryName, getCategoryProducts } from "../../functions/";
import { useParams } from "react-router-dom";

import {
  sortData,
  ratingData,
  getOutOfStockData,
  filterPriceData,
  getCategories,
  getProducts,
} from "../../functions/";

const CategoryListing = () => {
  const {
    filterState: { sortBy, rating, includeOutOfStock, priceRangeValue },
  } = useFilter();

  const { dataDispatch } = useData();

  let categoryProducts = [];
  let desc = null;
  let category = null;
  let sortedData = [];

  const { setLoader } = useLoader();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const { categoryId } = useParams();

  if (categories.length > 0 && products.length > 0) {
    const [categoryName, description] = getCategoryName(categories, categoryId);
    categoryProducts = getCategoryProducts(products, categoryName);
    desc = description;
    category = categoryName;
  }

  const mobileFilterOpenHandler = () => setMobileFilterOpen(true);

  if (categoryProducts.length > 0) {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = categoryProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const ratedData = ratingData(currentProducts, rating);
    const getOutOfStockedData = getOutOfStockData(ratedData, includeOutOfStock);
    const filteredData = filterPriceData(getOutOfStockedData, priceRangeValue);
    sortedData = sortData(filteredData, sortBy);
    console.log(sortedData);
  }

  useEffect(() => {
    getCategories(dataDispatch, setLoader, setCategories);
    getProducts(dataDispatch, setLoader, setProducts);
  }, []);

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
          <h2 className="section-title">{category}</h2>
          <p className="description">{desc}</p>
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
      {categoryProducts.length > 0 ? (
        <ProductPagination
          productsPerPage={productsPerPage}
          totalProducts={categoryProducts.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
};

export { CategoryListing };
