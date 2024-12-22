import "./Hero.css";
import { Row, Col, Container } from "react-bootstrap";
import { GoPulse } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import RoundedButton from "../Button/RoundedButton/RoundedButton";
import { BsSend } from "react-icons/bs";
import heroShape from "../../assets/Images/heroShape1_2.webp";
import heroShape2 from "../../assets/Images/heroShape1_1.webp";
import heroThumb from "../../assets/Images/heroThumb1_1.webp";
import RoutatingText from "../RoutatingText/RoutatingText";
import HeroRating from "../HeroRating/HeroRating";

export default function Hero() {
  return (
    <section className="homeHero text-white">
      <img
        src={heroShape}
        className="heroShape1 position-absolute start-0 z-1 sticky-bottom d-none d-lg-block"
        alt="Hero Shape 1"
      />
      <img
        src={heroShape2}
        className="heroShape2 position-absolute bottom-0 end-0 z-1 sticky-bottom d-none d-lg-block"
        alt="Hero Shape 2"
      />
      <div className="heroShape3 start-50 z-4 sticky-bottom bottom-0 d-none d-lg-block">
        <RoutatingText />
      </div>

      <div className="exContainer d-flex justify-content-between g-3">
        <Container>
        <Row className="g-4">
          <Col
            xs={12}
            lg={6}
            className="order-2 order-lg-1 d-flex flex-column justify-content-between align-items-start position-relative"
          >
            <Row className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
              <p className="TextBox rounded-pill border border-white fw-bold text-center">
                <GoPulse className="fs-4 pe-1" /> You Need To Create A Website
              </p>
              <h2>Business Innovation With IT Services Expertise</h2>

              <div className="textGroup mt-3">
                <Row>
                  <Col xs={12} lg={6} className="d-flex flex-column">
                    <p className="check-item">
                      <GiCheckMark className="fs-5 pe-1" />
                      Deployment and Support
                    </p>
                    <p className="check-item">
                      <GiCheckMark className="fs-5 pe-1" />
                      Discovery and Analysis
                    </p>
                  </Col>
                  <Col xs={12} lg={6} className="d-flex flex-column">
                    <p className="check-item">
                      <GiCheckMark className="fs-5 pe-1" />
                      Flexibility and Adaptability
                    </p>
                    <p className="check-item">
                      <GiCheckMark className="fs-5 pe-1" />
                      Competitive Advantage
                    </p>
                  </Col>
                </Row>
              </div>
              <RoundedButton
                bgColor="#f98600"
                textColor="white"
                text="Get Started"
              />
            </Row>
            
              <Row className="Reviews mt-5 mb-0 mb-md-2 justify-self-center px-5 p-md-0">
                <HeroRating text="Trustpilot" trustpilot={true} />
                <HeroRating text="Google" trustpilot={false} />
              </Row>
            
          </Col>
          <Col xs={12} lg={6} className="order-1 order-lg-2">
            <div className="HeroImg position-relative d-flex align-items-end z-1">
              <img className="w-100" src={heroThumb} alt="Hero Thumbnail" />
              <div className="heroSolution position-absolute z-1 d-none d-lg-block">
                <p
                  className="TextBox rounded-pill fw-bold text-center position-relative bottom-50 start-50 z-1"
                  style={{ backgroundColor: "#927cfe" }}
                >
                  Solution
                </p>
                <BsSend
                  className="BsSendRight position-absolute"
                  style={{ color: "#927cfe" }}
                />
              </div>
              <div className="heroTechnology position-absolute z-1 d-none d-lg-block">
                <p
                  className="TextBox rounded-pill fw-bold text-center position-relative bottom-50 start-50 z-1"
                  style={{ backgroundColor: "#019fee" }}
                >
                  Technology
                </p>
                <BsSend
                  className="BsSendLeft position-absolute"
                  style={{ color: "#019fee" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    </section>
  );
}
