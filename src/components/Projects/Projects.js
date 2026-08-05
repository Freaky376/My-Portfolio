import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dineflow from "../../Assets/Projects/Dineflow.png";
import tourgovph from "../../Assets/Projects/tourgovph.png";
import powerflow from "../../Assets/Projects/PowerFlow.png";
import unidorm from "../../Assets/Projects/Unidorm.png";
import buksutag from "../../Assets/Projects/BuksuTag.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourgovph}
              isBlog={false}
              title="TourGovPH"
              description="TourGovPH is a SaaS-based platform that allows municipalities to easily create and manage their own customizable tourism websites through a subscription system. It empowers local governments to showcase their attractions, events, and cultural heritage in an engaging, organized, and visually appealing way. With its user-friendly interface, TourGovPH helps promote tourism, attract more visitors, and support local businesses, ultimately driving sustainable economic growth for communities."
              ghLink="https://github.com/Freaky376/tourgov_ph"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerflow}
              isBlog={false}
              title="Power Flow"
              description="This PyQt5 app provides an interactive GUI for Power Flow Analysis using Gauss–Seidel or Newton–Raphson methods. Users input bus and line data, and the system computes voltages, line flows, and losses with power balance checks. Results appear in organized tabs, and features like a progress bar, theme toggle, and error handling make it ideal for teaching and network studies."
              ghLink="https://github.com/Freaky376/Power-Flow-Software"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unidorm}
              isBlog={false}
              title="Unidorm"
              description="UniDorm is a SaaS-based platform designed to simplify dormitory and boarding house management for schools, universities, and property owners. It provides an all-in-one system for handling room assignments, tenant records, billing, and maintenance requests with ease. Through its modern, user-friendly interface, administrators can efficiently manage occupancy and finances, while tenants enjoy a seamless online experience for applications and payments."
              ghLink="https://github.com/Freaky376/EasyStay-Solutions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dineflow}
              isBlog={false}
              title="DineFlow"
              description="DineFlow is a SaaS-based restaurant management platform that allows small café and restaurant owners to instantly create their own customizable websites through a subscription-based system. It helps owners efficiently manage menus, orders, and reservations all in one place. With real-time analytics and an intuitive dashboard, DineFlow empowers businesses to grow online and operate more efficiently."
              ghLink="https://github.com/Freaky376/dineflow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buksutag}
              isBlog={false}
              title="BuksuTag"
              description="BuksuTag is our capstone project, a real-time GPS monitoring system developed using Laravel, Socket.IO, and OpenLayers. It enables administrators to track live locations of visitors or personnel on an interactive map while integrating live video feeds for enhanced situational awareness. This innovative system was chosen to be part of the patenting process for its practical application in real-time monitoring and security management."
              ghLink="https://github.com/Freaky376/buksutag.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
