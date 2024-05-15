import Nav from 'react-bootstrap/Nav';
import img from "../../Assets/Logo .png";
import Image from 'react-bootstrap/Image';
import "./index.css";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function NavbarDark() {

  return (

    <>
    <Nav className="justify-content-end bg-orange-200 p-2 mb-2" activeKey="/home">
    <Navbar.Brand className='me-auto' href="#home">
      <Link to='/'><Image className="navImg" src={img} alt='Home' fluid/></Link>
      </Navbar.Brand>
        <Nav.Item>
          <Nav.Link eventKey="link-3 collapse"><Link to="/login"><span>Login</span></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1 collapse"><Link to='/about'><span>About Us</span></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2 collapse"><Link to='/order'><span>Order</span></Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavbarDark;