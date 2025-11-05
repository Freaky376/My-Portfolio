import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jhon Christian Bucio</span>{" "}
            from <span className="purple">Malaybalay City, Philippines</span>.
            <br />
            <br />
            I’m currently working as an{" "}
            <span className="purple">IT Instructor</span> at{" "}
            <span className="purple">STI College Malaybalay</span>. With a background in{" "}
            <span className="purple">Information Technology</span>, I’m passionate about
            mentoring students and developing real-world projects in{" "}
            <span className="purple">Web Development</span>,{" "}
            <span className="purple">Database Management</span>, and{" "}
            <span className="purple">Cybersecurity Education</span>.
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


          <p style={{ color: "rgb(155 126 172)" }}>
            "The obstacle is the way."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
