function Carosaul() {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/eb1c104d-7a79-4e78-b76d-75aec7ccf700/highresBackground"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Problem Solver</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/53422620-0424-4974-8fed-ddf93e131b00/highresBackground"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption  d-none d-md-block">
            <h5>Team Player</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/5a117d6f-1107-442d-389a-e91884ce6200/highresBackground"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Out of the box Thinker</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carosaul;
