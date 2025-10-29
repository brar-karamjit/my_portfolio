import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./About.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="orange">Karamjit Brar</span>, a{" "}
            <span className="orange">DevOps Engineer</span> specializing in Cloud & Automation
            from <span className="orange">Toronto, Canada</span>.
            <br />
            I'm currently working as a{" "}
            <span className="orange">System Engineer</span> at{" "}
            <span className="orange">Questrade</span>.
            <br />
            I hold a Bachelor of Science in{" "}
            <span className="orange">Computer Science</span> from{" "}
            <span className="orange">York University</span> with a GPA of 3.8/4.0.
            <br />
            <br />
            Outside of coding, I love activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying new recipes 🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
