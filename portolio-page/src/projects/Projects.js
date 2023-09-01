import ViewProjects from "./ViewProjects";

const projects = [
  {
    id: 1,
    name: "Restaurant Reservation System",
    description:
      "An application that allows making, editing, and seating reservations.",
    image:
      "https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/d09dc412-42c8-431a-b45e-3da14cdfbb00/public",
    view: "https://restaurant-reservation-frontend-wphd.onrender.com",
    code: "https://github.com/dimsumshrimsum/restaurant-reservation",
  },
  {
    id: 2,
    name: "The PokeDen",
    description:
      "An collaborative application that displays a variety of pokemon related info.",
    image:
      "https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/1bbf1c80-b52a-40c3-0a8d-e8f170103300/public",
    view: "https://github.com/codingWithAaron/The-PokeDen",
    code: "https://github.com/codingWithAaron/The-PokeDen",
  },
  {
    id: 3,
    name: "Flash Cards",
    description:
      "An application that allows users to create and edit flash cards.",
    image:
      "https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/6b97da19-a418-4fcc-c285-8e782dfbf700/public",
    view: "https://flashcards-77r4.onrender.com/",
    code: "https://github.com/dimsumshrimsum/FlashCards",
  },
  {
    id: 4,
    name: "We Love Movies",
    description:
      "An application that allows users to view morives and reviews.",
    image:
      "https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/b5a6f919-b73c-4418-0fca-d0fce9e7f700/public",
    view: "https://we-love-movies-front.onrender.com/theaters",
    code: "https://github.com/dimsumshrimsum/WeLoveMovies",
  },
  {
    id: 5,
    name: "Recipe Tracker",
    description:
      "An application that allows users to track and update recipes.",
    image:
      "https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/4a579725-5d5c-41b1-2ba5-25bf616d0b00/public",
    view: "https://recipe-tracker-j59p.onrender.com/",
    code: "https://github.com/dimsumshrimsum/recipe-tracker",
  },
  {
    id: 6,
    name: "Decoder Ring",
    description: "An application that encodes and decodes messages.",
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
