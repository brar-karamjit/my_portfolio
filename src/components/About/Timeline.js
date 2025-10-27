import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Timeline.css";

const timelines = [
  {
    type: "work",
    title: "System Engineer",
    organization: "Questrade",
    location: "Toronto, ON",
    duration: "Dec 2023 – Present",
    points: [
      "Building and automating multi-cloud infrastructure (AWS, GCP, vSphere) using Jenkins, Terraform, and SaltStack.",
      "Deployed monitoring stacks (Prometheus & Grafana) on EKS and optimized cloud costs by $12K/month."
    ]
  },
  {
    type: "work",
    title: "Infrastructure Engineer Intern",
    organization: "Questrade",
    location: "Toronto, ON",
    duration: "May 2023 – Dec 2023",
    points: [
      "Automated configuration management and testing pipelines using GitLab, SaltStack, and Python.",
      "Standardized app deployments with Chocolatey and JFrog Artifactory."
    ]
  },
  {
    type: "work",
    title: "DevOps Engineer Intern",
    organization: "CGI Inc.",
    location: "Markham, ON",
    duration: "Sep 2022 – Apr 2023",
    points: [
      "Led Jira Data Center migration and automated workflows with Groovy & ScriptRunner.",
      "Improved project management adoption across teams."
    ]
  },
  {
    type: "education",
    title: "BSc in Computer Science",
    organization: "York University",
    location: "Toronto, ON",
    duration: "2019 – 2023",
    points: ["GPA: 3.8 / 4.0"]
  },
  {
    type: "certification",
    title: "Certified Kubernetes Administrator (CKA)",
    organization: "Linux Foundation",
    duration: "July 2025"
  },
  {
    type: "certification",
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    duration: "Jan 2025"
  },
  {
    type: "certification",
    title: "AWS Certified Developer – Associate",
    organization: "Amazon Web Services",
    duration: "Sep 2024"
  }
];

const iconFor = {
  work: FaBriefcase,
  education: FaGraduationCap,
  certification: FaCertificate
};

function Timeline() {
  return (
    <Container fluid className="timeline-section">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="project-heading">
              🧑‍💻 <strong className="purple">Professional Timeline</strong>
            </h1>
            <div className="timeline-track">
              {timelines.map((item, index) => {
                const Icon = iconFor[item.type] ?? FaBriefcase;
                const alignment = index % 2 === 0 ? "event-top" : "event-bottom";

                return (
                  <div
                    key={`${item.title}-${index}`}
                    className={`timeline-event ${alignment}`}
                  >
                    <span
                      className={`timeline-branch timeline-branch-${alignment}`}
                    />
                    <span className={`timeline-dot timeline-dot-${item.type}`}>
                      <Icon />
                    </span>
                    <Card className={`timeline-card timeline-card-${item.type}`}>
                      <Card.Body>
                        <div className="timeline-header">
                          <span className="timeline-duration">{item.duration}</span>
                          <h4 className="timeline-title">{item.title}</h4>
                          <p className="timeline-organization">
                            {item.organization}
                            {item.location && (
                              <span className="timeline-location">
                                <FaMapMarkerAlt />
                                {item.location}
                              </span>
                            )}
                          </p>
                        </div>
                        {item.points && (
                          <ul className="timeline-points">
                            {item.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="timeline-point">
                                <ImPointRight />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Timeline;