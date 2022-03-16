import React from "react";
import "./Category.css";

const Category = ({ categoryTitle, categoryImage, categoryAlt }) => {
  return (
    <div className="category">
      <div className="overlay">
        <a href="#" className="overlay-link">
          {categoryTitle}
        </a>
      </div>
      <img src={categoryImage} alt={categoryAlt} />
    </div>
  );
};

export { Category };
