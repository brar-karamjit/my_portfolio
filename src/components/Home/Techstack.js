import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Home.css";
import {
  SiSaltproject,
  SiSplunk,
} from "react-icons/si";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import terraform from "../../Assets/TechIcons/terraform.svg";
import jenkins from "../../Assets/TechIcons/jenkins.svg";
import ansible from "../../Assets/TechIcons/ansible.svg";
import gcp from "../../Assets/TechIcons/gcp.svg";
import powershell from "../../Assets/TechIcons/powershell.svg";
import prometheus from "../../Assets/TechIcons/prometheus.svg";
import grafana from "../../Assets/TechIcons/grafana.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="aws" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={terraform} alt="Terraform" className="tech-icon-images" />
        <div className="tech-icons-text">Terraform</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={jenkins} alt="Jenkins" className="tech-icon-images" />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ansible} alt="Ansible" className="tech-icon-images" />
        <div className="tech-icons-text">Ansible</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSaltproject />
        <div className="tech-icons-text">SaltStack</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={prometheus} alt="Prometheus" className="tech-icon-images" />
        <div className="tech-icons-text">Prometheus</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={grafana} alt="Grafana" className="tech-icon-images" />
        <div className="tech-icons-text">Grafana</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
        <div className="tech-icons-text">Splunk</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={gcp} alt="Google Cloud" className="tech-icon-images" />
        <div className="tech-icons-text">Google Cloud</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={powershell} alt="PowerShell" className="tech-icon-images" />
        <div className="tech-icons-text">PowerShell</div>
      </Col>
    </Row>
  );
}

export default Techstack;
