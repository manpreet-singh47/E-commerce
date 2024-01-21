import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDollarSign } from "react-icons/fa";
import { productsActions } from "../slices/productsSlices";

const ProductDetails = () => {
  const details = useSelector((state) => state.productDetails.product);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(productsActions.addToCart(details));
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          key={details.id}
        >
          <div className="col-10 col-sm-8 col-lg-6 productImagesContainer ">
            <Slider {...settings}>
              {details.images.map((image) => {
                return (
                  <img
                    src={image}
                    className="d-block mx-lg-auto img-fluid productDetailsImage "
                    alt="Bootstrap Themes"
                    loading="lazy"
                  />
                );
              })}
            </Slider>
          </div>
          <div className="col-lg-6">
            <h1
              style={{ color: "white" }}
              className="display-5 fw-bold  lh-1 mb-3"
            >
              {details.title}
            </h1>
            <p className="lead text-white">{details.description}</p>

            <h2
              style={{ color: "white" }}
              className="display-5 fw-bold  lh-1 mb-3 "
            >
              <FaDollarSign />
              {details.price}
            </h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 text-white"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                type="button"
                className="btn btn-outline-secondary btn-lg px-4 text-white"
              >
                Add to cart
              </button>
            </div>
            <button
              onClick={() => dispatch(productsActions.addToWishlist(details))}
              type="button"
              className="btn btn-outline-secondary mt-3 btn-lg px-4 w-full text-white"
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ProductDetails;
