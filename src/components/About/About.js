import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Timeline from "./Timeline";
import gradImg from "../../Assets/grad.jpeg";
import HobbiesCard from "./HobbiesCard";
import { motion } from "framer-motion";

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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="about-title">
                  Platform engineering and AI automation for reliable infrastructure
                </h1>
                <p className="about-subtitle">
                  I'm a Platform Engineer at Questrade focused on cloud and hybrid infrastructure, automation, and AI-enabled
                  tooling. I build systems that simplify operations, speed up delivery, and help engineering teams work
                  more reliably.
                </p>
              </motion.div>
            </Col>
            <Col md={5} className="about-hero-image">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="about-hero-image-wrapper"
              >
                <img
                  src={gradImg}
                  alt="Karamjit Brar celebrating graduation"
                  className="img-fluid about-hero-illustration"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>

        <Container className="about-surface home-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Aboutcard />
          </motion.div>
        </Container>

        <Container className="about-surface home-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HobbiesCard />
          </motion.div>
        </Container>

        <Container className="about-surface home-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle about-timeline-subtitle">
              My path through platform engineering, DevOps, and hybrid cloud infrastructure—building systems that bridge on-premises and cloud environments.
            </p>
            <Timeline />
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default About;
