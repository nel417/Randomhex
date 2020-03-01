import React from "react";
import Container from "./Container";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1 className="Header"> /RandomHex/ </h1>
      <h3 className="Mission">A local option to find colors</h3>
      <p className="Sentence">
        My favorite coffee shop doesnt have WIFI and I dont want to hotspot and
        use my phones data, this solution works with a color picker tool from
        the google chrome store. when you click on the color without the color
        picker selected, it will change colors, there are lots of possibilities
        to choose from. Selecting colors without internet is now a breeze and I
        can have a more optimized creative workflow. App optimized for 13.3 inch
        screens on Chrome
      </p>
      <Container />
    </div>
  );
}

export default App;
