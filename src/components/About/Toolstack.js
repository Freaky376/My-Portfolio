import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithubactions } from "react-icons/si";
import windows from "../../Assets/TechIcons/windows.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions fontSize={"24px"} />
        <div className="tech-icons-text">GitHub Actions</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
