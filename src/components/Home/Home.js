import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Timeline from "../Experience/Timeline";
import { profile, highlights } from "../../data/resume";

function Home() {
  return (
    <>
      <section className="hero">
        <Container className="narrow">
          <p className="eyebrow">{profile.location}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">
            {profile.title} <span className="muted">· {profile.tagline}</span>
          </p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <Link to="/experience" className="btn-accent">
              View experience <HiArrowRight />
            </Link>
            <Link to="/resume" className="btn-ghost">
              Résumé
            </Link>
          </div>

          <div className="hero-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <AiFillGithub />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <AiOutlineMail />
            </a>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="narrow">
          <div className="stats">
            {highlights.map((h) => (
              <div className="stat" key={h.label}>
                <span className="stat-value">{h.value}</span>
                <span className="stat-label">{h.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="narrow">
          <div className="section-head">
            <h2 className="section-title">Experience</h2>
            <Link to="/experience" className="text-link">
              Full details <HiArrowRight />
            </Link>
          </div>
          <Timeline compact />
        </Container>
      </section>

      <section className="section">
        <Container className="narrow">
          <div className="card-plain contact-card">
            <h2 className="section-title">Let's work together</h2>
            <p className="muted">
              Open to conversations about engineering leadership, AI products
              and full-stack roles.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-accent">
              <AiOutlineMail /> {profile.email}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
