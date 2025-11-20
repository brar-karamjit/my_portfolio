import React from "react";
import { Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import awsSa from "../../Assets/aws-certified-solutions-architect.png";
import awsDev from "../../Assets/aws-developer.png";
import cka from "../../Assets/cka-kubernetes.png";
import "./Home.css";

function Certifications() {
  const certifications = [
    {
      title: "AWS Solutions Architect Associate",
      image: awsSa,
      issuedBy: "Amazon Web Services",
      date: "2025",
    },
    {
      title: "AWS Developer Associate",
      image: awsDev,
      issuedBy: "Amazon Web Services",
      date: "2024",
    },
    {
      title: "CKA - Certified Kubernetes Administrator",
      image: cka,
      issuedBy: "Linux Foundation",
      date: "2025",
    },
  ];

  return (
    <>
      <h2 className="project-heading home-section-heading">Certifications</h2>
      <p className="section-subtitle">
        Certifications that back up my experience leading automation, platform engineering, and SRE initiatives.
      </p>
      <Row className="g-4 justify-content-center">
        {certifications.map((cert) => (
          <Col key={cert.title} xs={12} sm={6} lg={4} className="cert-avatar">
            <Tilt
              className="cert-tilt"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable
              glareMaxOpacity={0.15}
              scale={1.02}
              transitionSpeed={2000}
              perspective={1000}
            >
              <div className="cert-card">
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <div className="cert-card-meta">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-issuer">{cert.issuedBy}</p>
                  <span className="cert-card-year">{cert.date}</span>
                </div>
              </div>
            </Tilt>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Certifications;

