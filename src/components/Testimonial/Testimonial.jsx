import FeedbackCard from '../Cards/FeedbackCard/FeedbackCard'
import Title from '../Title/Title'
import './Testimonial.css'
import testiThumb1 from '../../assets/Images/testiThumb3_1.webp'
import testiThumb2 from '../../assets/Images/testiThumb3_2.webp'
import testiThumb3 from '../../assets/Images/testiThumb3_3.webp'
import TestimonialSlider from '../Slider/TestimonialSlider/TestimonialSlider'

export default function Testimonial() {
  const feedbackData = [
     <FeedbackCard 
     testimonialText= "Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website. Highly recommended for all!"
      userImage= {testiThumb1}
      userName= "Kristin Watson"
      userRole= "Web Designer"
      />,
      <FeedbackCard 
     testimonialText= "I've been using Extech for several months now, and I'm extremely impressed with the ease of customization it offers. The wide range of templates."
      userImage= {testiThumb2}
      userName= "Theresa Webb"
      userRole= "Tech Enthusiast"
      />,
      <FeedbackCard 
     testimonialText= 
      "Extech offers exceptional value for money. The comprehensive suite of tools and seamless integration with various plugins and services make it a for all."
      userImage= {testiThumb3}
      userName= "Ronald Richards"
      userRole= "Web Entrepreneur"
      />,
 
  ];
  return (
    <div className='testimonial bg-light w-100 text-center pb-5'>
      <div style={{marginTop:"130px"}}>

      <Title title="Testimonial" heading="Our Latest Clients Feedback"></Title>
      <div className='exContainer d-flex flex-wrap flex-lg-nowrap justify-content-center'>
        <TestimonialSlider cards= {feedbackData} />
      </div>
      </div>
    </div>
  )
}
