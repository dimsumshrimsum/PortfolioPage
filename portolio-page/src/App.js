import "./App.css";
import Socials from "./socials/Socials";
import Home from "./landingElements/Home";
function App() {
  const stickyBar = {
    position: "sticky",
    top: "0",
    zIndex: "1",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };
  return (
    <div className="App">
      {/* <div style={stickyBar}>
        <Socials />
      </div> */}
      <Home />
    </div>
  );
}

export default App;
