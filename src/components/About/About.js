import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import { profile, skills, languages, education } from "../../data/resume";

function About() {
  return (
    <section className="page">
      <Container className="narrow">
        <p className="eyebrow">About</p>
        <h1 className="page-title">A bit about me</h1>
        <p className="lead-text">{profile.summary}</p>
        <p className="muted">
          Outside of work I play guitar, game, and watch anime. A line I keep
          coming back to: <em>"The obstacle is the way."</em> (Marcus Aurelius)
        </p>

        <h2 className="section-title mt-section">Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill-row" key={s.group}>
              <span className="skill-group">{s.group}</span>
              <div className="tags">
                {s.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="skill-row">
            <span className="skill-group">Languages</span>
            <span className="muted">{languages}</span>
          </div>
        </div>

        <h2 className="section-title mt-section">Education</h2>
        <div className="card-plain">
          <div className="job-header">
            <h3 className="job-company">{education.degree}</h3>
            <span className="job-period">{education.period}</span>
          </div>
          <p className="job-about">{education.school}</p>
          <p className="muted mb-0">{education.note}</p>
        </div>

        <Github />
      </Container>
    </section>
  );
}

export default About;
