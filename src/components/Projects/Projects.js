import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import momentImg from "../../Assets/Projects/AI-assistant.png";
import kubernetesGif from "../../Assets/Projects/kubenetes.gif";

import "../Home/Home.css";
import "./Projects.css";

const projects = [
  {
    title: "Kubernetes GitOps Platform",
    description:
      "Three-node k3s cluster on Oracle Cloud, provisioned with Terraform and operated entirely through GitOps. Argo CD syncs the platform stack — Istio, cert-manager, External Secrets, Prometheus and Grafana — and the applications it hosts, including MomentInMotion below.",
    imgPath: kubernetesGif,
    ghLink: "https://github.com/brar-karamjit/devops_tools",
    demoLink: "https://k8s.karamjitbrar.com/",
    tags: ["Kubernetes", "Terraform", "Argo CD", "Istio", "Prometheus"],
  },
  {
    title: "AI-Powered ChatOps Agent",
    description:
      "An AI-driven Slack agent built with LangChain to troubleshoot failed Jenkins builds, create GitLab infrastructure merge requests, and streamline Jira workflows.",
    tags: ["LangChain", "Slack", "Jenkins", "GitLab", "Jira"],
  },
  {
    title: "MomentInMotion",
    description:
      "Django application hosted on my own Kubernetes platform and delivered through Argo CD GitOps. Uses location, weather, and generative AI to recommend activities and break decision fatigue.",
    imgPath: momentImg,
    ghLink: "https://github.com/brar-karamjit/moment_in_motion",
    demoLink: "https://momo.karamjitbrar.com/",
    tags: ["Django", "Kubernetes", "Argo CD", "Gemini"],
  },
];

function Projects() {
  return (
    <>
      <Particle />
      <section className="projects-section" id="projects">
        <Container className="projects-hero">
          <h1 className="projects-title">Projects</h1>
        </Container>

        <Container className="projects-grid home-surface">
          <div className="projects-grid-list">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Container>

      </section>
    </>
  );
}

export default Projects;
