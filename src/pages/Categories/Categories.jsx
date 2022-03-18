import React from "react";
import { CategoryCard } from "../../components";
import { useData } from "../../context/data-context";

const Categories = () => {
  const {
    dataState: { categories },
  } = useData();
  return (
    <section className="categories">
      <h2 className="section-title">All Categories</h2>
      <div className="categories-container">
        {categories.map(({ categoryName, imageSrc, id }) => {
          return (
            <CategoryCard
              title={categoryName}
              image={imageSrc}
              alt={categoryName}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export { Categories };
