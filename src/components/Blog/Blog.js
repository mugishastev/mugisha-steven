import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import blogImg from "../../Assets/Projects/blog.png";

function Blog() {
  const [filter, setFilter] = useState("All");

  const posts = [
    {
      id: 1,
      title: "Building Scalable APIs with NestJS",
      description: "Learn how to structure your NestJS projects for maximum scalability and maintainability.",
      category: "Backend",
      date: "Oct 12, 2023",
      image: blogImg,
    },
    {
      id: 2,
      title: "React 19: What's New?",
      description: "Exploring the latest features in React 19 and how to leverage them in your current projects.",
      category: "Frontend",
      date: "Nov 05, 2023",
      image: blogImg,
    },
    {
      id: 3,
      title: "Mastring TypeScript Generics",
      description: "A deep dive into generics to help you write cleaner and more type-safe code.",
      category: "TypeScript",
      date: "Dec 15, 2023",
      image: blogImg,
    },
  ];

  const categories = ["All", "Backend", "Frontend", "TypeScript"];

  const filteredPosts = filter === "All" ? posts : posts.filter(p => p.category === filter);

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>Sharing my thoughts and technical knowledge</p>

        <div className="filter-container mb-4">
          <Form.Select
            aria-label="Filter by category"
            className="blog-filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </div>

        <Row style={{ justifyContent: "center" }}>
          {filteredPosts.map((post) => (
            <Col md={4} key={post.id} className="blog-card">
              <Card className="blog-card-view">
                <Card.Img variant="top" src={post.image} alt="blog-img" className="blog-img" />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="secondary" className="purple-badge">{post.category}</Badge>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {post.description}
                  </Card.Text>
                  <Link to="/" className="purple blog-link">
                    Read More →
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
