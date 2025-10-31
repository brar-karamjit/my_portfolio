import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="about-github-content">
      <p className="section-eyebrow">Consistency</p>
      <h2 className="section-title">Days I code</h2>
      <p className="section-subtitle about-github-subtitle">
        A snapshot of my recent GitHub activity. I aim to keep momentum by committing to daily learning and incremental improvements.
      </p>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="brar-karamjit"
          blockSize={18}
          blockMargin={6}
          color="#4fe0c3"
          fontSize={15}
        />
      </div>
    </div>
  );
}

export default Github;
