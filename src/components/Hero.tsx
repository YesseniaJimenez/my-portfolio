import projectImage from "../assets/images/avatar2.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <div className="avatar-glow"></div>
          <div className="avatar-container">
            <img
              src={projectImage}
              alt="Yessenia Jiménez"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className="hero-text">
          <h1 className="hero-name">Hello World!</h1>
          <p className="hero-greeting">I am</p>
          <h1 className="hero-name">Yessenia Jiménez</h1>
          <p className="hero-role">
            A full stack developer who loves to code and create beautiful and
            functional web experiences
          </p>
        </div>
      </div>
    </section>
  );
}

