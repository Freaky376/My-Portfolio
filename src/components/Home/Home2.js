import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an <b className="purple">IT Instructor</b> and a{" "}
              <b className="purple">Web Developer</b> passionate about creating
              real-world solutions through technology. I love turning ideas into
              systems that make life easier — from managing cafés to tracking
              visitors and building SaaS applications.
              <br />
              <br />
              I work mainly with
              <i>
                <b className="purple">
                  {" "}
                  Laravel, JavaScript, Node.js, and React{" "}
                </b>
              </i>
              — blending backend logic with smooth, responsive frontends.
              <br />
              <br />
              Some of my projects include:
              <i>
                <b className="purple">
                  {" "}
                  a Apartment Finder SaaS, a Café Management System, and a
                  Real-Time Visitor Monitoring App (Our capstone project)
                </b>
              </i>
              {" "}that use technologies like{" "}
              <b className="purple">Socket.IO</b> and{" "}
              <b className="purple">OpenLayers</b> for live data tracking.
              <br />
              <br />
              I’m also passionate about{" "}
              <b className="purple">teaching cybersecurity</b> and helping
              students understand complex concepts in fun, practical ways.
              <br />
              <br />
              Whenever possible, I enjoy experimenting with{" "}
              <b className="purple">modern web tools</b> and building projects
              that connect people, data, and innovation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
