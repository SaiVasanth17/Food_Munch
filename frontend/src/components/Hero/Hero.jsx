import "./Hero.css";
import { Link } from "react-router-dom";

import banner from "../../assets/images/foodmunch-banner-bg.png";

function Hero() {
  return (
    <section
      className="banner-section-bg-container d-flex flex-column justify-content-center"
    >
      <div className="text-center">

        <h1 className="banner-heading mb-3">
          Get Delicious Food Anytime
        </h1>

        <p className="banner-caption mb-4">
          Eat Smart & Healthy
        </p>

        <Link to="/menu">
          <button className="custom-button">
            View Menu
          </button>
        </Link>

        <Link to="/menu">
          <button className="custom-outline-button">
            Order Now
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Hero;