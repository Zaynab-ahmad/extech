import "./PricingCard.css";
import { CiCircleQuestion } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import pricingIcon from '../../../assets/Images/pricingIcon1_1.svg';

const features = [
  {
    icon: <GiCheckMark color="var(--primary-color)" />,
    text: "100 GB SSD Storage",
  },
  {
    icon: <GiCheckMark color="var(--primary-color)" />,
    text: "Weekly Backups",
  },
  {
    icon: <GiCheckMark color="var(--primary-color)" />,
    text: "Unlimited Free SSL",
  },
  {
    icon: <GiCheckMark color="var(--primary-color)" />,
    text: "24/7 System Monitoring",
  },
  {
    icon: <GiCheckMark color="var(--primary-color)" />,
    text: "Free Domain ($9.99 Value)",
  },
  { icon: <IoMdClose color="red" />, text: "Frame 164236" },
  { icon: <IoMdClose color="red" />, text: "20+ Payment Methods" },
];

export default function PricingCard({ isMonthly, dark }) {
  const price = isMonthly ? 49 : 300;
  const duration = isMonthly ? "/Month" : "/Year";

  return (
    <div className="pricing-card">
      <div
        className="pricing-card-header"
        style={
          dark
            ? { backgroundColor: "#1e2a4a", color: "white" }
            : { backgroundColor: "var(--primary-color)", color: "white" }
        }
      >
        <div>
          <h3 style={{fontSize:"14px"}}>Regular Plans</h3>
          <h3 style={{fontSize:"22px"}}>
            ${price}
            <span>{duration}</span>
          </h3>
        </div>
        <img
          src={pricingIcon}
          alt="Pricing Icon"
          style={{ width: "40px" }}
        />
      </div>
      <div className="pricing-card-features">
        {features.map((feature, index) => (
          <div className="feature-item py-1" key={index}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="fs-5">{feature.icon}</span>
              <p>{feature.text}</p>
            </div>
            <CiCircleQuestion className="fs-5"/>
          </div>
        ))}
      </div>
      <button
        className="pricingBtn w-100"
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "var(--primary-color)",
          border: dark ? "none" : "1px solid gray",
        }}
      >
        <span className="fw-bold" style={{fontSize:"12px"}}>GET STARTED NOW</span>  <FaArrowRightLong className="ms-2"  />
      </button>
    </div>
  );
}
