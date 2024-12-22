import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./BlogAndNewsCard.css";

export default function BlogAndNewsCard({
  imageUrl,
  category,
  date,
  title,
  profileImageUrl,
  authorName,
  authorRole
}) {
  return (
    <div className="blog-card-container ">
      <div className="blogAndNewsCard p-3">
        <img
          className="blogAndNewsCardImg"
          src={imageUrl}
          alt="Blog Thumbnail"
        />
        <div className="blogContant">
          <div className="d-flex align-items-center mb-2">
            <span className="category rounded-pill border text-primary fw-bold px-3 py-1 mb-0 me-2">
              {category}
            </span>
            <span className="text-muted">{date}</span>
          </div>
          <h3 className="title mb-3 fs-5">{title}</h3>
          <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <div className="profile d-flex align-items-center">
              <img
                src={profileImageUrl}
                alt={`${authorName} profile`}
                className="profile-image rounded-circle me-2"
              />
              <div>
                <p className="m-0 fw-bold">{authorName}</p>
                <p className="m-0 text-muted">{authorRole}</p>
              </div>
            </div>
            <button className="arrow-button border p-2">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
