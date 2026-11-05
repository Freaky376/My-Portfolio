import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import dineflow from "../../Assets/Projects/Dineflow.png";
import tourgovph from "../../Assets/Projects/tourgovph.png";
import powerflow from "../../Assets/Projects/PowerFlow.png";
import unidorm from "../../Assets/Projects/Unidorm.png";
import buksutag from "../../Assets/Projects/BuksuTag.png";

const projects = [
  {
    imgPath: buksutag,
    title: "BuksuTag",
    description:
      "Capstone project: real-time GPS visitor monitoring on an interactive map with live video feeds. Chosen for patent filing.",
    tags: ["Laravel", "Socket.IO", "OpenLayers", "IoT"],
    ghLink: "https://github.com/Freaky376/buksutag.git",
  },
  {
    imgPath: tourgovph,
    title: "TourGovPH",
    description:
      "Subscription SaaS that lets municipalities launch their own tourism websites to showcase attractions, events and heritage.",
    tags: ["Laravel", "Multi-tenant SaaS"],
    ghLink: "https://github.com/Freaky376/tourgov_ph",
  },
  {
    imgPath: dineflow,
    title: "DineFlow",
    description:
      "Restaurant SaaS: owners spin up their own site and manage menus, orders and reservations with a real-time dashboard.",
    tags: ["Laravel", "Multi-tenant SaaS"],
    ghLink: "https://github.com/Freaky376/dineflow",
  },
  {
    imgPath: unidorm,
    title: "UniDorm",
    description:
      "Dormitory and boarding-house management: room assignments, tenant records, billing and maintenance requests.",
    tags: ["Laravel", "SaaS"],
    ghLink: "https://github.com/Freaky376/EasyStay-Solutions",
  },
  {
    imgPath: powerflow,
    title: "Power Flow",
    description:
      "Desktop app for power flow analysis using Gauss–Seidel or Newton–Raphson, with voltages, line flows and losses per bus.",
    tags: ["Python", "PyQt5"],
    ghLink: "https://github.com/Freaky376/Power-Flow-Software",
  },
];

function Projects() {
  return (
    <section className="page">
      <Container>
        <div className="narrow mx-auto">
          <p className="eyebrow">Projects</p>
          <h1 className="page-title">Side and client projects</h1>
          <p className="lead-text">
            Things I built outside my day job, from SaaS platforms to a
            patent-track capstone.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
