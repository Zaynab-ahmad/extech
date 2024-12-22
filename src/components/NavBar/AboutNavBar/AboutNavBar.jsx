import './AboutNavBar.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import RoundedButton from '../../Button/RoundedButton/RoundedButton';
import planeIcon from '../../../assets/Images/plane.webp';
import logo from '../../../assets/Images/logo.svg';

export default function AboutNavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`AboutNavBar ${scrolled ? 'scrolled' : ''} fixed-top`}>
      <div className='leftNav'>
        <div className="aboutIcons">
          <img src={planeIcon} alt="plane.webp" className="message-icon position-absolute" />
        </div>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
      </div>
      <div className='smallNavIcon'>
        <CiSearch className="search-icon" />
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="aboutNavbarToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={<><span>Home</span> <GoChevronDown /></>} id="home-dropdown">
              <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title={<><span>Services</span> <GoChevronDown /></>} id="services-dropdown">
              <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<><span>Pages</span> <GoChevronDown /></>} id="pages-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<><span>Blog</span> <GoChevronDown /></>} id="blog-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <CiSearch className="search-icon d-none d-lg-block ms-2" />
        </Navbar.Collapse>
      </div>

      <div className="aboutRightSide">
        <div className="arrow-right"></div>
        <RoundedButton bgColor="white" textColor="var(--primary-color)" text="GET A QUOTE" />
      </div>
    </Navbar>
  );
}
