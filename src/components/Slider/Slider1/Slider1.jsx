import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider1.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Custom Previous Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev rounded-circle" onClick={onClick}>
      <IoIosArrowRoundBack size={24} />
    </div>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <IoIosArrowRoundForward size={24}/>
    </div>
  );
}

export default function Slider1({ cards, slides }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-100">
      <Slider {...settings}>
        {cards.map((CardComponent, index) => (
          <div key={index} className="m-3">
            {CardComponent}
          </div>
        ))}
      </Slider>
    </div>
  );
}
