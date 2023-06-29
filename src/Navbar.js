import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "./Assets/logor.png";



function NavbarDark() {

  return (

    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img src={img} alt="logo of little lemon" width={100} height={50}/>
          <Nav className="me-auto" style={{marginLeft: "45rem"}}>
            <Nav.Link className="nav" href="#home">Home</Nav.Link>
            <Nav.Link className="nav" href="#features">Features</Nav.Link>
            <Nav.Link className="nav" href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDark;