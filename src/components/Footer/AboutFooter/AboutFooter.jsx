import "./AboutFooter.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutFooter() {
  return (
    <div className="about-footer-container">
      <Container>

      <Row className="m-0 g-2 d-flex justify-content-center align-items-center">
        <Col xs={7} md={4} className="footer-item flex-grow-1 borderEnd">
          <div className="icon-container">
            <FaLocationDot />
          </div>
          <div>
            <p className="footer-title">Address</p>
            <p>4648 Rocky Road, Philadelphia PA</p>
          </div>
        </Col>
        <Col xs={7} md={3} className="footer-item flex-grow-1 borderEnd">
          <div className="icon-container">
            <IoIosMail />
          </div>
          <div>
            <p className="footer-title">Send Email</p>
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
        </Col>
        <Col xs={7} md={3} className="footer-item flex-grow-1 ">
          <div className="icon-container">
            <FaPhone />
          </div>
          <div>
            <p className="footer-title">Call Emergency</p>
            <a href="tel:+88012365499">+88 0123 654 99</a>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
    
  );
}
