import "./GiftSection.css";

import Button from "../Common/Button/Button";

import giftImage from "../../assets/images/thanking-customers-section-img.png";
import voucher from "../../assets/images/gift-voucher-img.png";

function GiftSection() {
  return (
    <section className="thanking-customers-section py-5">

      <div className="container">

        <div className="row">

          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">

            <h1 className="thanking-customers-section-heading">
              Thank you for being a valuable customer to us.
            </h1>

            <p className="thanking-customers-section-description">
              We have a surprise gift for you.
            </p>

            <img
              src={giftImage}
              alt="Gift"
              className="thanking-customers-section-img d-md-none"
            />

            <div>

              <Button
                text="Redeem Gift"
                dataBsToggle="modal"
                dataBsTarget="#giftModal"
              />

            </div>

          </div>

          <div className="col-12 col-md-5">

            <img
              src={giftImage}
              alt="Gift"
              className="thanking-customers-section-img d-none d-md-block"
            />

          </div>

        </div>

      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="giftModal"
        tabIndex="-1"
      >

        <div className="modal-dialog mt-5">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title modal-title-heading">
                Gift Voucher
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

              <img
                src={voucher}
                alt="Voucher"
                className="w-100"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GiftSection;