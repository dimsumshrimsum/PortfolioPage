import Carosaul from "./Carosaul";
import AboutMe from "../aboutMe/AboutMe";

function Home() {
  const extraSpace = {
    height: "200px",
  };

  return (
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-md-8 mx-auto">
          <h6>
            <span className="text-muted">Hello, my name is</span>
          </h6>
          <h1 className="display-1">Zach Robles</h1>
          <h2 className="display-3">Im a Full Stack Developer</h2>
          <h3>Currently in the Greater DC Metropolotan area</h3>
        </div>
      </div>
      <div className="row align-items-center" style={extraSpace}></div>
      <div className="row align-items-center">
        <div className="col-md-8 mx-auto">
          <Carosaul />
        </div>
      </div>
      <div className="row align-items-center" style={extraSpace}></div>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col-md-6 mx-auto">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default Home;
