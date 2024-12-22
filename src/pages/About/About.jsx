import AboutBrand from '../../components/AboutBrand/AboutBrand';
import AboutTeam from '../../components/AboutTeam/AboutTeam';
import AboutTitle from '../../components/AboutTitle/AboutTitle';
import AboutHero from '../../components/Hero/AboutHero/AboutHero'
import './About.css';
import { FaChevronRight } from "react-icons/fa";
import asteriskIcon from '../../assets/Images/asterisk.svg';
import Brands from '../../components/Brands/Brands'




export default function About() {
   const brandLogos = [
      { logo: asteriskIcon, text: "Cyber Security" },
      { logo: asteriskIcon, text: "Technology" },
      { logo: asteriskIcon, text: "IT Solution" },
      { logo: asteriskIcon, text: "Data Security" },
      { logo: asteriskIcon, text: "Technology" }
    ];
  return (
    <>     
      <AboutHero title="About" sec={<span>Home <FaChevronRight /> About</span>} />
      <Brands logos={brandLogos} slides= {4}/>
      <AboutTitle/>
      <AboutTeam/>
      <AboutBrand/>
    </>
  )
}
