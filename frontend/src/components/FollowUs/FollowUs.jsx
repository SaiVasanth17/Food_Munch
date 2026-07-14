import "./FollowUs.css";

import socialData from "../../data/socialData";
import SocialIcon from "./SocialIcon";

function FollowUs() {
  return (
    <section
      className="follow-us-section py-5"
      id="sectionfollowus"
    >
      <div className="container">

        <div className="row">

          <div className="col-12">

            <h1 className="follow-us-section-heading">
              Follow Us
            </h1>

            <div className="d-flex justify-content-center">

              {socialData.map((item) => (
                <SocialIcon
                  key={item.id}
                  Icon={item.icon}
                  link={item.link}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FollowUs;