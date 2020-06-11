import React from "react";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";

function App() {
  return (
    <div className="App">
      {/* <HandTrack
        onPositionChange={(position) =>
          console.log("Detected position: ", position)
        }
      /> */}
      <StepSequencer />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
