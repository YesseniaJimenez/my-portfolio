import skillsData from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="skills-intro">
          I'm currently looking to join a cross-functional team that values
          improving people's lives by contributing to meaningful initiatives and
          continuing to evolve as a developer.
        </p>

        <div className="skills-grid">
          {skillsData.map((category) => (
            <div className="skill-card" key={category.id}>
              <h3 className="card-title">{category.title}</h3>
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
