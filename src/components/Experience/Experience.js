import React from "react";
import { Container } from "react-bootstrap";
import Timeline from "./Timeline";

function Experience() {
  return (
    <section className="page">
      <Container className="narrow">
        <p className="eyebrow">Experience</p>
        <h1 className="page-title">Where I've worked</h1>
        <p className="lead-text">
          From government data centers to leading engineering on an AI product
          used by small businesses.
        </p>
        <Timeline />
      </Container>
    </section>
  );
}

export default Experience;
