import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";
import Synth from "./Synth";

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "cyan" : "#7c909c")};
  border-radius: 2px;
  border: 0;
  outline: none;
  padding: 16px;
  cursor: pointer;

  font-size: 1.3em;
  font-family: "Futura";
  font-weight: 600;

  color: #000;
`;

function App() {
  const [isThereminEnabled, setIsThereminEnabled] = useState(false);
  const [position, setPosition] = useState();
  const handleHandPositionChange = (position) => {
    console.log("Detected position: ", position);
    setPosition(position);
  };
  const frequencyFromPosition = position && position[2] > 0 ? position[2] : 0;

  return (
    <div className="App">
      <Synth isPlaying={isThereminEnabled} frequency={frequencyFromPosition} />
      <StepSequencer>
        <Button
          isActive={isThereminEnabled}
          onClick={() => setIsThereminEnabled(!isThereminEnabled)}
        >
          {isThereminEnabled ? "disable" : "enable"} theremin
        </Button>
        {isThereminEnabled && (
          <HandTrack
            onPositionChange={handleHandPositionChange}
            shouldRenderPredictions
          />
        )}
      </StepSequencer>
    </div>
  );
}

export default App;
