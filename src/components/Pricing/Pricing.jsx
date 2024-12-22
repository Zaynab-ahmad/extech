import { useState } from "react";
import ToggleButton from "../Button/ToggleButton/ToggleButton";
import PricingCard from "../Cards/PricingCard/PricingCard";
import Title from "../Title/Title";
import "./Pricing.css";
import pricingShape from '../../assets/Images/pricingShape1_1.webp';
import pricingIcon from '../../assets/Images/pricingIcon1_2.svg';

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (value) => {
    setIsMonthly(value);
  };

  return (
    <div className="pricing-section w-100 bg-white">
      <img 
        src={pricingShape} 
        alt="pricingShape1_1.webp"
        className="d-none d-md-block"
        style={{position:"absolute", left: "0",bottom: "0", width: "150px"}} 
      />

      <Title title="Our Pricing" heading="Our Awesome Pricing Plans" />

      <div className="d-flex flex-wrap gap-3 gap-md-7 justify-content-center align-items-center">
        <ToggleButton onToggle={handleToggle} />
        <div className="d-flex align-items-center mx-5 ">
          <img
            style={{ width: "50px" }}
            src={pricingIcon}
            alt="pricingIcon1_2"
          />
          <p
            className="mx-2"
            style={{
              color: "var(--primary-color)",
              top: "15px",
            }}
          >
            Save 25%
          </p>
        </div>
      </div>

      <div className="exContainer pricing-cards-container">
        <PricingCard isMonthly={isMonthly} />
        <PricingCard isMonthly={isMonthly} dark={true} />
        <PricingCard isMonthly={isMonthly} />
      </div>
    </div>
  );
}
