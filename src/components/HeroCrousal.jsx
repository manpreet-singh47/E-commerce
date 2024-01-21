import React from "react";
import { useSelector } from "react-redux";
import { Carousel, initMDB } from "mdb-ui-kit";
import Slider from "react-slick";

const HeroCrousal = () => {
  const images = useSelector((store) => store.products.images);

  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    auto: true,
    autoplay: true,
    pauseOnHover: false,
    arrows: true,
    // fade: true,
    delay: 2000,
  };

  return (
    <div className="HeroCrousal">
      <Slider {...settings}>
        {images.map((image) => {
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
  );
};

export default HeroCrousal;
