import React, { useState } from "react";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";
import Synth from "./Synth";

import Pickup from "./components/Pickup";

function App() {
  const [isHandTrackingEnabled, setIsHandTrackingEnabled] = useState(false);
  const [position, setPosition] = useState();
  const handleHandPositionChange = (position) => {
    console.log("Detected position: ", position);
    setPosition(position);
  };
  return (
    <div className="App">
      <button onClick={() => setIsHandTrackingEnabled(!isHandTrackingEnabled)}>
        {isHandTrackingEnabled ? "disable" : "enable"} hand tracking
      </button>
      {isHandTrackingEnabled && (
        <HandTrack onPositionChange={handleHandPositionChange} />
      )}
      <Synth velocity={position} />
      <StepSequencer />
      {/* <Pickup /> */}
    </div>
  );
}

export default App;
