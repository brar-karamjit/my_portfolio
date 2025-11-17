import React from "react";
import { Container, Card } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import momentImg from "../../Assets/Projects/AI-assistant.png";
import inventoryImg from "../../Assets/Projects/inventory.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import { Link } from "react-router-dom";
import { interactivePosts } from "../Animations/Animations";

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

        <Container className="projects-animations home-surface">
          <p className="section-eyebrow">Interactive Labs</p>
          <h2 className="projects-animations-title">Animations that explain the protocols</h2>
          <p className="projects-animations-subtitle">
            Rerun the packet journeys and cryptography walkthroughs from the blog right here.
          </p>
          <div className="blog-card-grid projects-animations-grid">
            {interactivePosts.map((post) => (
              <Card
                as={Link}
                to={post.path}
                key={post.id}
                className="blog-card"
              >
                <Card.Body>
                  <div className="blog-card-meta">
                    <span className="blog-card-topic">{post.topic}</span>
                    <span className="blog-card-time">{post.readingTime}</span>
                  </div>
                  <Card.Title className="blog-card-title">{post.title}</Card.Title>
                  <Card.Text className="blog-card-summary">{post.summary}</Card.Text>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Projects;
