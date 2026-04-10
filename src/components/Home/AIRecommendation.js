import React, { useState } from "react";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { AiOutlineRobot } from "react-icons/ai";

function AIRecommendation() {
  const [interest, setInterest] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const getRecommendation = (e) => {
    e.preventDefault();
    const input = interest.toLowerCase();
    
    let result = {
      type: "Skill",
      name: "Cloud Architecture (AWS/Azure)",
      reason: "Based on your interest in scalable systems and backend engineering.",
    };

    if (input.includes("frontend") || input.includes("ui") || input.includes("css")) {
      result = {
        type: "Project",
        name: "Interactive Data Visualization Dashboard",
        reason: "Since you enjoy frontend, building a complex dashboard with D3.js would showcase your skills perfectly.",
      };
    } else if (input.includes("backend") || input.includes("api") || input.includes("database")) {
      result = {
        type: "Skill",
        name: "GraphQL & Apollo",
        reason: "As a backend specialist, mastering GraphQL will help you build more flexible and efficient APIs.",
      };
    } else if (input.includes("mobile") || input.includes("app")) {
      result = {
        type: "Project",
        name: "React Native E-commerce App",
        reason: "Your React skills translate well to mobile. A full-stack mobile app would be a great addition.",
      };
    }

    setRecommendation(result);
  };

  return (
    <Container className="mt-5 mb-5 ai-section">
      <Card className="blog-card-view p-4 text-center">
        <h2 className="purple mb-4">
          <AiOutlineRobot /> AI Assistant
        </h2>
        <p>What are you currently interested in learning or building?</p>
        <Form onSubmit={getRecommendation} className="d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="e.g. Backend, Frontend, Cloud..."
            className="contact-input mr-2"
            style={{ maxWidth: "400px" }}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <Button variant="primary" type="submit" style={{ marginLeft: "10px" }}>
            Get Advice
          </Button>
        </Form>

        {recommendation && (
          <Alert variant="info" className="mt-4 animate-like" style={{ backgroundColor: "rgba(199, 112, 240, 0.1)", border: "1px solid #c770f0", color: "white" }}>
            <h5 className="purple">Recommended {recommendation.type}: {recommendation.name}</h5>
            <p>{recommendation.reason}</p>
          </Alert>
        )}
      </Card>
    </Container>
  );
}

export default AIRecommendation;
