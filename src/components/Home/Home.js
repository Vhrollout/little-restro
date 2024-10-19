
import Image from 'react-bootstrap/Image';
import "./hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DishList from "../Dish-section/Dish-Section";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import TableForm from "../Table-reservation";

export default function Home({ cartItems, addToCart, products, calculateTotalItems, calculateTotalPrice, totalItems, totalPrice }) {
  return (
    <>
      <div>
        <Container className="Herobox" fluid>
          <Row className="text">
            <Col>
              <header className="hero-header text-md-start">
                <h1 className="heading">Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Celebrate every occasion with best <br />of the class cuisines from <br />different continents brings<br /> unique flavor that lasts with your memory.</p>
                <Link to="/TableForm"><Button variant="warning">Reserve my table</Button></Link>
              </header>
            </Col>
            <Col className="imgDiv d-none d-sm-block">
              <Image className="chef" src="https://th.bing.com/th/id/OIP.0AkIMHUv7Gm7nOdlErxspwHaEc?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="plate with food" fluid />
            </Col>
          </Row>
        </Container>
        <DishList cartItems={cartItems} addToCart={addToCart} products={products} calculateTotalPrice={calculateTotalPrice} calculateTotalItems={calculateTotalItems} totalPrice={totalPrice}
          totalItems={totalItems} />
        <Footer />
      </div>
    </>
  );
}
