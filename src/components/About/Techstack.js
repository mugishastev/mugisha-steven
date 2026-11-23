import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiRedis, SiFirebase, SiNextdotjs, SiPostgresql, SiNestjs, SiTypescript, SiDocker, SiGraphql } from "react-icons/si";

const groups = [
  {
    title: "Backend & Architecture",
    items: [
      [DiNodejs, "Node.js"], [SiNestjs, "NestJS"], [SiPostgresql, "PostgreSQL"],
      [SiRedis, "Redis"], [DiMongodb, "MongoDB"], [SiGraphql, "GraphQL"],
    ],
  },
  {
    title: "Frontend & Languages",
    items: [
      [SiTypescript, "TypeScript"], [DiJavascript1, "JavaScript"], [DiReact, "React"],
      [SiNextdotjs, "Next.js"], [DiPython, "Python"],
    ],
  },
  {
    title: "DevOps & Collaboration",
    items: [[SiDocker, "Docker"], [DiGit, "Git"], [SiFirebase, "Firebase"]],
  },
];

function Techstack() {
  return (
    <div className="tech-stack">
      {groups.map((group) => (
        <section className="tech-group" key={group.title} aria-label={group.title}>
          <h3 className="purple tech-group-title">{group.title}</h3>
          <Row className="justify-content-center">
            {group.items.map(([Icon, name]) => (
              <Col xs={6} sm={4} md={2} className="tech-icons" key={name} title={name}>
                <Icon aria-hidden="true" />
                <p>{name}</p>
              </Col>
            ))}
          </Row>
        </section>
      ))}
    </div>
  );
}

export default Techstack;
