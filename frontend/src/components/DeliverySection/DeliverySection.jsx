import "./DeliverySection.css";

import deliveryImg from "../../assets/images/delivery-payment-section-img.png";

import visa from "../../assets/images/visa-card-img.png";
import master from "../../assets/images/master-card-img.png";
import paypal from "../../assets/images/paypal-card-img.png";
import american from "../../assets/images/american-express-img.png";

import Button from "../Common/Button/Button";

function DeliverySection() {
  return (
    <section
      className="delivery-and-payment-section py-5"
      id="sectiondeliveryandpayment"
    >
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-5 order-1 order-md-2">

            <div className="text-center">

              <img
                src={deliveryImg}
                alt="Delivery"
                className="delivery-and-payment-section-img"
              />

            </div>

          </div>

          <div className="col-12 col-md-7 order-2 order-md-1">

            <h1 className="delivery-and-payment-section-heading">
              Delivery and Payment
            </h1>

            <p className="delivery-and-payment-section-description">
              Enjoy hassle-free payment with the
              plenitude of payment options available for you.
              Get live tracking and locate your food on
              a live map.
            </p>

            <Button text="Order Now" />

            <div className="mt-3">

              <img src={visa} alt="Visa" className="payment-card-img" />

              <img src={master} alt="Master Card" className="payment-card-img" />

              <img src={paypal} alt="PayPal" className="payment-card-img" />

              <img src={american} alt="American Express" className="payment-card-img" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default DeliverySection;