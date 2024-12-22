import './Contact.css'
import AboutHero from '../../components/Hero/AboutHero/AboutHero'
import { FaChevronRight } from "react-icons/fa";
import FormSec from '../../components/FormSec/FormSec';
import FormMap from '../../components/Map/Map';

export default function Contact() {
  return (
    <>
      <AboutHero title="Contact" sec={<span>Home <FaChevronRight /> Contact</span>} />    
      <FormSec/>
      <FormMap/>
      </>
      
  )
}
