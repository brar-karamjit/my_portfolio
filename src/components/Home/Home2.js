import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me introduce myself
            </h1>
            <p className="home-about-body">
              I'm a Platform Engineer specializing in DevOps, cloud, and hybrid infrastructure.
              With hands-on experience in enterprise environments, I focus on building
              scalable, efficient systems and streamlining deployment processes.
              <br />
              <br />
              I'm proficient in cloud platforms and tools including
              <i>
                <b className="blue">
                  {" "}
                  AWS, GCP, Kubernetes, Terraform, and Jenkins{" "}
                </b>
              </i>
              , with expertise in both cloud and on-premises infrastructure.
              <br />
              <br />
              My core competencies include
              <i>
                <b className="blue">
                  {" "}
                  Infrastructure as Code, CI/CD Pipeline Development,{" "}
                </b>
              </i>
              and implementing monitoring solutions across hybrid cloud environments.
              <br />
              <br />
              I'm passionate about automation and currently work with
              <b className="blue"> Kubernetes </b> and modern DevOps tools like{" "}
              <i>
                <b className="blue">Terraform</b> and{" "}
                <b className="blue">SaltStack</b>
              </i>
              , while holding certifications in
              <b className="blue"> CKA and AWS</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
