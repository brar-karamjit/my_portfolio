import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import Timeline from "./Timeline";
import gradImg from "../../Assets/grad.jpeg";

import "../Home/Home.css";
import "./About.css";

function About() {
  return (
    <>
      <Particle />
      <section className="about-section" id="about">
        <Container className="about-hero">
          <Row className="align-items-center about-hero-row">
            <Col md={7} className="about-hero-text">
              <span className="section-eyebrow">About</span>
              <h1 className="about-title">
                Building resilient platforms with care and curiosity
              </h1>
              <p className="about-subtitle">
                I'm a DevOps engineer translating business goals into reliable, automated cloud platforms. From
                infrastructure-as-code to observability, I focus on the systems that keep teams shipping with
                confidence.
              </p>
            </Col>
            <Col md={5} className="about-hero-image">
              <div className="about-hero-image-wrapper">
                <img
                  src={gradImg}
                  alt="Karamjit Brar celebrating graduation"
                  className="img-fluid about-hero-illustration"
                />
                <div className="about-hero-image-glow" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="about-story about-surface home-surface">
          <Aboutcard />
        </Container>

        <Container className="about-timeline about-surface home-surface">
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">Experience timeline</h2>
          <p className="section-subtitle about-timeline-subtitle">
            The roles, milestones, and moments that shaped my approach to cloud, automation, and platform operations.
          </p>
          <Timeline />
        </Container>

        <Container className="about-github about-surface home-surface">
          <Github />
        </Container>
      </section>
    </>
  );
}

export default About;
