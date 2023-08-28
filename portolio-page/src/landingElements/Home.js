import Carosaul from "./Carosaul";

function Home() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <h1>Zach Robles</h1>
        <h2>Software Engineer</h2>
        <h3>Full Stack Developer</h3>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 mx-auto">
          <Carosaul />
        </div>
      </div>
    </div>
  );
}

export default Home;
