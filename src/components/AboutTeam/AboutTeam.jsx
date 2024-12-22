import AboutCard from "../Cards/AboutCard/AboutCard";
import "./AboutTeam.css";
import teamMember1 from '../../assets/Images/04.webp';
import teamMember2 from '../../assets/Images/05.webp';
import teamMember3 from '../../assets/Images/06.webp';
import teamMember4 from '../../assets/Images/07.webp';

export default function AboutTeam() {
  return (
    <div className="p-5 exContainer aboutTeam">
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        <AboutCard
          src={teamMember1}
          name="Masirul Islam"
          role="web Designer"
        />
        <AboutCard
          src={teamMember2}
          name="Masirul Islam"
          role="web Designer"
        />
        <AboutCard
          src={teamMember3}
          name="Masirul Islam"
          role="web Designer"
        />
        <AboutCard
          src={teamMember4}
          name="Masirul Islam"
          role="web Designer"
        />
      </div>
    </div>
  );
}
