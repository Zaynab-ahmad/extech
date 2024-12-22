import "./RoundedButton.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RoundedButton({ bgColor, textColor, text }) {
  return (
    <button
      className="RoundedButton rounded-pill"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
      <FaArrowRightLong className="icon" />
    </button>
  );
}
