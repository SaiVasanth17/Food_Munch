import "./ExploreMenu.css";

function ExploreMenuCard({ image, title }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="shadow menu-item-card p-3 mb-3">

        <img
          src={image}
          alt={title}
          className="menu-item-image w-100"
        />

        <h1 className="menu-card-title">
          {title}
        </h1>

        <a href="/" className="menu-item-link">
          View All
        </a>

      </div>
    </div>
  );
}

export default ExploreMenuCard;