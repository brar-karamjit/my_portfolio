import React from "react";

const TimelineItem = ({ year, title, description, icon, iconSrc, iconAlt }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" aria-hidden="true">
        <div className="timeline-icon">
          {iconSrc ? (
            <img src={iconSrc} alt={iconAlt || "Timeline milestone"} />
          ) : (
            <span role="img" aria-label={iconAlt || "Timeline milestone"}>
              {icon || "💡"}
            </span>
          )}
        </div>
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