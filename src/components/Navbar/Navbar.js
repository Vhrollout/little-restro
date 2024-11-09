import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import img from "../Assets/Logo .png";
import "./MobileNavbar.css";

function MobileNavbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Navbar className="mobile-navbar">
            <Navbar.Brand href="#home">
                <Image src={img} alt='Home' fluid />
            </Navbar.Brand>
            
            <FontAwesomeIcon icon={faBars} className="breadcrumb-icon" onClick={toggleSidebar} />
            <Nav className={`mobile-nav ${showSidebar ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faTimes} className="close-sidebar" onClick={toggleSidebar} />
                <Nav.Item>
                    <Link to="/" className="nav-link" onClick={toggleSidebar}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about" className="nav-link" onClick={toggleSidebar}>About Us</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/order" className="nav-link" onClick={toggleSidebar}>Order</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/cart" className="nav-link" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" aria-label="Cart" />
                        <span className='tl'>{totalItems}</span>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default MobileNavbar;
