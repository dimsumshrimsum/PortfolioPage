import "./Socials.css";

function Socials() {
  return (
    <div className="socials-container">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/zacharyrobles/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin social-icon"></i>
        </a>
        <a
          href="https://github.com/dimsumshrimsum"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-github social-icon"></i>
        </a>
        <a href="mailto:zrobles1188@gmail.com">
          <i class="bi bi-envelope-at-fill social-icon"></i>
        </a>
        <a
          href="/downloads/ZachRoblesSoftwareEng.pdf"
          download="ZachRoblesResume.pdf"
        >
          <i class="bi bi-file-earmark-person-fill social-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;
