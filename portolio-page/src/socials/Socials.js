import "./Socials.css";

function Socials() {
  return (
    <div className="socials-container">
      <div className="socials">
        <a href="https://www.linkedin.com/in/zacharyrobles/">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/dimsumshrimsum">
          <i class="bi bi-github"></i>
        </a>
        <a href="mailto:zrobles1188@gmail.com">
          <i class="bi bi-envelope-at-fill"></i>
        </a>
        <a
          href="/downloads/ZachRoblesSoftwareEng.pdf"
          download="ZachRoblesResume.pdf"
        >
          <i class="bi bi-file-earmark-person-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;
