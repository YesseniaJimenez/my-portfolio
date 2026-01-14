import projectImage from "../assets/images/avatar2.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

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
          <h1 className="hero-name">{t("hero.hello")}</h1>
          <p className="hero-greeting">{t("hero.greeting")}</p>
          <h1 className="hero-name">Yessenia Jiménez</h1>
          <p className="hero-role">{t("hero.role")}</p>
        </div>
      </div>
    </section>
  );
}
