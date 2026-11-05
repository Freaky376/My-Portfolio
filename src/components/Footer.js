import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/resume";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="narrow footer-inner">
        <span className="muted">© {year} {profile.name}</span>
        <div className="footer-icons">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={profile.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <AiFillInstagram />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <AiOutlineMail />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
