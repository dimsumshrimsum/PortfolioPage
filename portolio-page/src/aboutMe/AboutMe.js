import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1>About Me</h1>
        <div className="col-md-8 d-flex align-items-center">
          <p className="text">
            I'm Zachary, but please feel free to call me Zach. I'm inspired by
            learning new things and coding supplies a limitless spring of new
            things to learn. Solving problems has always provided a unique
            degree of satisfaction, and the world of software development has
            given a level of tangibility to complex problems that has incited in
            me, a passion for coding. I've worked in customer service, I've
            worked in sales, I've driven forklifts and box trucks, I've built
            patios and delivered Appliances, all the while, one thing has been
            the same, I've loved being part of a team, I've loved reaching
            towards a common goal, and I've loved pushing myself. I may be new
            to the world of software development, but I am eager and excited to
            learn and grow as a developer. When I'm not coding I train Brazilian
            Jiu Jitsu and Rock Climb. I play a number of musical instruments, am
            an avid painter, and I also enjoy tabletop games.{" "}
            {/*I try to serve my
            community and I currently tutor local underserved spanish speaking
            3rd-6th graders.*/}{" "}
            I strive for a greater good in all that I do and I hope to bring
            that to the table as a developer.
          </p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img
            src="https://imagedelivery.net/Umg8ReSrPBwyC9Uh-9aekA/9a969ca6-ef5d-42f5-f505-86b040b0d000/public"
            alt="Zach Robles"
            className="img-fluid rounded-circle"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
