import ViewProjects from "./ViewProjects";

const projects = [
  {
    id: 1,
    name: "Snowboard Lesson",
    description: "This is a snowboard lesson",
    image:
      "https://newtoski.com/wp-content/uploads/2022/07/snowboard-lesson-1.jpg",
    view: "https://www.google.com",
    code: "www.github.com",
  },
  {
    id: 2,
    name: "Snowboard Lesson",
    description: "This is a snowboard lesson",
    image:
      "https://newtoski.com/wp-content/uploads/2022/07/snowboard-lesson-1.jpg",
    view: "https://www.google.com",
    code: "www.github.com",
  },
  {
    id: 3,
    name: "Snowboard Lesson",
    description: "This is a snowboard lesson",
    image:
      "https://newtoski.com/wp-content/uploads/2022/07/snowboard-lesson-1.jpg",
    view: "https://www.google.com",
    code: "www.github.com",
  },
  {
    id: 4,
    name: "Snowboard Lesson",
    description: "This is a snowboard lesson",
    image:
      "https://newtoski.com/wp-content/uploads/2022/07/snowboard-lesson-1.jpg",
    view: "https://www.google.com",
    code: "www.github.com",
  },
  {
    id: 5,
    name: "Snowboard Lesson",
    description: "This is a snowboard lesson",
    image:
      "https://newtoski.com/wp-content/uploads/2022/07/snowboard-lesson-1.jpg",
    view: "https://www.google.com",
    code: "www.github.com",
  },
  {
    id: 6,
    name: "Snowboard Lesson",
    description: "This is a snowboard lesson",
    image:
      "https://newtoski.com/wp-content/uploads/2022/07/snowboard-lesson-1.jpg",
    view: "https://www.google.com",
    code: "www.github.com",
  },
];

function Projects() {
  return (
    <div>
      <div className="row text-center">
        <h1>Projects</h1>
      </div>

      <div className="row justify-content-center">
        {projects.map((project) => (
          <ViewProjects key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
