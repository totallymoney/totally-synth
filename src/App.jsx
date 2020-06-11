import React from "react";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";

import Pickup from "./components/Pickup";

function App() {
  return (
    <div className="App">
      {/* <HandTrack
        onPositionChange={(position) =>
          console.log("Detected position: ", position)
        }
      />
      <StepSequencer />
      <header className="App-header"></header> */}
      <Pickup />
    </div>
  );
}

export default App;
