import chef from "../../Assets/chef.jpg";
import Image from 'react-bootstrap/Image';
import "./hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./hero.css";


export default function HeroElement() {
  return (
    <Container className="Herobox" fluid>
      <Row className="text">
      <Col>
      <header className="hero-header">
        <h1 className="heading">Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Celebrate every occasion with best <br/>of the class cuisins from <br/>different continents brings<br/> unique flavor that lasts with your memory.</p>
        <Button variant="outline-warning">Reserve my table</Button>
      </header>
    </Col>
   <Col className="imgDiv">
    <Image className="chef" src={chef} alt="plate with food" fluid/>
   </Col>
      </Row>
    </Container>
  );
}