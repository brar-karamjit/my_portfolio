import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import Timeline from "./Timeline";
import laptopImg from "../../Assets/about.png";

import "./About.css";



function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who I'M
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={3}
              style={{ paddingTop: "120px", paddingBottom: "50px", paddingLeft: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h1 className="project-heading">
            Experience Timeline 
          </h1>

          <Timeline />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
