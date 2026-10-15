import React from "react";
import "./About.css";



function AboutCard() {
  return (
    <div className="about-card">
      <p className="about-card-lead">
        Hi! I'm <span className="about-highlight">Karamjit Brar</span>, a
        <span className="about-highlight"> Platform Engineer &amp; AI Automation specialist</span> focused on cloud and hybrid infrastructure, based in
        <span className="about-highlight"> Toronto, Canada</span>.
      </p>
      <p className="about-card-body">
        Currently a <span className="about-highlight">Systems Engineer at Questrade</span>, I build scalable platform
        infrastructure and automation across cloud and on-premises environments. I also develop AI-powered tools that
        streamline troubleshooting and infrastructure workflows, alongside self-service capabilities, CI/CD pipelines,
        and infrastructure-as-code solutions.
      </p>
      <div className="about-card-facts">
        <div className="about-card-fact">
          <span className="about-card-fact-label">Focus</span>
          <span className="about-card-fact-value">Platform Engineering, AI Automation &amp; Hybrid Cloud</span>
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
    </div>
  );
}

export default AboutCard;
