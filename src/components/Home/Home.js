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
    <section aria-label="Portfolio home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="home-eyebrow">Software developer · Kigali, Rwanda</p>
              <h1 className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>
              <h2 className="heading-name">
                I’m <strong className="main-name">Mugisha Steven</strong>
              </h2>
              <div className="home-type-line">
                <Type />
              </div>
              <p className="home-summary">
                I build web applications and backend services, with a focus on
                TypeScript, APIs, and practical AI-powered products.
              </p>
              <div className="home-cta">
                <Button as={Link} to="/project" className="cta-btn">
                  View my work
                </Button>
                <Button as={Link} to="/contact" className="cta-btn cta-btn-outline">
                  Contact me
                </Button>
              </div>
            </Col>
            <Col md={5} className="home-visual">
              <img
                src={homeLogo}
                alt="Illustration representing Mugisha Steven’s software development work"
                className="img-fluid"
                loading="eager"
                fetchPriority="high"
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
