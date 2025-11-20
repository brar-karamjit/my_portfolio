import React from "react";
import Tilt from "react-parallax-tilt";
import "./About.css";

const interests = [
  {
    title: "Gaming",
    desc: "Immersing in PS5 worlds",
    icon: "🎮",
    color: "from-purple-500 to-indigo-500",
    label: "Game controller emoji",
  },
  {
    title: "Cooking",
    desc: "Experimenting with recipes",
    icon: "🍳",
    color: "from-orange-400 to-red-500",
    label: "Cooking emoji",
  },
  {
    title: "Travel",
    desc: "Exploring new cultures",
    icon: "🌍",
    color: "from-green-400 to-emerald-600",
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
            {interests.map(({ title, desc, icon, label }) => (
              <Tilt
                key={title}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.05}
                className="hobby-tilt"
              >
                <div className="about-card-interest">
                  <div className="hobby-content">
                    <span className="about-card-interest-icon" role="img" aria-label={label}>
                      {icon}
                    </span>
                    <h3 className="about-card-interest-title">{title}</h3>
                    <p className="about-card-interest-desc">{desc}</p>
                  </div>
                  <div className="hobby-bg-icon">{icon}</div>
                  <div className="hobby-glow"></div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbiesCard;
