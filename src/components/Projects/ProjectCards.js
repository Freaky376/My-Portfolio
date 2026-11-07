import React from "react";
import { BsGithub } from "react-icons/bs";
import Reveal from "../Reveal";

function ProjectCards({ imgPath, title, description, tags = [], ghLink, delay = 0 }) {
  return (
    <Reveal as="article" className="project-card card-plain" delay={delay}>
      <img src={imgPath} alt={title} className="project-img" />
      <h3 className="project-title">{title}</h3>
      <p className="muted">{description}</p>
      <div className="tags">
        {tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <a href={ghLink} target="_blank" rel="noreferrer" className="text-link project-link">
        <BsGithub /> View code
      </a>
    </Reveal>
  );
}

export default ProjectCards;
