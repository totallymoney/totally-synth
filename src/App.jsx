import React from "react";
import "./App.css";
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
      <header className="App-header"></header> */}
      <Pickup />
    </div>
  );
}

export default App;
