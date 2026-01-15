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
            <div className="project-card-left">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="project-image"
                />
                <div className="overlay">
                  <span>{t("projects.view")}</span>
                </div>
              </a>
              <p className="project-view-mobile">{t("projects.view")}</p>
            </div>

            <div className="project-card-right">
              <p className="project-description">{t(project.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
