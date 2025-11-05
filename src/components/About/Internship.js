import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Achievement from "../../Assets/Internship/Achievement.png";
import Completion from "../../Assets/Internship/Completion.png";

function Internship() {
  return (
    <section className="internship-section">
      <div className="container mt-5">
        <h1 className="text-center mb-5 fw-bold purple">My Internship</h1>

        <div className="row justify-content-center g-4">
          {/* Certificate of Achievement */}
          <div className="col-md-6">
            <Card
              className="shadow-lg border-0 rounded-4 h-100 bg-transparent text-white"
              style={{
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="d-flex justify-content-center p-3">
                <Card.Img
                  variant="top"
                  src={Achievement}
                  alt="Certificate of Achievement"
                  className="rounded-3"
                  style={{
                    width: "75%",
                    height: "auto",
                    objectFit: "contain",
                    opacity: 0.9,
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold text-center text-uppercase mb-3 text-purple">
                  Certificate of Achievement
                </Card.Title>
                <Card.Text className="text-justify">
                  Awarded by the{" "}
                  <b>
                    Provincial Information and Communications Technology Division (PICTD)
                  </b>
                  , Province of Bukidnon, in recognition of my outstanding performance during
                  my <b>On-the-Job Training (OJT)</b> from{" "}
                  <b>January 31 to May 6, 2025</b>, completing a total of 490 hours.
                </Card.Text>
                <Card.Text>
                  <b>Key Contributions:</b>
                  <ul className="mt-2">
                    <li><ImPointRight /> Configured and managed Data Center infrastructure</li>
                    <li><ImPointRight /> Implemented 3-tier redundant network architecture</li>
                    <li><ImPointRight /> Developed dashboards and web applications</li>
                    <li><ImPointRight /> Maintained PGB website and CCTV systems</li>
                    <li><ImPointRight /> Assisted in cybersecurity setup and system administration</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Certificate of Completion */}
          <div className="col-md-6">
            <Card
              className="shadow-lg border-0 rounded-4 h-100 bg-transparent text-white"
              style={{
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="d-flex justify-content-center p-3">
                <Card.Img
                  variant="top"
                  src={Completion}
                  alt="Certificate of Completion"
                  className="rounded-3"
                  style={{
                    width: "75%",
                    height: "auto",
                    objectFit: "contain",
                    opacity: 0.9,
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold text-center text-uppercase mb-3 text-purple">
                  Certificate of Completion
                </Card.Title>
                <Card.Text className="text-justify">
                  Completed 490 hours of internship as a{" "}
                  <b>Bachelor of Science in Information Technology</b> student from{" "}
                  <b>Bukidnon State University</b>. The internship provided hands-on
                  experience in public sector ICT operations.
                </Card.Text>
                <Card.Text>
                  <b>Skills Gained:</b>
                  <ul className="mt-2">
                    <li><ImPointRight /> Server management and system maintenance</li>
                    <li><ImPointRight /> Network configuration and monitoring</li>
                    <li><ImPointRight /> Web development and content management</li>
                    <li><ImPointRight /> Technical support and documentation</li>
                  </ul>
                  These experiences strengthened my adaptability, collaboration, and
                  technical competence.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
