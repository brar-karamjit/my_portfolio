import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Karamjit Brar</span>, a{" "}
            <span className="purple">DevOps Engineer</span> specializing in Cloud & Automation
            from <span className="purple">Toronto, Canada</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">System Engineer</span> at{" "}
            <span className="purple">Questrade</span>.
            <br />
            I hold a Bachelor of Science in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">York University</span> with a GPA of 3.8/4.0.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            I'm certified as a <span className="purple">Kubernetes Administrator (CKA)</span>,{" "}
            <span className="purple">AWS Solutions Architect</span>, and{" "}
            <span className="purple">AWS Developer Associate</span>.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Automating today for a more efficient tomorrow"{" "}
          </p>
          <footer className="blockquote-footer">Karamjit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
