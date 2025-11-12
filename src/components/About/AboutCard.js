import React from "react";
import "./About.css";

const interests = [
  {
    title: "Playing story-driven games",
    icon: "🎮",
    label: "Game controller emoji",
  },
  {
    title: "Experimenting with new recipes",
    icon: "🍳",
    label: "Cooking emoji",
  },
  {
    title: "Exploring new places and cultures",
    icon: "🌍",
    label: "Globe emoji",
  },
];

function AboutCard() {
  return (
    <div className="about-card">
      <p className="about-card-lead">
        Hi! I'm <span className="about-highlight">Karamjit Brar</span>, a
        <span className="about-highlight"> Platform Engineer</span> specializing in DevOps, cloud, and hybrid infrastructure based in
        <span className="about-highlight"> Toronto, Canada</span>.
      </p>
      <p className="about-card-body">
        Currently a <span className="about-highlight">Systems Engineer at Questrade</span>, I architect and operate 
        scalable platform infrastructure spanning cloud and on-premises environments. My focus is on building 
        self-service capabilities, robust CI/CD pipelines, and infrastructure-as-code solutions that enable teams 
        to deploy with confidence across hybrid architectures.
      </p>
      <div className="about-card-facts">
        <div className="about-card-fact">
          <span className="about-card-fact-label">Focus</span>
          <span className="about-card-fact-value">Platform Engineering &amp; Hybrid Cloud</span>
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
      <div className="about-card-interests">
        <div className="about-card-hobbies">
          <span className="about-card-hobbies-label">Interests and Hobbies</span>
          <div className="about-card-interest-grid">
            {interests.map(({ title, icon, label }) => (
              <div className="about-card-interest" key={title}>
                <span className="about-card-interest-icon" role="img" aria-label={label}>
                  {icon}
                </span>
                <span className="about-card-interest-title">{title}</span>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default AboutCard;
