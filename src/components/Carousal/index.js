import Carousel from 'react-bootstrap/Carousel';
import "./index.css";
import kabab from "../../Assets/pexels-fauxels-3184183.jpg";
import kofta from "../../Assets/pexels-sydney-troxell-718742.jpg";
import desert from "../../Assets/pexels-robin-stickel-70497.jpg";

function Carousell() {
  return (
    <div className='carsoul-container'>
       <Carousel >
      <Carousel.Item className='b-block' interval={1000}>
        <img
          className="d-block w-100"
          src={kabab}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={kofta}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desert}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousell;