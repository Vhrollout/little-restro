import chef from "../../Assets/yelow.jpg";
import Image from 'react-bootstrap/Image';
import "./hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./hero.css";
import DishList from "../Dish-section/Dish-Section"
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import SimpleSlider from "../carousel2/SimpleSlider";
// eslint-disable-next-line no-unused-vars
import TableForm from "../Table-reservation";

// import Carousell from "../Carousal";



export default function Home() {
  return (
    <>
      <div>
        <Container className="Herobox" fluid>
          <Row className="text">
            <Col>
              <header className="hero-header text-md-start">
                <h1 className="heading">Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Celebrate every occasion with best <br />of the class cuisins from <br />different continents brings<br /> unique flavor that lasts with your memory.</p>
                <Link to="/TableForm"><Button variant="warning">Reserve my table</Button></Link>
              </header>
            </Col>
            <Col className="imgDiv d-none d-sm-block">
              <Image className="chef" src={chef} alt="plate with food" fluid />
            </Col>
          </Row>
        </Container>

        <div className="new_home">
          <div className='dish-div' data-aos="zoom-y-out">
            <header className='dish-header text-center'>
              <h1 className='dish-header'>This Weeks Specials!</h1>
              <Link to="/tableForm"><Button className='dish-button mb-2' variant="warning">Online Menu</Button></Link>
            </header>
          </div>
          <SimpleSlider />
          <DishList />
        </div>
        <Footer />
      </div>
    </>
  );
}