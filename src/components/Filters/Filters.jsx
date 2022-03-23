import React from "react";
import "./Filters.css";
import { useFilter, useData } from "../../context/";

const Filters = () => {
  const {
    filterState: { sortBy, category: categoryState },
    filterDispatch,
  } = useFilter();

  const {
    dataState: { categories },
  } = useData();

  return (
    <aside className="aside">
      <div className="aside-heading">
        <h2 className="aside-title">Filters</h2>
        <button
          onClick={() => filterDispatch({ type: "CLEAR" })}
          className="aside-clear"
        >
          Clear
        </button>
      </div>
      <div className="filter-container">
        <h3 className="filter-title price">Price</h3>
        <div className="range">
          <div className="sliderValue">
            <span className="slider-points">100</span>
          </div>
          <div className="field">
            <div className="value left">₹100</div>
            <input type="range" min="100" max="2000" value="100" steps="1" />
            <div className="value right">₹2000</div>
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
      <div className="filter-container">
        <h3 className="filter-title">Rating</h3>
        {}
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="4above"
            value="4"
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="4above">4 stars & above</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="3above"
            value="3"
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="3above">3 stars & above</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="2above"
            value="2"
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="2above">2 stars & above</label>
        </div>
        <div className="filter-type">
          <input
            type="radio"
            name="rating"
            id="1above"
            value="1"
            onChange={(e) =>
              filterDispatch({ type: "RATING", payload: e.target.value })
            }
          />
          <label htmlFor="1above">1 stars & above</label>
        </div>
      </div>
    </aside>
  );
};

export { Filters };
