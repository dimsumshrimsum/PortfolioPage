import "./Socials.css";

function Socials() {
  return (
    <div className="button-bar">
      <h1> Socials </h1>
      <button className="button">
        <div className="row align-items-center">
          <div className="col-auto">linkedin</div>
          <div className="col-auto">
            <span>
              <i className="devicon-linkedin-plain"></i>
            </span>
          </div>
        </div>
      </button>
      <button className="button">
        <div className="row align-items-center">
          <div className="col-auto">GitHub</div>
          <div className="col-auto">
            <span>
              <i className="devicon-linkedin-plain"></i>
            </span>
          </div>
        </div>
      </button>
      <button className="button">
        <div className="row align-items-center">
          <div className="col-auto">Email</div>
          <div className="col-auto">
            <span>
              <i className="devicon-linkedin-plain"></i>
            </span>
          </div>
        </div>
      </button>
      <button className="button">
        <div className="row align-items-center">
          <div className="col-auto">Resume</div>
          <div className="col-auto">
            <span>
              <i className="devicon-linkedin-plain"></i>
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Socials;
