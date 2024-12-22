import BlogAndNews from '../../components/BlogAndNews/BlogAndNews'
import Brands from '../../components/Brands/Brands'
import Contact from '../../components/Contact/Contact'
import Hero from '../../components/Hero/Hero'
import Pricing from '../../components/Pricing/Pricing'
import Services from '../../components/Services/Services'
import Testimonial from '../../components/Testimonial/Testimonial'
import './Home.css'
import brandLogo1 from '../../assets/Images/brandLogo1_1.svg';
import brandLogo2 from '../../assets/Images/brandLogo1_2.svg';
import brandLogo3 from '../../assets/Images/brandLogo1_4.svg';
import brandLogo4 from '../../assets/Images/brandLogo1_5.svg';
import brandLogo5 from '../../assets/Images/brandLogo1_3.svg';

export default function Home() {
  const brandLogos = [
    { logo: brandLogo1 },
    { logo: brandLogo2 },
    { logo: brandLogo3 },
    { logo: brandLogo4 },
    { logo: brandLogo5 }
  ];

  return (
    <>
      <Hero />
      <Brands logos={brandLogos} slides={5}/>
      <Services />
      <Pricing />
      <Contact />
      <Testimonial />
      <BlogAndNews />
    </>
  );
}
