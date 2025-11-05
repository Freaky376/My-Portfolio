import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

import PHP from "../../Assets/TechIcons/php.svg";
import SocketIO from "../../Assets/TechIcons/SocketIO.svg";
import GoogleAppScript from "../../Assets/TechIcons/GoogleAppScript.svg";
import Laravel from "../../Assets/TechIcons/Laravel.svg";
import MySQL from "../../Assets/TechIcons/MySQL.svg";
import Trello from "../../Assets/TechIcons/Trello.svg";
import Xampp from "../../Assets/TechIcons/Xampp.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <img src={PHP} alt="PHP" className="tech-icon-images" />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Xampp} alt="xampp" />
        <div className="tech-icons-text">XAMPP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Trello} alt="trello" />
        <div className="tech-icons-text">Trello</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SocketIO} alt="SocketIO" className="tech-icon-images" />
        <div className="tech-icons-text">SocketIO</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GoogleAppScript} alt="GoogleAppScript" className="tech-icon-images" />
        <div className="tech-icons-text">Google App Script</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <img src={Laravel} alt="Laravel" className="tech-icon-images" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
