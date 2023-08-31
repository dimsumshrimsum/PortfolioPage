import "./App.css";

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
      <Home />
    </div>
  );
}

export default App;
