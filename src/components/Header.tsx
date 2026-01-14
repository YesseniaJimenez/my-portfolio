import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo-geometric">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 8l-4 4l4 4"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 8l4 4l-4 4"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 4l-4 16"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#about">{t("nav.about")}</a>
          </li>
          <li>
            <a href="#lab">{t("nav.lab")}</a>
          </li>
          <li>
            <a href="#contact">{t("nav.contact")}</a>
          </li>
        </ul>
        <button className="language-toggle" onClick={toggleLanguage}>
          {currentLanguage === "en" ? "ES" : "EN"}
        </button>
      </div>
    </nav>
  );
}
