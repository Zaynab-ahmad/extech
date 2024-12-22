import React from 'react';
import './RoutatingText.css';
import { BsArrowUpRight } from "react-icons/bs";

export default function RotatingText() {
  const text = "EXPLORE MORE · EXPLORE MORE · ";
  return (

    <div className="outCircle">
      <div className="circle">
        <div className="circleArrow" style={{ color: "var(--primary-color)" }}>
          <BsArrowUpRight className="arrow" />
        </div>
        <div className="circleText">
          {text.split("").map((char, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${(360 / text.length) * i}deg)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
