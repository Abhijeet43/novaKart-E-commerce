import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, image, alt, id }) => {
  return (
    <div className="category">
      <div className="overlay">
        <Link to={`/categories/${id}`} className="overlay-link">
          {title}
        </Link>
      </div>
      <img src={image} alt={alt} />
    </div>
  );
};

export { CategoryCard };
