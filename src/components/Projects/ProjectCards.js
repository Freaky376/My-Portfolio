import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, tags = [], ghLink }) {
  return (
    <article className="project-card card-plain">
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
    </article>
  );
}

export default ProjectCards;
