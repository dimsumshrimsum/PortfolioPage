function ListSkills({ source, alt }) {
  return (
    <div className="col-md-2 col-sm-4 col-4 gy-4 gx-4">
      <img
        src={source}
        alt={alt}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={alt}
      />
    </div>
  );
}

export default ListSkills;
