import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section id="lab" className="projects">
      <div className="container">
        {projects.map((project) => (
          <div key={project.id}>
            <h1 className="projects-title">Projects</h1>

            <div
              className="projects-showcase"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  order: 1,
                }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    style={{
                      width: "100%",
                      maxWidth: "600px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <div className="overlay">
                    <span>Look the website in action</span>
                  </div>
                </a>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  order: 2,
                }}
              >
                <p className="project-description">{project.description}</p>
                <div className="project-icons">
                  {project.technologies.map((tech, index) => (
                    <div className="project-icon" key={index}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <style>{`
              @media (min-width: 768px) {
                .projects-showcase {
                  flex-direction: row !important;
                }
                .projects-showcase > div:first-child {
                  order: 2 !important;
                }
                .projects-showcase > div:last-child {
                  order: 1 !important;
                }
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}
