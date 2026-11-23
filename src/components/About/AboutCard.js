import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-lead">
            Hi, I’m <span className="purple">Mugisha Steven</span>, a software developer
            based in <span className="purple">Kigali, Rwanda</span>. I work as a
            Backend Engineer at <span className="purple">Sohoza System</span>,
            building APIs and scalable web applications.
          </p>
          <p>
            I enjoy turning complex problems into clean, maintainable systems and
            creating useful experiences for users. My strongest areas include
            TypeScript, NestJS, PostgreSQL, React, and modern full-stack development.
          </p>
          <h2 className="h6 mt-4">Beyond code</h2>
          <ul className="about-interests">
            <li><ImPointRight aria-hidden="true" /> Playing games</li>
            <li><ImPointRight aria-hidden="true" /> Storytelling</li>
            <li><ImPointRight aria-hidden="true" /> Travelling</li>
          </ul>
          <p className="about-motto">“Strive to build things that make a difference!”</p>
          <footer className="blockquote-footer">Steven</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
