import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Timeline from "./Timeline";
import gradImg from "../../Assets/grad.jpeg";
import HobbiesCard from "./HobbiesCard";

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
              <h1 className="about-title">
                Engineering platforms that scale across cloud and hybrid environments
              </h1>
              <p className="about-subtitle">
                I'm a Platform Engineer specializing in DevOps practices, translating business requirements into robust, 
                automated infrastructure. From multi-cloud orchestration to hybrid deployments, I build the foundation 
                that enables engineering teams to deliver faster and more reliably.
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

        <Container className="about-story about-surface home-surface">
          <HobbiesCard />
        </Container>

        <Container className="about-timeline about-surface home-surface">
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">Experience timeline</h2>
          <p className="section-subtitle about-timeline-subtitle">
            My path through platform engineering, DevOps, and hybrid cloud infrastructure—building systems that bridge on-premises and cloud environments.
          </p>
          <Timeline />
        </Container>

        
      </section>
    </>
  );
}

export default About;
