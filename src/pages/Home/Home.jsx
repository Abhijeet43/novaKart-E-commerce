import React from "react";
import "./Home.css";

import { ProductCard, CategoryCard } from "../../components/index";
import { useData } from "../../context/data-context";
import { Hero } from "./components/Hero/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    dataState: { products, categories },
  } = useData();
  const latestProducts = products.filter((product) => product.isLatest);
  const featuredProducts = products.filter((product) => product.isFeatured);
  const featuredCategories = categories.filter(
    (category) => category.isFeatured
  );
  return (
    <>
      <Hero />
      <main className="main-section">
        {/* <!-- CATEGORIES --> */}
        <section className="categories">
          <h2 className="section-title">Featured Categories</h2>
          <div className="categories-container">
            {featuredCategories.map(({ categoryName, imageSrc, id }) => {
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
            {featuredProducts.map(
              ({ id, title, price, discount, imageSrc, badge, inStock }) => {
                return (
                  <ProductCard
                    key={id}
                    id={id}
                    title={title}
                    alt={title}
                    price={price}
                    discount={discount}
                    image={imageSrc}
                    badge={badge}
                    inStock={inStock}
                  />
                );
              }
            )}
          </div>
        </section>

        {/* <!-- LATEST-PRODUCTS --> */}
        <section className="latest-products">
          <h2 className="section-title">Latest Products</h2>
          <div className="card-container">
            {latestProducts.map(
              ({ id, title, price, discount, imageSrc, badge, inStock }) => {
                return (
                  <ProductCard
                    key={id}
                    id={id}
                    title={title}
                    alt={title}
                    price={price}
                    discount={discount}
                    image={imageSrc}
                    badge={badge}
                    inStock={inStock}
                  />
                );
              }
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export { Home };
