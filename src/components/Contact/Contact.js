import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => () => clearTimeout(status?.timer), [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    setValidated(true);

    if (!form.checkValidity()) return;

    setIsSubmitting(true);
    setStatus(null);

    const subject = encodeURIComponent(formData.subject || "Portfolio enquiry");
    const body = encodeURIComponent(
      `Hi Mugisha,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:mugishasteven@example.com?subject=${subject}&body=${body}`;

    const timer = window.setTimeout(() => {
      setStatus({ type: "success", message: "Your email app should open with the prepared message." });
      setIsSubmitting(false);
      setFormData(initialForm);
      setValidated(false);
    }, 500);

    setStatus({ type: "pending", message: "Preparing your message…", timer });
  };

  const socials = [
    ["https://github.com/mugishastev", "GitHub", <AiFillGithub aria-hidden="true" />],
    ["https://x.com/mugisha_stev", "Twitter", <AiOutlineTwitter aria-hidden="true" />],
    ["https://www.linkedin.com/in/mugisha-steven/", "LinkedIn", <FaLinkedinIn aria-hidden="true" />],
    ["https://www.instagram.com/intore_steven02/", "Instagram", <AiFillInstagram aria-hidden="true" />],
  ];

  return (
    <Container fluid className="contact-section" aria-labelledby="contact-heading">
      <Particle />
      <Container>
        <Row className="justify-content-center align-items-start g-5">
          <Col lg={7} className="contact-form-section">
            <p className="section-eyebrow">Contact</p>
            <h1 id="contact-heading" className="project-heading">
              Get in <strong className="purple">touch</strong>
            </h1>
            <p className="contact-intro">
              Have a project, collaboration, or job opportunity? Send me a message.
            </p>

            {status?.type === "success" && (
              <Alert variant="success" role="status">{status.message}</Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      minLength={2}
                      type="text"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      autoComplete="name"
                    />
                    <Form.Control.Feedback type="invalid">Please enter at least 2 characters.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      autoComplete="email"
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  minLength={3}
                  type="text"
                  placeholder="What would you like to discuss?"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input"
                />
                <Form.Control.Feedback type="invalid">Please enter a subject.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  minLength={10}
                  as="textarea"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input"
                />
                <Form.Control.Feedback type="invalid">Please enter at least 10 characters.</Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="contact-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Preparing…" : "Send message"}
              </Button>
            </Form>
          </Col>

          <Col lg={4} className="contact-info-section">
            <div className="contact-social-card">
              <p className="section-eyebrow">Social links</p>
              <h2 className="h3">Connect with me</h2>
              <p>Follow my work or reach out directly on any of these platforms.</p>
              <ul className="footer-icons">
                {socials.map(([href, label, icon]) => (
                  <li className="social-icons" key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label={label}
                      title={label}
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
