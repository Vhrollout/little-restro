import Nav from 'react-bootstrap/Nav';
import img from "../../Assets/Logo .png";
import Image from 'react-bootstrap/Image';
import "./index.css";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function NavbarDark() {

  return (

    <>
    <Nav className="justify-content-end bg-dark p-2" activeKey="/home">
    <Navbar.Brand className='me-auto' href="#home">
      <Link to='/'><Image className="navImg" src={img} alt='uhaha' fluid/></Link>
      </Navbar.Brand>
        <Nav.Item>
          <Nav.Link eventKey="link-3 collapse"><Link to="/login">Login</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1 collapse"><Link to='/about'>About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2 collapse"><Link to='/order'>Orders</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavbarDark;