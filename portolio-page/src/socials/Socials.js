import "./Socials.css";

function Socials() {
  return (
    <div className="socials-container ">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/zacharyrobles/"
          target="_blank"
          rel="noreferrer"
          className="social-icon-linkedIn"
        >
          <span className="text-icon">linkedin</span>
          <i className="bi bi-linkedin "></i>
        </a>
        <a
          href="https://github.com/dimsumshrimsum"
          target="_blank"
          rel="noreferrer"
          className="social-icon-github"
        >
          <span className="text-icon">github</span>
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:zrobles1188@gmail.com" className="social-icon-email">
          <span className="text-icon">email</span>
          <i className="bi bi-envelope-at-fill"></i>
        </a>
        <a
          href="/downloads/ZachRoblesSoftwareEngineer.pdf"
          download="ZachRoblesResume.pdf"
          className="social-icon-resume"
        >
          <span className="text-icon">resume</span>
          <i className="bi bi-file-earmark-person-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;
