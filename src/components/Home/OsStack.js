import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux } from "react-icons/fa";
import "./Home.css";
import windows from "../../Assets/TechIcons/windows.svg";

function OsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <FaLinux />
        <div className="tech-icons-text">Linux (RHEL, Ubuntu)</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={windows} alt="Windows Server" className="tech-icon-images" />
        <div className="tech-icons-text">Windows Server</div>
      </Col>
    </Row>
  );
}

export default OsStack;
