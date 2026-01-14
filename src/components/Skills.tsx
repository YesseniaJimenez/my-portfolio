import { useTranslation } from "react-i18next";
import skillsData from "../data/skillsData";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="skills-intro">{t("skills.intro")}</p>

        <div className="skills-grid">
          {skillsData.map((category) => (
            <div className="skill-card" key={category.id}>
              <h3 className="card-title">{t(category.title)}</h3>

              <div className="skill-icons-container">
                {category.skills.map((skill, index) => (
                  <div className="skill-icon-item" key={index}>
                    <img src={skill.icon} alt={skill.alt} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
