import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Jhon Christian Bucio</span>{" "}
            from <span className="purple">Malaybalay City, Philippines</span>.
            <br />
            <br />
            I'm a <span className="purple">Full Stack Developer</span> currently
            working at <span className="purple">Sagelyn AI</span>, where I build{" "}
            <span className="purple">AI-powered web applications</span> using
            Next.js, React, TypeScript, Python, AWS, and Amazon Bedrock/OpenAI.
            I enjoy learning new technologies, solving challenging problems, and
            using <span className="purple">AI to build products faster</span> and
            more efficiently.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired.
          </p>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 🍿
            </li>
          </ul>


          <p style={{ color: "var(--accent)" }}>
            "The obstacle is the way."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
