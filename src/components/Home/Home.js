import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import Timeline from "../Experience/Timeline";
import Reveal from "../Reveal";
import CountUp from "../CountUp";
import { profile, highlights } from "../../data/resume";

function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-orb hero-orb-1" aria-hidden="true" />
        <span className="hero-orb hero-orb-2" aria-hidden="true" />
        <Container className="narrow hero-inner">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">{profile.location}</p>
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-title">
                {profile.title} <span className="muted">{profile.tagline}</span>
              </p>
              <div className="hero-type">
                <span className="hero-type-prompt">I build</span>
                <Typewriter
                  component="span"
                  options={{
                    strings: profile.builds,
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 20,
                    pauseFor: 1800,
                  }}
                />
              </div>
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
            </div>

            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src={profile.photo}
                alt={profile.name}
                width="260"
                height="260"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="narrow">
          <Reveal className="stats">
            {highlights.map((h) => (
              <div className="stat" key={h.label}>
                <span className="stat-value">
                  <CountUp value={h.value} />
                </span>
                <span className="stat-label">{h.label}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container className="narrow">
          <Reveal className="section-head">
            <h2 className="section-title">Experience</h2>
            <Link to="/experience" className="text-link">
              Full details <HiArrowRight />
            </Link>
          </Reveal>
          <Timeline compact />
        </Container>
      </section>

      <section className="section">
        <Container className="narrow">
          <Reveal className="card-plain contact-card">
            <h2 className="section-title">Let's work together</h2>
            <p className="muted">
              Open to Senior Full-Stack / AI Engineer and founding-engineer
              roles at seed to Series A startups building AI products.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-accent">
              <AiOutlineMail /> {profile.email}
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default Home;
