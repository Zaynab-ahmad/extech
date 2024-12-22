import './FeedbackCard.css';
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


export default function FeedbackCard({
  testimonialText,
  userImage,
  userName,
  userRole,
  isActive,
}) {
  return (
    <div className={`feedbackCard ${isActive ? 'active-card' : ''}`}>
      <div className='stars' style={{ color: "#fca21a" }}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <CiStar />
      </div>

      <p className='testimonial-text'>{testimonialText}</p>

      <div className='user-info'>
        <img src={userImage} alt="User" className='user-img' />
        <div className='user-details'>
          <p className='user-name'>{userName}</p>
          <p className='user-role'>{userRole}</p>
        </div>
<RiDoubleQuotesR 
  className='quote-icon' 
  style={{ fontSize: "3.5rem", color: isActive ? "white" : "#d3d3d3" }} 
/>
      </div>
    </div>
  );
}
