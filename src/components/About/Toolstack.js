import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import { 

  SiRedhat,
  SiUbuntu,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <SiRedhat fontSize={"24px"} />
        <div className="tech-icons-text">RHEL</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu fontSize={"24px"} />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={"24px"} />
        <div className="tech-icons-text">Windows Server</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
