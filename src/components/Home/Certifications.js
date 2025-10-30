import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
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
      date: "2025",
    },
    {
      title: "CKA - Certified Kubernetes Administrator",
      image: cka,
      issuedBy: "Linux Foundation",
      date: "2025",
    },
  ];

  return (
    <Container fluid className="certificate-section">
      <Container>
        <h1 className="project-heading">Certifications</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {certifications.map((cert) => (
            <Col
              md={3}
              key={cert.title}
              style={{ paddingTop: "20px" }}
              className="cert-avatar"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.02}
                transitionSpeed={2000}
              >
                <Card
                  className="cert-card-view"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Card.Img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-img"
                    style={{
                      maxHeight: "250px",
                      objectFit: "contain",
                      padding: "10px",
                      background: "rgba(255, 255, 255, 0)",
                    }}
                  />
                </Card>
              </Tilt>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
