import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h3 className="purple mt-5">Backend & Architecture</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Node.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>NestJS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>PostgreSQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Redis</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGraphql />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>GraphQL</p>
        </Col>
      </Row>

      <h3 className="purple mt-4">Frontend & Languages</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>TypeScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>React</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Next.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Python</p>
        </Col>
      </Row>

      <h3 className="purple mt-4">DevOps & Tools</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Docker</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
          <p style={{ fontSize: "12px", marginTop: "5px" }}>Firebase</p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
