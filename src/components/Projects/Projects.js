import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Himate Frontend"
              description="The UI of the Himate chat application v1. Built with modern web technologies to provide a seamless chatting experience."
              ghLink="https://github.com/mugishastev/-himatefrontend"
              demoLink="https://himatechat.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Himate Backend"
              description="The backend of my chatting app. Handles authentication, real-time messaging, and data storage."
              ghLink="https://github.com/mugishastev/himateappbackend"
              demoLink="https://himateappbackend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ISP Support API"
              description="Full-stack ISP Support API with NestJS, Prisma, GraphQL, and WebSockets. Manage users, customers, services, and real-time tickets. Type-safe, scalable, and ready for real-world ISP support workflows."
              ghLink="https://github.com/mugishastev/ISP-Support-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Smart Cooperative Hub Backend"
              description="Smart Cooperative Hub Backend: API and core logic for a cooperative management system, handling member, contribution, and loan management."
              ghLink="https://github.com/mugishastev/smartbackend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Personal Portfolio"
              description="My self portfolio website (the one you're currently viewing!) built with React.js to showcase my projects, skills, and experience."
              ghLink="https://github.com/mugishastev/mugisha-steven"
              demoLink="https://mugisha-steven.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
