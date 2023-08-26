function Carosaul() {
  return (
    <div id="caroLead" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/200/300"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/200/300"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/200/300"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#caroLead"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#caroLead"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}

export default Carosaul;
