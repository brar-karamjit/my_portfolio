import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import windows from "../../Assets/TechIcons/windows.svg";
import redhat from "../../Assets/TechIcons/redhat.svg";
import ubuntu from "../../Assets/TechIcons/ubuntu.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={redhat} alt="RHEL" className="tech-icon-images" />
        <div className="tech-icons-text">RHEL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ubuntu} alt="RHEL" className="tech-icon-images" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="Windows Server" className="tech-icon-images" />
        <div className="tech-icons-text">Windows Server</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
