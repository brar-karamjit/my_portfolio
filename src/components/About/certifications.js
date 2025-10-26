import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";
import aws_sa from "../../Assets/aws-certified-solutions-architect.png";
import aws_dev from "../../Assets/aws-developer.png";
import cka from "../../Assets/cka-kubernetes.png";
import "./About.css";

function Certifications() {
  const certifications = [
    {
      title: "AWS Solutions Architect Associate",
      image: aws_sa, // Using temporary image
      issuedBy: "Amazon Web Services",
      date: "2025"
    },
    {
      title: "AWS Deverloper Associate",
      image: aws_dev, // Using temporary image
      issuedBy: "Amazon Web Services",
      date: "2025"
    },
    {
      title: "CKA - Certified Kubernetes Administrator",
      image: cka, // Using temporary image
      issuedBy: "Linux Foundation",
      date: "2025"
    },
    // Add more certifications as needed
  ];

  return (
    <Container fluid className="certificate-section">
      <Container>
        <h1 className="project-heading">
          Certifications 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {certifications.map((cert, index) => (
            <Col md={3} key={index} style={{ paddingTop: "20px" }} className="cert-avatar">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2000}>
                <Card className="cert-card-view" style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  transition: "all 0.3s ease-in-out"
                }}>
                  <Card.Img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-img"
                    style={{
                      maxHeight: "250px",
                      objectFit: "contain",
                      padding: "10px",
                      background: "rgba(255, 255, 255, 0)"
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
