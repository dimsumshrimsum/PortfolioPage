import Carosaul from "./Carosaul";
import AboutMe from "../aboutMe/AboutMe";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import ContactForm from "../contactForm/ContactForm";
import Socials from "../socials/Socials";
function Home() {
  const extraSpace = {
    height: "200px",
  };

  const stickyBar = {
    position: "sticky",
    top: "0",
    zIndex: "1",
  };

  return (
    <div className="container">
      <div className="row align-items-center" style={extraSpace}></div>

      <div className="row mt-4 mb-5 justify-content-center">
        <div className="col-md-6 mx-auto">
          <h6>
            <span className="text-muted">Hello, my name is</span>
          </h6>
          <h1 className="display-1">Zach Robles</h1>
          <h6>
            <span className="text-muted">I'm a</span>
          </h6>
          <h3 className="display-3">Full Stack Developer</h3>
          <h3>Currently in the Greater DC Metropolotan area</h3>
        </div>
        <div className="col-md-6 mx-auto">
          <Carosaul />
        </div>
      </div>
      <div className="row align-items-center" style={extraSpace}></div>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col mx-auto">
          <AboutMe />
        </div>
      </div>
      <div className="row align-items-center" style={extraSpace}></div>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col-md-8 mx-auto">
          <Projects />
        </div>
      </div>
      <div className="row align-items-center" style={extraSpace}></div>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col-md-8 mx-auto">
          <Skills />
        </div>
      </div>
      <div className="row align-items-center" style={extraSpace}></div>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col-md-8 mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
