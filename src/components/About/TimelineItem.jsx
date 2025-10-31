import React from "react";

const TimelineItem = ({ year, title, description, icon }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" aria-hidden="true">
        <span className="timeline-marker-node" />
        <span className="timeline-icon">{icon || "💡"}</span>
      </div>
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;