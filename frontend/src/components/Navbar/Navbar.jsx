import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/food-munch-logo-img.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Food Munch Logo"
            className="navbar-image"
          />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="navbar-nav ms-auto">

            <a className="nav-link custom-nav-link" href="#sectionwcu">
              Why Choose Us
            </a>

            <a className="nav-link custom-nav-link" href="#sectioneom">
              Explore Menu
            </a>

            <a
              className="nav-link custom-nav-link"
              href="#sectiondeliveryandpayment"
            >
              Delivery & Payment
            </a>

            <a
              className="nav-link custom-nav-link"
              href="#sectionfollowus"
            >
              Follow Us
            </a>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "nav-link custom-nav-link active-link"
                  : "nav-link custom-nav-link"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "nav-link custom-nav-link active-link"
                  : "nav-link custom-nav-link"
              }
            >
              Cart
            </NavLink>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;