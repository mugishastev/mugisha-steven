import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      imgPath: chatify,
      title: "Himate Frontend",
      description: "The UI of the Himate chat application v1. Built with modern web technologies to provide a seamless chatting experience.",
      ghLink: "https://github.com/mugishastev/-himatefrontend",
      demoLink: "https://himatechat.vercel.app",
      category: "Frontend",
    },
    {
      imgPath: editor,
      title: "Himate Backend",
      description: "The backend of my chatting app. Handles authentication, real-time messaging, and data storage.",
      ghLink: "https://github.com/mugishastev/himateappbackend",
      demoLink: "https://himateappbackend.vercel.app",
      category: "Backend",
    },
    {
      imgPath: bitsOfCode,
      title: "ISP Support API",
      description: "Full-stack ISP Support API with NestJS, Prisma, GraphQL, and WebSockets. Manage users, customers, services, and real-time tickets. Type-safe, scalable, and ready for real-world ISP support workflows.",
      ghLink: "https://github.com/mugishastev/ISP-Support-API",
      category: "Backend",
    },
    {
      imgPath: leaf,
      title: "Smart Cooperative Hub Backend",
      description: "Smart Cooperative Hub Backend: API and core logic for a cooperative management system, handling member, contribution, and loan management.",
      ghLink: "https://github.com/mugishastev/smartbackend",
      category: "Backend",
    },
    {
      imgPath: emotion,
      title: "Personal Portfolio",
      description: "My self portfolio website (the one you're currently viewing!) built with React.js to showcase my projects, skills, and experience.",
      ghLink: "https://github.com/mugishastev/mugisha-steven",
      demoLink: "https://mugisha-steven.vercel.app",
      category: "Frontend",
    },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

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

        <Nav className="justify-content-center mb-4 project-filter" activeKey={filter}>
          <Nav.Item>
            <Nav.Link onClick={() => setFilter("All")} eventKey="All">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setFilter("Frontend")} eventKey="Frontend">Frontend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setFilter("Backend")} eventKey="Backend">Backend</Nav.Link>
          </Nav.Item>
        </Nav>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((p, index) => (
            <Col md={4} key={index} className="project-card">
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={false}
                title={p.title}
                description={p.description}
                ghLink={p.ghLink}
                demoLink={p.demoLink}
                category={p.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
