

import React from 'react';
import { Col } from 'react-bootstrap';
import './ServicesSecCard.css'

export default function ServicesSecCard({ number, title, description }) {
  return (
    
    <Col xs={12} lg={3} className='servicesSecCard d-flex flex-column text-white'>
      <h3 className='servicesSecCardTitle fs-2'>{number}</h3>
      <h2 className='fs-5'>{title}</h2>
      <p style={{color:"gray"}}>{description}</p>
    </Col>
  );
}
