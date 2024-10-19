import React from 'react';
import Nav from 'react-bootstrap/Nav';
import img from "../Assets/Logo .png";
import Image from 'react-bootstrap/Image';
import "./NavbarDark.css";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavbarDark({ totalItems }) {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home">
        <Image src={img} alt='Home' fluid />
      </Navbar.Brand>
      <Nav className="navbar-nav">
        <Nav.Item>
          <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link">About Us</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/order" className="nav-link">Order</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" aria-label="Cart" />
            <span className='tl'>{totalItems}</span>
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavbarDark;
