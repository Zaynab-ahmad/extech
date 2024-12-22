import './AboutBrand.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from '../../assets/Images/aboutbrand1.svg'
import brand2 from './../../assets/Images/aboutbrand2.svg'


export default function AboutBrand() {
const settings = {
    infinite: true,
    slidesToShow: 5,
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
    <div className="d-flex flex-column m-4 p-4 bg-white w-100" style={{ overflow: "hidden", alignItems:"center" }}>
        <h4 className='aboutBrandheader'>1K+ Brands Trust Us</h4>
      <Slider className="exContainer" {...settings}>
        <img className="m-1 w-50" src={brand1} alt="Brand 1" />
        <img className="m-1 w-50" src={brand1} alt="Brand 1" />
        <img className="m-1 w-50" src={brand2} alt="Brand 2" />
        <img className="m-1 w-50" src={brand1} alt="Brand 1" />
        <img className="m-1 w-50" src={brand1} alt="Brand 1" />
      </Slider>
    </div>
  );
}
