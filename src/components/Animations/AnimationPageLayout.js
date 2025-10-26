import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Animations.css";

function AnimationPageLayout({ children }) {
  return (
    <Container fluid className="animation-section animation-page-layout">
      <Particle />
      <Container className="animation-detail-container">{children}</Container>
    </Container>
  );
}

export default AnimationPageLayout;
