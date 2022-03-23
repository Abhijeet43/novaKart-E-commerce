import React from "react";
import "./Filters.css";
import { useFilter, useData } from "../../context/";

const Filters = ({ mobileFilterOpen, setMobileFilterOpen, categoryCheck }) => {
  const {
    filterState: {
      sortBy,
      category: categoryState,
      rating,
      priceRangeValue,
      includeOutOfStock,
    },
    filterDispatch,
  } = useFilter();

  const {
    dataState: { categories },
  } = useData();

  const mobileFilterClose = () => setMobileFilterOpen(false);

  return (
    <section
      className={mobileFilterOpen ? "filter-section active" : "filter-section"}
    >
      <div className="filter-heading">
        <h2 className="filter-title">Filters</h2>
        <button
          onClick={() => filterDispatch({ type: "CLEAR" })}
          className="filter-clear"
        >
          Clear
        </button>
        <button onClick={mobileFilterClose} className="cross">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="filter-container">
        <h3 className="filter-title price">Price</h3>
        <div className="range">
          <div className="field">
            <div className="value left">₹0</div>
            <input
              type="range"
              id="range-slider"
              min="0"
              max="10000"
              value={priceRangeValue}
              onChange={(e) =>
                filterDispatch({ type: "RANGE", payload: e.target.value })
              }
            />
            <div className="value right">₹{priceRangeValue}</div>
          </div>
        </div>
      </div>
      <div className="filter-container">
        <h3 className="filter-title">Sort By</h3>
        <div className="filter-type">
          <input
            type="radio"
            id="ltoh"
            name="sort"
            onChange={() =>
              filterDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
            }
            checked={sortBy === "LOW_TO_HIGH"}
          />
          <label htmlFor="ltoh">Low to High</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            id="htol"
            name="sort"
            onChange={() =>
              filterDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
            }
            checked={sortBy === "HIGH_TO_LOW"}
          />
          <label htmlFor="htol">High to Low</label>
        </div>
      </div>
      {!categoryCheck ? (
        <div className="filter-container">
          <h3 className="filter-title">Category</h3>

          {categories.map((category) => {
            return (
              <div className="filter-type" key={category.id}>
                <input
                  type="checkbox"
                  id={category.id}
                  name={category.categoryName}
                  checked={categoryState.includes(category.categoryName)}
                  onChange={() =>
                    filterDispatch({
                      type: "CATEGORY",
                      payload: { categoryType: category.categoryName },
                    })
                  }
                />
                <label htmlFor={category.id}>{category.categoryName}</label>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="filter-container">
        <h3 className="filter-title">Rating</h3>
        {}
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="four-star"
            value="4"
            checked={rating === "4"}
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="four-star">4 stars & above</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="three-star"
            value="3"
            checked={rating === "3"}
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="three-star">3 stars & above</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="two-star"
            value="2"
            checked={rating === "2"}
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="two-star">2 stars & above</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="one-star"
            value="1"
            checked={rating === "1"}
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="one-star">1 stars & above</label>
        </div>
      </div>
      <div className="filter-container">
        <h3 className="filter-title">Other Filters</h3>
        <div className="filter-type">
          <input
            type="checkbox"
            id="only-in-stock"
            checked={!includeOutOfStock}
            onChange={() => filterDispatch({ type: "REMOVE_OUT_OF_STOCK" })}
          />
          <label htmlFor="only-in-stock">Only In Stock</label>
        </div>
      </div>
    </section>
  );
};

export { Filters };
