import { Col, Container, Row } from "react-bootstrap";
import "./FormSec.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import RoundedButton from "../Button/RoundedButton/RoundedButton";
import videoImg from '../../assets/Images/video.webp';

export default function FormSec() {
  return (
    <div className="exContainer p-5">
      <Container>
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column p-0"
          style={{
            borderRadius: "14px",
            backgroundColor: "var(--primary-color)",
          }}>
          <div className="p-4">
            <div
              className="d-flex p-3 align-items-center"
              style={{ borderBottom: "1px solid white" }}
            >
              <div className="icon-container-form">
                <FaPhone />
              </div>
              <div className="text-white">
                <p className="mb-0">Call Us 7/24</p>
                <p className="fw-bold mb-0">+786-875-976</p>
              </div>
            </div>
            <div
              className="d-flex p-3 align-items-center"
              style={{ borderBottom: "1px solid white" }}
            >
              <div className="icon-container-form">
                <IoIosMail />
              </div>
              <div className="text-white">
                <p className="mb-0">Make a Quote</p>
                <p className="fw-bold mb-0">info@gmail.com</p>
              </div>
            </div>
            <div className="d-flex p-3 align-items-center">
              <div className="icon-container-form">
                <FaLocationDot />
              </div>
              <div className="text-white">
                <p className="mb-0">Location</p>
                <p className="fw-bold mb-0">Washington</p>
              </div>
            </div>
          </div>
          <div
            className="w-100 position-relative mt-auto"
            style={{
              height: "200px",
              overflow: "hidden",
            }}
          >
            <img
              src={videoImg}
              alt="video"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: "14px",
                borderBottomRightRadius: "14px",
              }}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <form className="d-flex flex-column pt-5 ps-3">
            <h3 className="fs-4 fw-bold mt-4">Ready To Get Started?</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              omnis accusamus quasi officia vitae, vel natus! Ducimus eum
              eveniet voluptatem?
            </p>
            <Row className="d-flex ">
              <Col xs={12} md={6} className="d-flex flex-column">
                <label className="my-2 fw-bold">Your Name *</label>
                <input type="text" className="form-control" />
              </Col>
              <Col xs={12} md={6} className="d-flex flex-column">
                <label className="my-2 fw-bold">Your Email *</label>
                <input type="email" className="form-control" />
              </Col>
            </Row>
            <div className="d-flex flex-column gap-2">
              <label className="fw-bold">Write Message *</label>
              <textarea
                className="form-control"
                rows="5"
                style={{
                  resize: "vertical",
                  maxHeight: "200px",
                  width: "100%",
                  overflowY: "scroll",
                }}
              ></textarea>
            </div>
            <RoundedButton
              bgColor="var(--primary-color)"
              textColor="white"
              text="Send Message"
            />
          </form>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
