import React, { useEffect, useState } from 'react';
import './HomeNavBar.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import RoundedButton from '../../Button/RoundedButton/RoundedButton';
import logo from '../../../assets/Images/logo.svg';

export default function NavBar() {
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
    <Navbar expand="lg" className={`home-navbar ${scrolled ? 'scrolled' : ''} position-fixed exContainer`}>
      <Navbar.Brand as={Link} to="/">
        <img className="w-75" src={logo} alt="Logo" />
      </Navbar.Brand>

      <div className="small-screen-icons">
        <CiSearch />
        <FaCartShopping />
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title={<><span>Home</span> <GoChevronDown /></>} id="home-dropdown">
            <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <NavDropdown title={<><span>Services</span> <GoChevronDown /></>} id="services-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
      </Navbar.Collapse>

      <div className="rightSide">
        <CiSearch className="fs-5"/>
        <FaCartShopping className="m-2 fs-5"/>
        <RoundedButton bgColor="var(--primary-color)" textColor="white" text="GET A QUOTE" />
      </div>
    </Navbar>
  );
}
