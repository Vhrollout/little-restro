
import Nav from 'react-bootstrap/Nav';

import img from "./Assets/logor.png";
import Image from 'react-bootstrap/Image';



function NavbarDark() {

  return (

    <>
    <Nav className="justify-content-end bg-danger" activeKey="/home">
      <Image className="navimg" src={img} alt='uhaha' fluid/>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavbarDark;