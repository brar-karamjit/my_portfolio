import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import "./Animations.css";

const blogPosts = [
  {
    id: "https-key-exchange",
    title: "HTTPS Key Exchange",
    summary:
      "See the TLS handshake unfold step-by-step to demystify how secure sessions begin.",
    tags: ["Security", "Networking"],
    topic: "Zero Trust Foundations",
    readingTime: "6 min read",
    path: "/blog/https-key-exchange"
  },
  {
    id: "icmp-ping",
    title: "ICMP Ping",
    summary:
      "Follow an animated packet trace to learn how everyday connectivity checks succeed or fail.",
    tags: ["Diagnostics", "Networking"],
    topic: "Day-2 Operations",
    readingTime: "5 min read",
    path: "/blog/icmp-ping"
  }
];

function Blog() {
  return (
    <section className="blog-page">
      <Particle />

      <Container className="blog-posts home-surface">
        <p className="section-eyebrow">Welcome</p>
        <h1 className="blog-heading">Stories that animate DevOps fundamentals</h1>
        <p className="blog-subheading">
          Each post is a short, visual walkthrough designed to make platform concepts memorable—watch packets move, pipelines evolve, and reliability patterns come alive.
        </p>
        <p className="section-eyebrow">Latest entries</p>
        <Row className="g-4 blog-post-row">
          {blogPosts.map((post) => (
            <Col md={6} key={post.id} className="blog-card-col">
              <Card as={Link} to={post.path} className="blog-card">
                <Card.Body>
                  <div className="blog-card-meta">
                    <span className="blog-card-topic">{post.topic}</span>
                    <span className="blog-card-time">{post.readingTime}</span>
                  </div>
                  <Card.Title className="blog-card-title">{post.title}</Card.Title>
                  <Card.Text className="blog-card-summary">{post.summary}</Card.Text>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
