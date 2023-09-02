import "./ViewProjects.css";

function ViewProjects({ name, description, image, view, code, id }) {
  return (
    <div className="col-md-5 gy-5 gx-5">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={`${name} landing page`}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {description} </p>
          {/* <div className="d-flex flex-column align-items-end"> */}
          <div className="mt-auto d-flex justify-content-end  ">
            <a
              href={view}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-responsive view-button code-text"
              style={{ marginRight: "8px" }}
            >
              View
            </a>

            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm  btn-responsive code-button code-text"
            >
              Code
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ViewProjects;
