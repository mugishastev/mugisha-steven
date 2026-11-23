import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import pdf from "../../Assets/MUGISHA_Steven.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section" aria-label="About Mugisha Steven">
      <Particle />
      <Container>
        <Row className="align-items-center about-overview">
          <Col md={7} className="about-copy">
            <p className="section-eyebrow">About me</p>
            <h1 className="project-heading">
              Building reliable products, <strong className="purple">one idea at a time</strong>
            </h1>
            <AboutCard />
            <div className="about-actions">
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                <AiOutlineDownload aria-hidden="true" /> &nbsp; Download CV
              </Button>
              <a className="about-link" href="/contact">Let’s work together</a>
            </div>
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="Laptop illustration representing Mugisha Steven’s development work" className="img-fluid" loading="lazy" />
          </Col>
        </Row>

        <section className="skill-section" aria-labelledby="skill-heading">
          <p class="section-eyebrow">Technology</p>
          <h2 id="skill-heading" className="project-heading">
            Professional <strong className="purple">skillset</strong>
          </h2>
          <Techstack />
        </section>

        <section className="tool-section" aria-labelledby="tool-heading">
          <h2 id="tool-heading" className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h2>
          <Toolstack />
        </section>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
