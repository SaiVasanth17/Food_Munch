function WhyChooseCard({
    image,
    title,
    description,
    offer
}) {

    return (

        <div className="col-12 col-md-4">

            <div className="wcu-card p-3 mb-3">

                <img
                    src={image}
                    alt={title}
                    className="wcu-card-image"
                />

                <h1 className="wcu-card-title mt-3">
                    {title}
                </h1>

                <p className="wcu-card-description">

                    {description}

                    {offer && (

                        <>
                            {" "}
                            <span className="offers">
                                {offer}
                            </span>
                        </>

                    )}

                </p>

            </div>

        </div>

    );

}

export default WhyChooseCard;