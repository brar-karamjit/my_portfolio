import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Type from "./Type";
import Techstack from "./Techstack";
import OsStack from "./OsStack";
import Certifications from "./Certifications";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center home-hero-row">
            <Col md={7} className="home-header home-hero-text">
              <span className="home-hero-badge">
                DevOps Engineer · Cloud &amp; Automation
              </span>
              <h1 className="home-title">
                Hi there!
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>
              <h2 className="home-name">
                I'm <span>Karamjit Brar</span>
              </h2>
              <p className="home-subtitle">
                I design, automate, and scale resilient infrastructure so teams can ship with confidence and clarity.
              </p>
              <div className="home-divider" />
              <div className="home-typewriter">
                <Type />
                <span className="home-typewriter-label"></span>
              </div>
            </Col>
            <Col md={5} className="home-hero-image">
              <div className="home-hero-image-wrapper">
                <img
                  src={homeLogo}
                  alt="Illustration of a DevOps engineer at work"
                  className="img-fluid home-hero-illustration"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="home-surface home-social-section">
        <p className="section-eyebrow">Let's Connect</p>
        <h2 className="section-title">Building reliable platforms together</h2>
        <p className="section-subtitle">
          I love collaborating on automation-first infrastructure and sharing ideas with fellow engineers. Reach out anytime.
        </p>
        <div className="home-social-links">
          <a
            href="https://github.com/brar-karamjit"
            target="_blank"
            rel="noreferrer"
            className="home-social-icon"
            aria-label="GitHub profile"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kramjitbr/"
            target="_blank"
            rel="noreferrer"
            className="home-social-icon"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </Container>

      <Container className="home-stack-section home-surface">
        <p className="section-eyebrow">Toolkit</p>
        <h2 className="project-heading home-section-heading">Tools and Platforms</h2>
        <p className="section-subtitle">
          Frameworks and services I rely on to build observable, secure, and scalable systems.
        </p>
        <Techstack />
      </Container>

      <Container className="home-stack-section home-surface">
        <p className="section-eyebrow">Environments</p>
        <h2 className="project-heading home-section-heading">Operating Systems</h2>
        <p className="section-subtitle">
          Experience across these operating systems in both cloud-native and on-premises environments.
        </p>
        <OsStack />
      </Container>

      <Container className="home-stack-section home-surface">
        <Certifications />
      </Container>

      
    </section>
  );
}

export default Home;
