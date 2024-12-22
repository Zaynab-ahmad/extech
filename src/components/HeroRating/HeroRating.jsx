import React from "react";
import "./HeroRating.css";
import { Col } from "react-bootstrap";
import { SiTrustpilot } from "react-icons/si";
import { GoStarFill } from "react-icons/go";
import profileShape from "../../assets/Images/profileShape1_1.webp";

export default function HeroRating({ text, trustpilot }) {
  return (
    <Col
      xs={12}
      md={6} // Adjust to ensure responsiveness
      className={`d-flex  align-items-center justify-content-start ${
        trustpilot ? "Trustpilot" : ""
      } text-start p-3`}
    >
      <div>
        <h2 className="fs-6 mt-3 mb-0 fw-bold d-flex align-items-center">
          <SiTrustpilot
            className="me-2 fs-3"
            style={{ color: "green", display: trustpilot ? "block" : "none" }}
          />
          {text}
        </h2>

        <div className="d-flex pt-3">
          <div className="pe-3">
            <img
              src={profileShape}
              alt="Profile"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <span>
              <GoStarFill
                style={{ color: "rgb(251, 176, 59)", fontSize: "12px" }}
              />
              <GoStarFill
                style={{ color: "rgb(251, 176, 59)", fontSize: "12px" }}
              />
              <GoStarFill
                style={{ color: "rgb(251, 176, 59)", fontSize: "12px" }}
              />
            </span>
            <p
              className="mt-1 p-0"
              style={{ fontSize: "10px", whiteSpace: "nowrap" }}
            >
              450+ Reviews
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
}
