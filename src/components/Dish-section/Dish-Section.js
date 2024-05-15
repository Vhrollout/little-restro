import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";
import Card from 'react-bootstrap/Card';
import kabab from "../../Assets/kabab.jpg";
import kofta from "../../Assets/kofta.jpg";
import desert from "../../Assets/desert.jpg";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function DishList() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  

    return(
      <>
      <div className="card-class">
      <Container className='card-container' fluid>
     <Row>
      <Col>
      <Card className='m-2 bg-success' data-aos="fade-right">
      <Card.Img variant="top" className='card-img' src={kabab} alt="paneer tikka" />
      <Card.Body>
        <Card.Title>Chefs Special</Card.Title>
        <Card.Text className="text-white">
          customize the dish you love to have on your table with ease
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card className='m-2 bg-success' data-aos="fade-up">
      <Card.Img variant="top" className='card-img' src={desert} alt='chef preparing desert' />
      <Card.Body>
        <Card.Title>New Arrivals</Card.Title>
        <Card.Text className="text-white">
         We're added and updated our menu every day to add novelty in your plate
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card className='m-2 bg-success' data-aos="fade-left" data-aos-delay="100">
      <Card.Img variant="top" className='card-img' src={kofta} alt="veg kofta" />
      <Card.Body>
        <Card.Title>Most Popular</Card.Title>
        <Card.Text className="text-white">
          vote for your favorite and we'll make it our dish of the month
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
     </Row>
    </Container>
      </div>
   
    </>
    );
}