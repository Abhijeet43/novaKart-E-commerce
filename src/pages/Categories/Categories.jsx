import React, { useEffect, useState } from "react";
import { CategoryCard } from "../../components";
import { useData, useLoader } from "../../context/";
import { getCategories } from "../../functions";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { dataDispatch } = useData();

  const { setLoader } = useLoader();

  useEffect(() => {
    getCategories(dataDispatch, setLoader, setCategories);
  }, []);

  return (
    <section className="categories">
      <h2 className="section-title">All Categories</h2>
      <div className="categories-container">
        {categories.length > 0
          ? categories.map(({ categoryName, imageSrc, _id: id }) => {
              return (
                <CategoryCard
                  key={id}
                  title={categoryName}
                  image={imageSrc}
                  alt={categoryName}
                  id={id}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export { Categories };
