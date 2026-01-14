import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="lab" className="projects">
      <div className="container">
        <h1 className="projects-title">{t("projects.title")}</h1>

        {projects.map((project) => (
          <div key={project.id} className="projects-showcase">
            <div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <img src={project.imageUrl} alt={project.imageAlt} />
                <div className="overlay">
                  <span>{t("projects.view")}</span>
                </div>
              </a>
            </div>

            <div>
              <p className="project-description">{t(project.descriptionKey)}</p>

              <div className="project-icons">
                {project.technologies.map((tech, index) => (
                  <div className="project-icon" key={index}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
