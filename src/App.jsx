import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HandTrack from "./HandTrack";

function App() {
  return (
    <div className="App">
      <HandTrack
        onPositionChange={(position) =>
          console.log("Detected position: ", position)
        }
      />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
