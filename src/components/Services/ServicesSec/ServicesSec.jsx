import React from 'react';
import { Row } from 'react-bootstrap';
import ServicesSecCard from '../../Cards/ServicesSecCard/ServicesSecCard';
import './ServicesSec.css';

export default function ServicesSec() {
  return (
    <div className='servicesSec w-100  text-white p-3'>
      <Row className='servicesSeccards exContainer'>
        <ServicesSecCard
          number="01"
          title="Requirement"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, consequatur."
        />
        <ServicesSecCard
          number="02"
          title="Planning"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, consequatur."
        />
        <ServicesSecCard
          number="03"
          title="Execution"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, consequatur."
        />
        <ServicesSecCard
          number="04"
          title="Review"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, consequatur."
        />
      </Row>
    </div>
  );
}
