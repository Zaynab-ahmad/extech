import './ToggleButton.css'
import { useState } from "react";

export default function ToggleButton({ onToggle }) {
 const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
    onToggle(!isMonthly); 
  };

  return (
    <div className="toggle-button">
      <button
        className={isMonthly ? "active" : ""}
        onClick={handleToggle}
      >
        Monthly
      </button>
      <button
        className={!isMonthly ? "active" : ""}
        onClick={handleToggle}
      >
        Yearly
      </button>
    </div>
  )
}