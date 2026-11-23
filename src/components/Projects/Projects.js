import React, { useMemo, useState } from "react";
import { Container, Row, Col, Nav, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";

const projects = [
  {
    imgPath: editor,
    title: "HRAI — AI-Powered Talent Platform",
    description:
      "A recruitment platform built for the Umurava AI Hackathon. Recruiters can review applicant insights, run AI-assisted screening, and follow hiring pipeline trends, while applicants can search roles and track their applications.",
    ghLink: "https://github.com/mugishastev/frontendHRAI",
    backendLink: "https://github.com/mugishastev/backendHRAI",
    category: "AI",
    technologies: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "Gemini AI"],
  },
  {
    imgPath: chatify,
    title: "Himate — Chat Application",
    description:
      "A chat application with a dedicated web interface and backend. The project is focused on delivering a seamless messaging experience across its client and server components.",
    ghLink: "https://github.com/mugishastev/-himatefrontend",
    backendLink: "https://github.com/mugishastev/himateappbackend",
    demoLink: "https://himatechat.vercel.app",
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    imgPath: bitsOfCode,
    title: "ISP Support API",
    description:
      "A full-stack ISP support API for managing users, customers, services, and real-time support tickets, built with NestJS, Prisma, GraphQL, and WebSockets.",
    ghLink: "https://github.com/mugishastev/ISP-Support-API",
    category: "Backend",
    technologies: ["NestJS", "Prisma", "GraphQL", "WebSockets", "TypeScript"],
  },
  {
    imgPath: leaf,
    title: "Smart Cooperative Hub",
    description:
      "A cooperative management platform for members, contributions, and loans, with a client application and a backend API.",
    ghLink: "https://github.com/mugishastev/smartfrontend",
    backendLink: "https://github.com/mugishastev/smartbackend",
    category: "Full Stack",
    technologies: ["TypeScript", "React", "Node.js"],
  },
  {
    imgPath: emotion,
    title: "Personal Portfolio",
    description:
      "My personal portfolio website, built with React to showcase my projects, skills, and experience.",
    ghLink: "https://github.com/mugishastev/mugisha-steven",
    demoLink: "https://mugisha-steven.vercel.app",
    category: "Frontend",
    technologies: ["React", "JavaScript", "Bootstrap"],
  },
];

const categories = ["All", ...new Set(projects.map((project) => project.category))];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;
      const searchableText = [
        project.title,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [filter, search]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p className="project-intro">
          A selection of products and tools I have worked on across AI, web
          applications, and backend systems.
        </p>

        <Form.Group className="project-search mb-4">
          <Form.Label className="visually-hidden" htmlFor="project-search">
            Search projects
          </Form.Label>
          <Form.Control
            id="project-search"
            type="search"
            placeholder="Search projects or technologies..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search projects or technologies"
          />
        </Form.Group>

        <Nav
          className="justify-content-center mb-4 project-filter"
          activeKey={filter}
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Nav.Link
                as="button"
                type="button"
                onClick={() => setFilter(category)}
                eventKey={category}
                aria-pressed={filter === category}
              >
                {category}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <p className="project-result-count" aria-live="polite">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        {filteredProjects.length > 0 ? (
          <Row className="justify-content-center">
            {filteredProjects.map((project) => (
              <Col md={6} lg={4} key={project.title} className="project-card">
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="project-empty-state" role="status">
            <h2>No matching projects</h2>
            <p>Try another search term or choose a different category.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
