import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Home.css";
import { SiArgo, SiSaltproject, SiSplunk } from "react-icons/si";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import vsphere from "../../Assets/TechIcons/vsphere.svg";
import entraid from "../../Assets/TechIcons/entraid.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import terraform from "../../Assets/TechIcons/terraform.svg";
import jenkins from "../../Assets/TechIcons/jenkins.svg";
import ansible from "../../Assets/TechIcons/ansible.svg";
import gcp from "../../Assets/TechIcons/gcp.svg";
import bash from "../../Assets/TechIcons/bash.svg";
import langchain from "../../Assets/TechIcons/langchain.svg";
import oracle from "../../Assets/TechIcons/oracle.svg";
import datadog from "../../Assets/TechIcons/datadog.svg";
import prometheus from "../../Assets/TechIcons/prometheus.svg";
import grafana from "../../Assets/TechIcons/grafana.svg";

// `img` renders an SVG asset; `icon` renders a react-icons component.
const groups = [
  {
    title: "Cloud & Platforms",
    items: [
      { name: "AWS", img: AWS },
      { name: "Google Cloud", img: gcp },
      { name: "Kubernetes", img: Kubernates },
      { name: "vSphere", img: vsphere },
      { name: "Oracle", img: oracle, hideLabel: true, zoom: true },
    ],
  },
  {
    title: "Infrastructure & Tools",
    items: [
      { name: "Terraform", img: terraform },
      { name: "Ansible", img: ansible },
      { name: "SaltStack", icon: <SiSaltproject /> },
      { name: "Jenkins", img: jenkins },
      { name: "ArgoCD", icon: <SiArgo /> },
      { name: "Entra ID", img: entraid },
      { name: "Git", img: Git },
    ],
  },
  {
    title: "AI & Programming",
    items: [
      { name: "Python", img: Python },
      { name: "Java", img: Java },
      { name: "Bash", img: bash },
      { name: "LangChain", img: langchain },
    ],
  },
  {
    title: "Observability",
    items: [
      { name: "Datadog", img: datadog },
      { name: "Prometheus", img: prometheus },
      { name: "Grafana", img: grafana },
      { name: "Splunk", icon: <SiSplunk /> },
    ],
  },
];

function Techstack() {
  return (
    <>
      {groups.map((group) => (
        <div key={group.title} className="tech-group">
          <h3 className="tech-group-title">{group.title}</h3>
          <Row style={{ justifyContent: "center" }}>
            {group.items.map((item) => (
              <Col key={item.name} xs={4} md={2} className="tech-icons">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`tech-icon-images${item.zoom ? " tech-icon-zoom" : ""}`}
                  />
                ) : (
                  item.icon
                )}
                {!item.hideLabel && (
                  <div className="tech-icons-text">{item.name}</div>
                )}
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Techstack;
