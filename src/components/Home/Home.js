import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import AIRecommendation from "./AIRecommendation";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUGISHA STEVEN</strong>
              </h1>

              <div style={{ padding: "10px 0 20px 50px", textAlign: "left" }}>
                <Type />
              </div>

              <div className="home-cta" style={{ paddingLeft: 50, marginTop: "20px", cursor: "pointer" }}>
                <Button as={Link} to="/project" className="cta-btn">
                  View My Work
                </Button>
                <Button as={Link} to="/contact" className="cta-btn cta-btn-outline">
                  Contact Me
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Testimonials />
      <AIRecommendation />
    </section>
  );
}

export default Home;
