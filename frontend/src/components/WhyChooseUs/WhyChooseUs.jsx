import "./WhyChooseUs.css";

import WhyChooseCard from "./WhyChooseCard";

import foodServe from "../../assets/images/food-serve.png";
import fruits from "../../assets/images/fruits-img.png";
import offers from "../../assets/images/offers-img.png";

const cardData = [

    {
        image: foodServe,

        title: "Food Service",

        description:
            "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you nothing less than perfect."
    },

    {

        image: fruits,

        title: "Fresh Food",

        description:
            "The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms."

    },

    {

        image: offers,

        title: "Best Offers",

        description:
            "Food Coupons & Offers upto",

        offer: "50% OFF"

    }

];

function WhyChooseUs() {

    return (

        <section
            className="wcu-section py-5"
            id="sectionwcu"
        >

            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <h1 className="wcu-section-heading">
                            Why Choose Us?
                        </h1>

                        <p className="wcu-section-description">

                            We use both original recipes and classic versions of famous food items.

                        </p>

                    </div>

                    {

                        cardData.map((item, index) => (

                            <WhyChooseCard
                                key={index}
                                {...item}
                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;