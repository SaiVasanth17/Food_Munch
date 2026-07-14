import "./ExploreMenu.css";

import ExploreMenuCard from "./ExploreMenuCard";

import menuData from "../../data/menuData";

function ExploreMenu() {

    return (

        <section
            className="explore-menu-section pt-5 pb-5"
            id="sectioneom"
        >

            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <h1 className="menu-section-heading">

                            Explore Menu

                        </h1>

                    </div>

                    {
                        menuData.map((item) => (

                            <ExploreMenuCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                            />

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default ExploreMenu;