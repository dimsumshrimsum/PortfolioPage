function ViewProjects({ name, description, image, view, code }) {
  return (
    <div className="col-md-5 gy-5 gx-5">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {description} </p>
          <div className="d-flex flex-column align-items-end">
            <div className="mt-auto">
              <a
                href={view}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
                style={{ marginRight: "8px" }}
              >
                View
              </a>

              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProjects;
