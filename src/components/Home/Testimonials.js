import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineTeam } from "react-icons/ai";

function Testimonials() {
  const reviews = [
    {
      name: "Musa",
      position: "Senior Dev @ Sohoza",
      text: "Steven is an exceptional backend engineer. His ability to architect scalable solutions is impressive.",
    },
    {
      name: "Alice Umutoni",
      position: "Product Manager",
      text: "Working with Steven was a breeze. He delivered the project on time and the code quality was top-notch.",
    },
    {
      name: "David N.",
      position: "Frontend Lead",
      text: "Steven's APIs are well-documented and easy to integrate with. He really understands full-stack collaboration.",
    },
  ];

  return (
    <Container className="mt-5 mb-5">
      <h1 className="project-heading text-center">
        <AiOutlineTeam /> Client <strong className="purple">Testimonials</strong>
      </h1>
      <Row className="mt-4" style={{ justifyContent: "center" }}>
        {reviews.map((r, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card className="blog-card-view h-100">
              <Card.Body>
                <Card.Text style={{ fontStyle: "italic" }}>"{r.text}"</Card.Text>
                <div className="mt-3">
                  <h6 className="purple mb-0">{r.name}</h6>
                  <small className="text-muted">{r.position}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
