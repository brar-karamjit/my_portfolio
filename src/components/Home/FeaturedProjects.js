import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaRobot, FaCubes, FaBolt } from "react-icons/fa";
import "./Home.css";

const featured = [
  {
    title: "Kubernetes GitOps Platform",
    icon: <FaCubes />,
    description:
      "Three-node k3s cluster on Oracle Cloud, provisioned with Terraform and operated entirely through GitOps. Argo CD syncs the platform stack — Istio, cert-manager, External Secrets, Prometheus and Grafana — and the applications it hosts, including MomentInMotion below.",
    tags: ["Kubernetes", "Terraform", "Argo CD", "Istio", "Prometheus"],
    to: "/project",
    ghLink: "https://github.com/brar-karamjit/devops_tools",
  },
  {
    title: "AI-Powered ChatOps Agent",
    icon: <FaRobot />,
    description:
      "An AI-driven Slack agent built with LangChain to troubleshoot failed Jenkins builds, create GitLab infrastructure merge requests, and streamline Jira workflows.",
    tags: ["LangChain", "Slack", "Jenkins", "GitLab", "Jira"],
    to: "/project",
  },
  {
    title: "MomentInMotion",
    icon: <FaBolt />,
    description:
      "Django application hosted on my own Kubernetes platform and delivered through Argo CD GitOps. Uses location, weather, and generative AI to recommend activities and break decision fatigue.",
    tags: ["Django", "Kubernetes", "Argo CD", "Gemini"],
    to: "/project",
    ghLink: "https://github.com/brar-karamjit/moment_in_motion",
  },
];

function FeaturedProjects() {
  return (
    <>
      <p className="section-eyebrow">Featured Projects</p>
      <p className="section-subtitle">
        A few things I've built to automate infrastructure and make operations
        faster and more reliable.
      </p>
      <Row className="g-4 justify-content-center">
        {featured.map((project) => (
          <Col key={project.title} xs={12} md={6} lg={4}>
            <div className="home-feature-card">
              <span className="home-stat-icon">{project.icon}</span>
              <h3 className="home-feature-title">{project.title}</h3>
              <p className="home-stat-detail">{project.description}</p>
              <div className="home-feature-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="home-feature-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="home-feature-links">
                <Link to={project.to} className="home-feature-link">
                  Details
                </Link>
                {project.ghLink && (
                  <a
                    href={project.ghLink}
                    target="_blank"
                    rel="noreferrer"
                    className="home-feature-link"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <AiFillGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default FeaturedProjects;
