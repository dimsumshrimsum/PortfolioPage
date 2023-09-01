import "./NavBar.css";

function NavBar() {
  return (
    <ul className="nav justify-content-end navbar">
      <li className="nav-item">
        <a
          className="nav-link active navbar-text"
          aria-current="page"
          href="#home"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-text" href="#about">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-text" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-text" href="#skills">
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-text" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
