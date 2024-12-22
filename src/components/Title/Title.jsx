import "./Title.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

import React from "react";

export default function Title({ title, heading, white }) {
  return (
    <>
      <div className="secTitle">
        <HiArrowLongLeft
          className="m-2 fs-4"
          style={{ color: white ? "white" : "var(--primary-color)" }}
        />
        <span  style={{ color: white ? "white" : "var(--primary-color)" }}>{title}</span>
        <HiArrowLongRight
          className="m-2 fs-4"
          style={{ color: white ? "white" : "var(--primary-color)" }}
        />
      </div>
      <h2
        className="fs-4 fw-bold"
        style={{ color: white ? "white" : "black" }}
      >
        {heading}
      </h2>
    </>
  );
}
