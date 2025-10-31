import React from "react";
import { ImPointRight } from "react-icons/im";
import "./About.css";

function AboutCard() {
  return (
    <div className="about-card">
      <p className="about-card-lead">
        Hi! I'm <span className="about-highlight">Karamjit Brar</span>, a
        <span className="about-highlight"> DevOps Engineer</span> specializing in cloud platforms and automation based in
        <span className="about-highlight"> Toronto, Canada</span>.
      </p>
      <p className="about-card-body">
        Today I design and maintain infrastructure as a <span className="about-highlight">Systems Engineer at Questrade</span>,
        where I help teams ship confidently with scalable pipelines, observability-first tooling, and thoughtful automation.
      </p>
      <div className="about-card-facts">
        <div className="about-card-fact">
          <span className="about-card-fact-label">Focus</span>
          <span className="about-card-fact-value">Cloud &amp; Automation</span>
        </div>
        <div className="about-card-fact">
          <span className="about-card-fact-label">Education</span>
          <span className="about-card-fact-value">B.Sc. Computer Science, York University (GPA 3.8/4.0)</span>
        </div>
        <div className="about-card-fact">
          <span className="about-card-fact-label">Location</span>
          <span className="about-card-fact-value">Toronto, Canada</span>
        </div>
      </div>
      <div className="about-card-hobbies">
        <span className="about-card-hobbies-label">Outside the terminal</span>
        <ul className="about-card-list">
          <li>
            <ImPointRight aria-hidden="true" />
            <span>Playing story-driven games 🎮</span>
          </li>
          <li>
            <ImPointRight aria-hidden="true" />
            <span>Experimenting with new recipes 🍳</span>
          </li>
          <li>
            <ImPointRight aria-hidden="true" />
            <span>Exploring new places and cultures 🌍</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
