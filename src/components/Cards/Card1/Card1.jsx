import './Card1.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Card1({ icon, title, description}) {
  return (
    <div className="card1 mx-2">
      <div className="icon-container">
        <img src={icon} alt="icon" className="card-icon" />
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-description">{description}</p>
      <button className="read-more-button">
        Read More <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
  );
}


