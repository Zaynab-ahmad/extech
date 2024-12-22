import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import RoundedButton from '../Button/RoundedButton/RoundedButton';
import Title from '../Title/Title';
import ctaThumb from '../../assets/Images/ctaThumb1_1.webp';

export default function Contact() {
  return (
    <section className="contact position-relative exContainer">
      <Container>
      <Row className='p-3'>
        <Col xs={12} lg={3} className="d-flex justify-content-center align-items-center p-4">
          <img style={{width:"150px"}} src={ctaThumb} alt="ctaThumb1_1" />
        </Col>
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-center align-items-start">
          <Title title="Contact Us" heading="24/7 Expert Hosting Support Our Customer Love" white="true" />
        </Col>
        <Col xs={12} lg={3} className="d-flex position-relative justify-content-center align-items-center p-4">
          <RoundedButton bgColor="white" textColor="var(--primary-color)" text="Talk To A Specialist" />
        </Col>
      </Row>
      </Container>
    </section>
  );
}
