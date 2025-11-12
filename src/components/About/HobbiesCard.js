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

function HobbiesCard() {
  return (
    <div className="about-card">
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

export default HobbiesCard;
