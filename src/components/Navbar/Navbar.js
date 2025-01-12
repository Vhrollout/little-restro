import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import img from "../Assets/Logo .png";
import "./MobileNavbar.css";
import Search from '../search/search';
import { useCart } from '../Cart-Context/cart-context';

function MobileNavbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

   const {totalItems} = useCart();

    return (
        <Navbar className="mobile-navbar w-full flex-4" expand="lg">
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
                        <span className='totalCartItems'>{totalItems}</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Search className="m-4">
                    </Search>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default MobileNavbar;
