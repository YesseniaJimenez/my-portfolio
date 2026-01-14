import htmlIcon from "../assets/images/html-icon.png";
import cssIcon from "../assets/images/css-icon.png";
import jsIcon from "../assets/images/js-icon.png";
import tsIcon from "../assets/images/ts-icon.png";
import reactIcon from "../assets/images/react-icon.png";
import vueIcon from "../assets/images/vue-icon.png";
import nuxtIcon from "../assets/images/nuxt-js-icon.png";
import tailwindIcon from "../assets/images/tailwind-icon2.png";
import nodeIcon from "../assets/images/nodejs-icon2.jpg";
import expressIcon from "../assets/images/express-icon.png";
import adonisIcon from "../assets/images/adonisjs-icon.png";
import postgresIcon from "../assets/images/postgresql-icon.png";
import sqlIcon from "../assets/images/sql-icon3.png";
import mongoIcon from "../assets/images/mongodb2.svg";
import gitIcon from "../assets/images/git-icon.png";
import githubIcon from "../assets/images/github-icon.png";
import postmanIcon from "../assets/images/postman-icon.png";
import figmaIcon from "../assets/images/figma-icon.png";

interface SkillItem {
  name: string;
  icon: string;
  alt: string;
}

interface SkillCategory {
  id: number;
  title: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "skills.languages",
    skills: [
      { name: "HTML", icon: htmlIcon, alt: "HTML" },
      { name: "CSS", icon: cssIcon, alt: "CSS" },
      { name: "JavaScript", icon: jsIcon, alt: "JavaScript" },
      { name: "TypeScript", icon: tsIcon, alt: "TypeScript" },
    ],
  },
  {
    id: 2,
    title: "skills.frontend",
    skills: [
      { name: "React", icon: reactIcon, alt: "React" },
      { name: "Vue.js", icon: vueIcon, alt: "Vue.js" },
      { name: "Nuxt.js", icon: nuxtIcon, alt: "Nuxt.js" },
      { name: "Tailwind CSS", icon: tailwindIcon, alt: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    title: "skills.backend",
    skills: [
      { name: "Node.js", icon: nodeIcon, alt: "Node.js" },
      { name: "Express.js", icon: expressIcon, alt: "Express.js" },
      { name: "AdonisJS", icon: adonisIcon, alt: "AdonisJS" },
    ],
  },
  {
    id: 4,
    title: "skills.databases",
    skills: [
      { name: "PostgreSQL", icon: postgresIcon, alt: "PostgreSQL" },
      { name: "SQL", icon: sqlIcon, alt: "SQL" },
      { name: "MongoDB", icon: mongoIcon, alt: "MongoDB" },
    ],
  },
  {
    id: 5,
    title: "skills.tools",
    skills: [
      { name: "Git", icon: gitIcon, alt: "Git" },
      { name: "GitHub", icon: githubIcon, alt: "GitHub" },
      { name: "Postman", icon: postmanIcon, alt: "Postman" },
      { name: "Figma", icon: figmaIcon, alt: "Figma" },
    ],
  },
];

export default skillsData;
