import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MomentInMotion"
              description="MomentInMotion is a personal activity suggestion web app that recommends things to do based on a user’s location, weather, and interests. The app uses real-time weather data and generative AI to provide personalized suggestions."
              ghLink="https://github.com/brar-karamjit/MomentInMotion"
              //demoLink="https://moment-in-motion.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Inventory Manager"
              description="The Inventory Manager is a robust Django-based web application designed to help businesses efficiently track and manage their inventory. With an intuitive interface and powerful features, this tool is ideal for businesses of all sizes."
              ghLink="https://github.com/brar-karamjit/inventory_manager"
              //demoLink="https://inventory-management-system.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio Website"
              description="The Portfolio Website is a personal project showcasing my skills, projects, and experiences. Built with React.js and Bootstrap, it features a modern design and responsive layout."
              ghLink="https://github.com/brar-karamjit/my_portfolio"
              demoLink="https://karamjitbrar.com/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
