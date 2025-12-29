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
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        
        {/* Animated gradient orbs */}
        <div className="home-gradient-orb home-gradient-orb-1" />
        <div className="home-gradient-orb home-gradient-orb-2" />
        <div className="home-gradient-orb home-gradient-orb-3" />
        
        {/* Floating decorative elements */}
        <motion.div 
          className="home-floating-element home-floating-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BsStars />
        </motion.div>
        <motion.div 
          className="home-floating-element home-floating-2"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <BsStars />
        </motion.div>
        
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
                  <span className="home-status-dot" />
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
          
          {/* Scroll indicator */}
          <motion.div 
            className="home-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiOutlineChevronDoubleDown className="home-scroll-icon" />
              <span className="home-scroll-text">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </Container>
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

      <Container className="home-stack-section home-surface home-surface-glow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="section-eyebrow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Toolkit
          </motion.p>
          <motion.h2 
            className="project-heading home-section-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tools and Platforms
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Technologies and platforms I leverage to architect, automate, and operate resilient infrastructure across cloud and hybrid environments.
          </motion.p>
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



      <Container className="home-surface home-social-section">
        <div className="home-social-bg-pattern" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="home-social-content">
            <motion.p 
              className="section-eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's Connect
            </motion.p>
            <motion.h2 
              className="section-title home-section-heading"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Ready to Collaborate?
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            <motion.div 
              className="home-social-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/brar-karamjit"
                target="_blank"
                rel="noreferrer"
                className="home-social-icon"
                aria-label="GitHub profile"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <AiFillGithub />
                <span className="home-social-tooltip">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kramjitbr/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icon"
                aria-label="LinkedIn profile"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
                <span className="home-social-tooltip">LinkedIn</span>
              </motion.a>
            </motion.div>
            <motion.div 
              className="home-contact-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/kramjitbr/"
                target="_blank"
                rel="noreferrer"
                className="home-cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="home-cta-btn-text">Say Hello</span>
                <span className="home-cta-btn-arrow">→</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


export default Home;
