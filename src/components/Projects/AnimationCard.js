import React from "react";
import { Link } from "react-router-dom";
import { CgPlayButtonO } from "react-icons/cg";
import "./Projects.css";

function AnimationCard({ title, summary, topic, readingTime, path, imgPath, tags = [] }) {
  return (
    <article className="project-card" style={{ height: "100%" }}>
      {imgPath && (
        <div className="project-card-media">
          <img src={imgPath} alt={`${title} preview`} loading="lazy" />
        </div>
      )}
      <div className="project-card-content" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div className="project-card-meta" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span style={{ color: "var(--home-accent)", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{topic}</span>
          <span style={{ color: "var(--home-text-secondary)", fontSize: "0.8rem" }}>{readingTime}</span>
        </div>
        
        <h3 className="project-card-title" style={{ marginBottom: "0.8rem" }}>{title}</h3>
        <p className="project-card-description" style={{ marginBottom: "1.5rem", flex: "1" }}>{summary}</p>
        
        {tags.length > 0 && (
          <ul className="project-card-tags" style={{ marginBottom: "1.5rem" }}>
            {tags.map((tag) => (
              <li key={`${title}-${tag}`}>{tag}</li>
            ))}
          </ul>
        )}
        
        <div className="project-card-actions">
          <Link
            to={path}
            className="project-card-link"
            aria-label={`Watch ${title} animation`}
          >
            <CgPlayButtonO aria-hidden="true" style={{ fontSize: "1.2rem" }} />
            <span>Watch Animation</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AnimationCard;
