import React from "react";
import { Link } from "react-router-dom";
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
          <br />
          Consistent hardwork gains success. Greatness will come.
        </p>
        <Link to="/products" className="btn btn-primary btn-explore">
          Explore Now <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="hero-img">
        <img src={headerImg} alt="hero-img" />
      </div>
    </section>
  );
};

export { Hero };
