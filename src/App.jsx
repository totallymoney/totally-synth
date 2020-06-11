import React, { useState } from "react";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";

import Pickup from "./components/Pickup";

function App() {
  const [isHandTrackingEnabled, setIsHandTrackingEnabled] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsHandTrackingEnabled(!isHandTrackingEnabled)}>
        {isHandTrackingEnabled ? "disable" : "enable"} hand tracking
      </button>
      {isHandTrackingEnabled && (
        <HandTrack
          onPositionChange={(position) =>
            console.log("Detected position: ", position)
          }
        />
      )}
      <StepSequencer />
      {/* <Pickup /> */}
    </div>
  );
}

export default App;
