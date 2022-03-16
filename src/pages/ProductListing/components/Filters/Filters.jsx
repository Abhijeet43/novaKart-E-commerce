import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <aside className="aside">
      <div className="aside-heading">
        <h2 className="aside-title">Filters</h2>
        <a href="#" className="aside-clear">
          Clear
        </a>
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
          <input type="radio" id="ltoh" name="sort" />
          <label for="ltoh">Low to High</label>
        </div>
        <div className="filter-type">
          <input type="radio" id="htol" name="sort" />
          <label for="htol">High to Low</label>
        </div>
        <div className="filter-type">
          <input type="radio" id="ntool" name="sort" />
          <label for="ntool">New to Old</label>
        </div>
        <div className="filter-type">
          <input type="radio" id="olton" name="sort" />
          <label for="olton">Old to New</label>
        </div>
      </div>
      <div className="filter-container">
        <h3 className="filter-title">Category</h3>
        <div className="filter-type">
          <input type="checkbox" id="tshirts" />
          <label for="tshirts">T-Shirts</label>
        </div>
        <div className="filter-type">
          <input type="checkbox" id="denims" />
          <label for="denims">Denims</label>
        </div>
        <div className="filter-type">
          <input type="checkbox" id="tracks" />
          <label for="tracks">Tracks</label>
        </div>
        <div className="filter-type">
          <input type="checkbox" id="watches" />
          <label for="watches">Watches</label>
        </div>
        <div className="filter-type">
          <input type="checkbox" id="sneakers" />
          <label for="sneakers">Sneakers</label>
        </div>
      </div>
      <div className="filter-container">
        <h3 className="filter-title">Rating</h3>
        <div className="filter-type">
          <input type="radio" name="rating" id="4above" />
          <label for="4above">4 stars & above</label>
        </div>
        <div className="filter-type">
          <input type="radio" name="rating" id="3above" />
          <label for="3above">3 stars & above</label>
        </div>
        <div className="filter-type">
          <input type="radio" name="rating" id="2above" />
          <label for="2above">2 stars & above</label>
        </div>
        <div className="filter-type">
          <input type="radio" name="rating" id="1above" />
          <label for="1above">1 stars & above</label>
        </div>
      </div>
    </aside>
  );
};

export { Filters };
