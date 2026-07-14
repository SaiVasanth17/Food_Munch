import "./Footer.css";
import logo from "../../assets/images/food-munch-logo-light.png";

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src={logo}
              alt="Food Munch"
              className="food-munch-logo"
            />

            <h1 className="footer-section-mail-id">
              orderfood@foodmunch.com
            </h1>

            <p className="footer-section-address">
              123 Ayur Vigyan Nagar,
              New Delhi, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;