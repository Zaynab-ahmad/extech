import Slider from "react-slick";
import './Brand.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Brands({ logos, slides }) {
  const settings = {
    infinite: true,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="Brands m-4 p-4 bg-white w-100" style={{ overflow: "hidden" }}>
      <Slider className="exContainer" {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="brand-slide d-flex align-items-center">
            <img
              className="m-1 brandImg"
              src={logo.logo}
              alt={`Brand ${index + 1}`}
              style={{ width: slides===5 ? "75%" : "" }}/>
            <h3 className="brand-text">{logo.text}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
