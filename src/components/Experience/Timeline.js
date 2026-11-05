import React from "react";
import { experience } from "../../data/resume";
import Achievement from "../../Assets/Internship/Achievement.png";
import Completion from "../../Assets/Internship/Completion.png";

function Timeline({ compact = false }) {
  return (
    <ol className="timeline">
      {experience.map((job) => (
        <li className="timeline-item" key={job.company}>
          <div className="timeline-dot" />
          <div className="card-plain">
            <div className="job-header">
              <h3 className="job-company">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <span className="job-period">{job.period}</span>
            </div>
            <p className="job-about">{job.about}</p>

            {job.roles.map((role) => (
              <div className="job-role" key={role.title}>
                <div className="role-header">
                  <h4 className="role-title">{role.title}</h4>
                  {role.period && <span className="role-period">{role.period}</span>}
                </div>
                <ul className="role-items">
                  {(compact ? role.items.slice(0, 2) : role.items).map((item, i) => (
                    <li key={i}>
                      {item.label && <strong>{item.label}: </strong>}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="tags">
              {job.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            {job.certificates && !compact && (
              <div className="certificates">
                <figure>
                  <img src={Achievement} alt="Certificate of Achievement" />
                  <figcaption>Certificate of Achievement</figcaption>
                </figure>
                <figure>
                  <img src={Completion} alt="Certificate of Completion" />
                  <figcaption>Certificate of Completion</figcaption>
                </figure>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
