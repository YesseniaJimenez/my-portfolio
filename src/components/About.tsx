import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-title">{t("about.title")}</h2>
        <div className="about-content">
          <p className="about-current">{t("about.text")}</p>
        </div>
      </div>
    </section>
  );
}
