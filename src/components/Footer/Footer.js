import img from "../../Assets/Logo .png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return(
      <div className="footer-container">
         <Container>
        <Row className="iconRow">
          <Col><img className="footer-img" src={img} alt="logo of little lemon"/></Col>
          <Col>
          <Col className="icons">
          <a href="github.com"><FontAwesomeIcon icon={faEnvelope} size="2x" color="black" /></a>
          </Col>
          <Col className="icons">
          <a href="github.com"><FontAwesomeIcon icon={faGithub} size="2x" color="black" /></a>
          </Col>
          <Col className="icons">
          <a href="github.com"><FontAwesomeIcon icon={faMap} size="2x" color="black" /></a>
          </Col>
          <Col className="icons">
          <a href="https://stackoverflow.com/users/22222034/vihar-muneshwar"><FontAwesomeIcon icon={faStackOverflow} size="2x" color="black" /></a>
          </Col>
          </Col>
        </Row>
      </Container>
      </div>
    );
}

