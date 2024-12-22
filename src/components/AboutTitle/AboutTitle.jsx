import React from 'react';
import Title from "../Title/Title";
import RoundedButton from "../Button/RoundedButton/RoundedButton";
import { Col, Container, Row } from 'react-bootstrap';

export default function AboutTitle() {
  return (
    <Container>

    <Row className="exContainer my-3">
      <Col xs={12} md={6} className="teamMembersTitle">
        <Title title="Team Members" heading="Our Dedicated Team Members" />
      </Col>
      <Col xs={12} md={6} className="teamMembersButton ">
        <RoundedButton
          bgColor="var(--primary-color)"
          textColor="white"
          text="All Members"
        />
      </Col>
    </Row>
    </Container>
  );
}
