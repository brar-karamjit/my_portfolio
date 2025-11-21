import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import AnimationCard from "./AnimationCard";
import momentImg from "../../Assets/Projects/AI-assistant.png";
import inventoryImg from "../../Assets/Projects/inventory.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import { interactivePosts } from "./AnimationData";

import "../Home/Home.css";
import "./Projects.css";
import "../Blog/Blog.css";

const projects = [
  {
    title: "MomentInMotion",
    description:
      "Personalized activity recommendations to enhance daily experiences, using location, weather, and generative AI to recommend activities.",
    imgPath: momentImg,
    ghLink: "https://github.com/brar-karamjit/MomentInMotion",
    demoLink: "https://moment-in-motion.web.app/",
    tags: ["Django", "AI", "Gemini", "Kubernetes"],
  },
  {
    title: "Inventory Manager",
    description:
      "Role-based inventory operations with audit trails, low-stock automation, and customizable dashboards for fast-moving product teams.",
    imgPath: inventoryImg,
    ghLink: "https://github.com/brar-karamjit/inventory_manager",
    demoLink: "https://hub.docker.com/repository/docker/karamjitbrar/inventory_manager",
    tags: ["Django", "CRUD", "Docker", "CI/CD"],
  },
  {
    title: "Portfolio Platform",
    description:
      "The site you are exploring—crafted with React and a DevOps mindset to showcase projects, experiments, and a resilient design system.",
    imgPath: portfolioImg,
    ghLink: "https://github.com/brar-karamjit/my_portfolio",
    demoLink: "https://karamjitbrar.com/",
    tags: ["React", "Vercel", "Framer Motion", "Portfolio"],
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
          <h1 className="projects-title">Interactive Labs</h1>
          <p className="projects-subtitle" style={{ color: 'var(--home-text-secondary)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: '1.6' }}>
            Animations that explain the protocols. Rerun the packet journeys and cryptography walkthroughs.
          </p>
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
