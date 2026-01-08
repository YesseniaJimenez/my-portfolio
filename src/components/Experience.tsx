import { useState } from "react";
import experiences from "../data/experienceData";

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-grid">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className={`card-icon card-icon-${exp.id}`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d={exp.iconPath} fill={`url(#${exp.gradientId})`} />
                  <defs>
                    <linearGradient
                      id={exp.gradientId}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor={exp.gradientColors[0]} />
                      <stop offset="100%" stopColor={exp.gradientColors[1]} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="card-title">{exp.title}</h3>
              <p className="card-description">{exp.description}</p>
              {expandedCard === exp.id && (
                <p className="card-full-description">{exp.fulldescription}</p>
              )}
              <button
                type="button"
                className="card-button"
                onClick={() => {
                  toggleCard(exp.id);
                  console.log("clicked");
                }}
              >
                {expandedCard === exp.id ? "SHOW LESS" : "LEARN MORE"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
