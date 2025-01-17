import React from 'react';
import Image from 'react-bootstrap/Image';
import "./hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DishList from "../Dish-section/Dish-Section";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import TableForm from "../Table-reservation";

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
                <p>Savor the World: Unforgettable Flavors from Every Continent</p>
                <Link to="/TableForm"><button className='relative right-2 border-none'>Reserve my Table</button></Link>
              </header>
            </Col>
            <Col className="imgDiv d-none d-sm-block">
              <Image className="chef" src="https://tse1.mm.bing.net/th?id=OIG4.ui7t1glMSUU5MOuBi30F&pid=ImgGn" alt="plate with food" fluid />
            </Col>
          </Row>
        </Container>
        <DishList />
        
      </div>
    </>
  );
}
