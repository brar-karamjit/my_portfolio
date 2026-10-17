import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaServer, FaRobot, FaCubes } from "react-icons/fa";
import "./Home.css";

const featured = [
  {
    title: "Infrastructure Provisioning Automation",
    icon: <FaServer />,
    description:
      "Repeatable, self-service provisioning of cloud and on-premises infrastructure using code instead of tickets and manual steps.",
    tags: ["Terraform", "Ansible", "SaltStack", "Jenkins"],
    to: "/project",
  },
  {
    title: "AI-Powered ChatOps Agent",
    icon: <FaRobot />,
    description:
      "An AI assistant that helps teams troubleshoot incidents and run operational workflows straight from chat.",
    tags: ["Python", "LLM", "Runbooks", "Automation"],
    to: "/project",
  },
  {
    title: "Kubernetes GitOps Homelab",
    icon: <FaCubes />,
    description:
      "A Kubernetes cluster on Oracle Cloud delivered through GitHub Actions and Argo CD, with Istio, cert-manager, and Prometheus.",
    tags: ["Kubernetes", "Argo CD", "Istio", "Prometheus"],
    to: "/project",
    ghLink: "https://github.com/brar-karamjit/devops_tools",
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
