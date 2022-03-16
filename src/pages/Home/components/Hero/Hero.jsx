import React from "react";
import "./Hero.css";
import { headerImg } from "../../../../assets/index";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          Give Your Workout
          <br />A New Style!
        </h1>
        <p className="hero-content">
          Success isn't always about greatness. It's about consistency.
          Consistent <br />
          hardwork gains success. Greatness will come.
        </p>
        <a
          href="../all-products/all-products.html"
          className="btn btn-primary btn-explore"
        >
          Explore Now <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="hero-img">
        <img src={headerImg} alt="hero-img" />
      </div>
    </section>
  );
};

export { Hero };
