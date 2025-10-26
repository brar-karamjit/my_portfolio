import React, { useMemo, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import HttpsKeyExchange from "./HttpsKeyExchange";

function Animations() {
  const animations = useMemo(
    () => [
      {
        id: "https-key-exchange",
        title: "HTTPS Key Exchange",
        summary:
          "Follow the TLS handshake as the client and server negotiate a secure channel.",
        component: HttpsKeyExchange,
        tags: ["Networking", "Security"]
      }
    ],
    []
  );

  const [activeAnimationId, setActiveAnimationId] = useState(
    animations[0]?.id ?? null
  );

  const activeAnimation = useMemo(
    () => animations.find((animation) => animation.id === activeAnimationId) ?? null,
    [animations, activeAnimationId]
  );

  const handleSelect = (id) => {
    setActiveAnimationId(id);
  };

  const renderAnimation = () => {
    if (!activeAnimation) {
      return null;
    }

    const SelectedAnimation = activeAnimation.component;
    return <SelectedAnimation />;
  };

  return (
    <Container fluid className="animation-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Explore <strong className="purple">Animations</strong>
        </h1>
        <p style={{ color: "white" }}>
          Choose a card to load the interactive walkthrough.
        </p>
        <Row className="justify-content-center g-4">
          {animations.map((animation) => {
            const isActive = animation.id === activeAnimationId;
            return (
              <Col md={6} lg={4} key={animation.id} className="animation-card">
                <Card
                  className={`animation-card-view${isActive ? " active" : ""}`}
                  onClick={() => handleSelect(animation.id)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleSelect(animation.id);
                    }
                  }}
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
            );
          })}
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} lg={10} xl={9} className="animation-preview">
            {renderAnimation()}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Animations;
