import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css';
import { useRef, useState } from "react";
import React from 'react'


export default function TestimonialSlider({ cards }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Highlight the middle card
    centerPadding: "0px",
    beforeChange: (_, next) => setCurrentSlide(next), // Update current slide state
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
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

 const getIsActive = (index) => {
  if (window.innerWidth < 480) { 
    return index === currentSlide; 
  }

  // For multiple slides (larger screens)
  const middleIndex = Math.floor(currentSlide + settings.slidesToShow / 2) % cards.length; 
  return index === middleIndex;
};




  return (
    <div className="testimonial-slider-container w-100">
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="slider-item">
            {React.cloneElement(card, { isActive: getIsActive(index) })}
          </div>
        ))}
      </Slider>

      {/* Custom Horizontal Scrollbar */}
      <div className="custom-scrollbar">
        {cards.map((_, index) => (
          <div
            key={index}
            className="scrollbar-segment"
            onClick={() => goToSlide(index)}
            style={{
              width: 100,
              cursor: "pointer",
              background: index === currentSlide ? "var(--primary-color)" : "transparent",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
