import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import kabab from "../../Assets/kabab.jpg";
import kofta from "../../Assets/kofta.jpg";
import desert from "../../Assets/desert.jpg";



export default function DishList() {
    return(
    <Container className='card-container' fluid>
        <Row>
            <header className='dish-header'>
                <h1 className='dish-header'>This Weeks Specials!</h1>
                <Button className='dish-button' variant="warning">Online Menu</Button>
            </header>
        </Row>
     <Row>
      <Col>
      <Card className='Card card1'>
      <Card.Img variant="top" className='card-img' src={kabab} alt="paneer tikka" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card className='Card card2' >
      <Card.Img variant="top" className='card-img' src={desert} alt='chef preparing desert' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card className='Card' >
      <Card.Img variant="top" className='card-img' src={kofta} alt="veg kofta" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
     </Row>
    </Container>
    );
}