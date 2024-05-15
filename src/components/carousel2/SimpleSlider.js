import React from "react";
import "./carousel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dish1 from "../../carouselmages/cp-1.jpg"
import dish2 from "../../carouselmages/cp-4.jpg"
import dish3 from "../../carouselmages/cp-3.jpg"
import dish4 from "../../carouselmages/cp-4.jpg"
import dish5 from "../../carouselmages/cp-5.jpg"
import dish6 from "../../carouselmages/cp-6.jpg"
import dish7 from "../../carouselmages/cp-7.jpg"
import dish8 from "../../carouselmages/cp-8.jpg"
import dish9 from "../../carouselmages/cp-9.jpg"

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container bg-yellow mb-4 ml-4 w-100 h-49">
      <Slider {...settings}>
        <div className="px-4 mx-2">
          <img src={dish1} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish2} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish3} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish4} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish5} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish6} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish7} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish8} alt="dish" />
        </div>
        <div className="px-4 mx-2">
          <img src={dish9} alt="dish" />
        </div>
      </Slider>
      <div className="quote text-center font-sans">
      <q>One cannot think well, love well, sleep well, if one has not dined well.</q><p>- Virginia Woolf</p>
      </div>
      
    </div>
  );
}

export default Responsive;



