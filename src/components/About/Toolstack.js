import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiSlack, SiVercel } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const tools = [
  [VscCode, "Visual Studio Code"],
  [SiPostman, "Postman"],
  [SiSlack, "Slack"],
  [SiVercel, "Vercel"],
];

function Toolstack() {
  return (
    <Row className="justify-content-center tool-stack">
      {tools.map(([Icon, name]) => (
        <Col xs={6} sm={4} md={2} className="tech-icons" key={name} title={name}>
          <Icon aria-hidden="true" />
          <p>{name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
