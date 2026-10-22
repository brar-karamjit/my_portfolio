import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import AnimationCard from "./AnimationCard";
import momentImg from "../../Assets/Projects/AI-assistant.png";
import kubernetesGif from "../../Assets/Projects/kubenetes.gif";
import { interactivePosts } from "./AnimationData";

import "../Home/Home.css";
import "./Projects.css";

const projects = [
  {
    title: "MomentInMotion",
    description:
      "Personalized activity recommendations to enhance daily experiences, using location, weather, and generative AI to recommend activities.",
    imgPath: momentImg,
    ghLink: "https://github.com/brar-karamjit/MomentInMotion",
    demoLink: "https://momo.karamjitbrar.com/",
    tags: ["Django", "AI", "Gemini", "Kubernetes"],
  },
  {
    title: "Kubernetes Lab",
    description:
      "Kubernetes cluster deployed on Oracle Cloud Infrastructure (OCI). Features a CI/CD pipeline using GitHub Actions and Argo CD.",
    imgPath: kubernetesGif,
    ghLink: "https://github.com/brar-karamjit/devops_tools",
    demoLink: "https://k8s.karamjitbrar.com/",
    tags: ["Kubernetes", "OCI", "CI/CD", "Prometheus"],
  },
  {
    title: "AI-Powered ChatOps Agent",
    description:
      "An AI-driven Slack agent built with LangChain to troubleshoot failed Jenkins builds, create GitLab infrastructure merge requests, and streamline Jira workflows.",
    imgPath: momentImg,
    tags: ["LangChain", "Slack", "Jenkins", "GitLab", "Jira"],
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

        <hr className="projects-divider" />

        <Container className="projects-hero">
          <h1 className="projects-title">Animations</h1>
          
        </Container>

        <Container className="projects-grid home-surface">
          <div className="projects-grid-list">
            {interactivePosts.map((post) => (
              <AnimationCard key={post.id} {...post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Projects;
