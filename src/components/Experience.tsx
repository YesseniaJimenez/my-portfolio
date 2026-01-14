import { useState } from "react";
import { useTranslation } from "react-i18next";
import experiences from "../data/experienceData";

export default function Experience() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{t("experience.title")}</h2>

        <div className="experience-grid">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <h3 className="card-title">{t(exp.titleKey)}</h3>
              <p className="card-description">{t(exp.descriptionKey)}</p>

              {expandedCard === exp.id && (
                <p className="card-full-description">{t(exp.fullKey)}</p>
              )}

              <button
                type="button"
                className="card-button"
                onClick={() => toggleCard(exp.id)}
              >
                {expandedCard === exp.id
                  ? t("experience.showLess")
                  : t("experience.learnMore")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
