import React from "react";
import "./Home.css";

import { ProductCard, CategoryCard } from "../../components/";
import { useData } from "../../context/";
import { Hero } from "./components/Hero/Hero";
import { Link } from "react-router-dom";
import {
  getFeaturedProducts,
  getLatestProducts,
  getFeaturedCategories,
} from "../../functions";

const Home = () => {
  const {
    dataState: { products, categories },
  } = useData();

  const latestProducts = getLatestProducts(products);
  const featuredProducts = getFeaturedProducts(products);
  const featuredCategories = getFeaturedCategories(categories);

  return (
    <>
      <Hero />
      <main className="main-section">
        {/* <!-- CATEGORIES --> */}
        <section className="categories">
          <h2 className="section-title">Featured Categories</h2>
          <div className="categories-container">
            {featuredCategories.map(({ categoryName, imageSrc, _id: id }) => {
              return (
                <CategoryCard
                  key={id}
                  title={categoryName}
                  image={imageSrc}
                  alt={categoryName}
                  id={id}
                />
              );
            })}
            <Link to="/categories" className="category-link">
              View All
            </Link>
          </div>
        </section>

        {/* <!-- FEATURED PRODUCTS --> */}
        <section className="featured-products">
          <h2 className="section-title">Featured Products</h2>
          <div className="card-container">
            {featuredProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </section>

        {/* <!-- LATEST-PRODUCTS --> */}
        <section className="latest-products">
          <h2 className="section-title">Latest Products</h2>
          <div className="card-container">
            {latestProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export { Home };
