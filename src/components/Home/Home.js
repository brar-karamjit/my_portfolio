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
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center home-hero-row">
            <Col md={7} className="home-header home-hero-text">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  className="home-hero-badge"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Platform Engineer · Cloud &amp; Hybrid Infrastructure
                </motion.span>
                <motion.h2 
                  className="home-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Hi there!
                </motion.h2>
                <motion.h1 
                  className="home-name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  I'm <span className="main-name">Karamjit Brar</span>
                </motion.h1>
                <motion.p 
                  className="home-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  I build, scale and maintain automation for infrastructure across cloud and on-premise environments, empowering engineering teams with reliable systems and self-service capabilities.
                </motion.p>
                <motion.div 
                  className="home-divider" 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "circOut" }}
                  style={{ originX: 0 }}
                />
                <motion.div 
                  className="home-typewriter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Type />
                  <span className="home-typewriter-label"></span>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={5} className="home-hero-image">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="home-hero-image-wrapper"
              >
                <img
                  src={homeLogo}
                  alt="Illustration of a DevOps engineer at work"
                  className="img-fluid home-hero-illustration"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="home-surface home-social-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Let's Connect</p>
          <h2 className="section-title">Building scalable platforms together</h2>
          <p className="section-subtitle">
            Passionate about platform engineering, hybrid cloud architectures, and DevOps best practices. Let's collaborate on projects that enables teams to innovate faster.
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
        </motion.div>
      </Container>

      <Container className="home-stack-section home-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Toolkit</p>
          <h2 className="project-heading home-section-heading">Tools and Platforms</h2>
          <p className="section-subtitle">
            Technologies and platforms I leverage to architect, automate, and operate resilient infrastructure across cloud and hybrid environments.
          </p>
          <Techstack />
        </motion.div>
      </Container>

      <Container className="home-stack-section home-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Environments</p>
          <h2 className="project-heading home-section-heading">Operating Systems</h2>
          <p className="section-subtitle">
            Deep expertise across Linux and Windows ecosystems in cloud-native, hybrid, and on-premises deployments.
          </p>
          <OsStack />
        </motion.div>
      </Container>

      <Container className="home-stack-section home-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Certifications />
        </motion.div>
      </Container>
    </section>
  );
}


export default Home;
