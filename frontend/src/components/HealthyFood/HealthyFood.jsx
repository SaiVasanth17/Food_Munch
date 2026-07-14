import "./HealthyFood.css";

import healthyFoodImg from "../../assets/images/healthy-food-plate-img.png";
import Button from "../Common/Button/Button";

function HealthyFood() {
  return (
    <section className="healthy-food-section py-5" id="sectionhf">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-5 order-1 order-md-2">

            <div className="text-center">

              <img
                src={healthyFoodImg}
                alt="Healthy Food"
                className="healthy-food-section-img"
              />

            </div>

          </div>

          <div className="col-12 col-md-7 order-2 order-md-1">

            <h1 className="healthy-food-section-heading">
              Fresh, Healthy, Organic, Delicious Fruits
            </h1>

            <p className="healthy-food-section-description">
              Say no to harmful chemicals and go fully organic with our range of
              fresh fruits and veggies. Pamper your body and your senses with
              the true and unadulterated gifts from mother nature.
            </p>

            <Button text="Watch Video" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default HealthyFood;