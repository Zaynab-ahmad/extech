import './AboutCard.css';
import { FiShare2 } from "react-icons/fi";

export default function AboutCard({ src, name, role }) {
  return (
    <div className="profile-card">
      <div className="share-icon">
        <FiShare2 />
      </div>
      <img 
        src={src}
        alt="Profile" 
        className="profile-image"
      />
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
      </div>
    </div>
  );
}
