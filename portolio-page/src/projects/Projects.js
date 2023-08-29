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
    name: "Decoder Ring",
    description:
      "An application that encodes and decodes messages employing three different iconic ciphers.",
    image:
      "https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/cf6c9b03-a3fe-4266-686e-d35c7483a000/public",
    view: "https://dimsumshrimsum.github.io/Decoder-Ring/",
    code: "https://github.com/dimsumshrimsum/Decoder-Ring",
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
