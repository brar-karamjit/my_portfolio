import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

import "./Projects.css";

function ProjectCards({ title, description, imgPath, ghLink, demoLink, tags = [] }) {
  const hasDemo = Boolean(demoLink);

  return (
    <article className="project-card">
      <div className="project-card-media">
        <img src={imgPath} alt={`${title} preview`} loading="lazy" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {tags.length > 0 && (
          <ul className="project-card-tags">
            {tags.map((tag) => (
              <li key={`${title}-${tag}`}>{tag}</li>
            ))}
          </ul>
        )}
        <div className="project-card-actions">
          <a
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            className="project-card-link project-card-link-primary"
            aria-label={`${title} source on GitHub`}
          >
            <BsGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>
          {hasDemo && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-link"
              aria-label={`${title} live demo`}
            >
              <CgWebsite aria-hidden="true" />
              <span>Live demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
