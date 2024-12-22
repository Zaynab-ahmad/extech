import Slider1 from "../Slider/Slider1/Slider1";
import Title from "../Title/Title";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import "./Services.css";
import ServicesSec from "./ServicesSec/ServicesSec";
import Card1 from "../Cards/Card1/Card1";
import serviceIcon1 from '../../assets/Images/serviceIcon1_1.svg';
import serviceIcon2 from '../../assets/Images/serviceIcon1_2.svg';
import serviceIcon3 from '../../assets/Images/serviceIcon1_3.svg';
import serviceIcon4 from '../../assets/Images/serviceIcon1_4.svg';

export default function Services() {
  const cardComponents = [
    <Card1 
      icon={serviceIcon1} 
      title="Data Guard Sentinel"
      description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
    />,
    <Card1
      icon={serviceIcon2}
      title="Woo Commerce"
      description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
    />,
    <Card1
      icon={serviceIcon3}
      title="CRM Solution"
      description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
    />,
    <Card1
      icon={serviceIcon4}
      title="Web Design"
      description="Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
    />
  ];

  return (
    <>
      <div className="services exContainer">
        <span className="w-50">
          <Title
            title="Our Services"
            heading="Elevating Businesses With IT Ingenuity"
          />
        </span>
        <Slider1 cards={cardComponents} slides={4} />
        <YoutubeVideo/>
      </div>
      <ServicesSec/>
    </>
  );
}
