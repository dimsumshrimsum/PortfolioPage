import ListSkills from "./ListSkills";
import { useEffect } from "react";
const bootstrap = require("bootstrap");
const skills = [
  {
    id: 1,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    id: 2,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "NodeJs",
  },
  {
    id: 3,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "Javascript",
  },
  {
    id: 4,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
  },
  {
    id: 5,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "Postgresql",
  },
  {
    id: 6,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "Github",
  },
  {
    id: 7,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    alt: "Bootstrap",
  },
  {
    id: 8,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    id: 9,
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
];

function Skills() {
  useEffect(() => {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
      new bootstrap.Tooltip(tooltip);
    });
  }, []);

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Skills</h1>
      </div>
      <div className="row justify-content-center">
        {skills.map((skill) => (
          <ListSkills key={skill.id} source={skill.source} alt={skill.alt} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
