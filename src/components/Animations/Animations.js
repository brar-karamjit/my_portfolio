import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import "./Animations.css";

const animations = [
  {
    id: "https-key-exchange",
    title: "HTTPS Key Exchange",
    summary:
      "Follow the TLS handshake as the client and server negotiate a secure channel.",
    tags: ["Networking", "Security"],
    path: "/animations/https-key-exchange"
  },
  {
    id: "icmp-ping",
    title: "ICMP Ping",
    summary:
      "Trace an ICMP echo request and reply to see how connectivity checks work.",
    tags: ["Diagnostics", "Networking"],
    path: "/animations/icmp-ping"
  }
];

function Animations() {
  return (
    <Container fluid className="animation-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Explore <strong className="purple">Animations</strong>
        </h1>
        <p style={{ color: "white" }}>
          Choose a card to open a dedicated walkthrough.
        </p>
        <Row className="justify-content-center g-4">
          {animations.map((animation) => (
            <Col md={6} lg={4} key={animation.id} className="animation-card">
              <Card
                as={Link}
                to={animation.path}
                className="animation-card-view"
              >
                <Card.Body>
                  <Card.Title>{animation.title}</Card.Title>
                  <Card.Text>{animation.summary}</Card.Text>
                  <div className="animation-tags">
                    {animation.tags.map((tag) => (
                      <span key={tag} className="animation-tag">
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
    </Container>
  );
}

export default Animations;
