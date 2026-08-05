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
              I'm a <b className="purple">Full Stack Developer</b> currently
              working at <b className="purple">Sagelyn AI</b>, where I build
              AI-powered web applications that solve real problems.
              <br />
              <br />
              My core stack is{" "}
              <i>
                <b className="purple">
                  Next.js, React, TypeScript, Python, and AWS
                </b>
              </i>{" "}
              — from serverless Lambda backends and FastAPI services to clean,
              responsive frontends.
              <br />
              <br />
              A big part of my work involves{" "}
              <b className="purple">integrating LLMs</b> into production apps
              using <b className="purple">Amazon Bedrock</b> and{" "}
              <b className="purple">OpenAI</b> — building AI-assisted workflows,
              retrieval-augmented chat, and intelligent features that make
              products genuinely smarter.
              <br />
              <br />
              I also work with{" "}
              <b className="purple">GitHub Actions CI/CD</b>, REST APIs,
              webhooks, and{" "}
              <b className="purple">AWS infrastructure</b> (Lambda, API Gateway,
              DynamoDB) to ship and scale everything I build.
              <br />
              <br />
              I enjoy figuring things out independently, learning new
              technologies fast, and using{" "}
              <b className="purple">AI tools effectively</b> to build products
              faster and more efficiently.
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
