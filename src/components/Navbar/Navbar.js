import Nav from 'react-bootstrap/Nav';
import img from "../../Assets/Logo .png";
import Image from 'react-bootstrap/Image';
import "./index.css";
import Navbar from 'react-bootstrap/Navbar';




function NavbarDark() {

  return (

    <>
    <Nav className="justify-content-end bg-dark p-2" activeKey="/home">
    <Navbar.Brand className='me-auto' href="#home">
      <Image className="navImg" src={img} alt='uhaha' fluid/>
      </Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1 collapse">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2 collapse">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled collapse" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavbarDark;