import React from "react";

const TimelineItem = ({ year, title, description, icon }) => {
  return (
    <div className="timeline">
      <span className="timeline-icon">{icon}</span>
      <span className="timeline-year">{year}</span>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;