import React from "react";
import { FeaturedProducts, Hero, Services } from "../components";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="showcase">
      <div className="showcase-content">
        <h1 className="l-heading">The Sky Is The Limit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati
          eos atque quas maxime impedit.
        </p>
        <Link to="/products" className="btn">
          Cactuses
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
