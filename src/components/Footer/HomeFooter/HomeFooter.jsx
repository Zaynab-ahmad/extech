import RoundedButton from '../../Button/RoundedButton/RoundedButton';
import './HomeFooter.css';
import { Row, Col, Container } from 'react-bootstrap';
import ctaThumb from '../../../assets/Images/ctaThumb.webp';

export default function HomeFooter() {
  return (
    <div
      className='homeFooter exContainer'
      style={{ backgroundColor: "var(--primary-color)", borderRadius: "24px" }}

    >
      <Container>
        <Row className='d-flex justify-content-center align-items-center position-relative g-4 p-4'>
            <Col md={4}>
                <img
                  className="d-none d-md-block position-absolute bottom-0"
                  src={ctaThumb}
                  alt="ctaThumb"
                  style={{ width: "200px" }}
                />
            </Col>
            <Col md={4} xs={12} className='d-flex justify-content-center align-items-center'>
                <h3 className='fs-5'>Stay Connected With Cutting Edge IT</h3>
            </Col>
            <Col md={3} xs={12} className='d-flex justify-content-center align-items-center'>
                <RoundedButton bgColor="white" textColor="black" text="TALK TO SPECIALIST" />
            </Col>
        </Row>
      </Container>
    </div>
  );
}
