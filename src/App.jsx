import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";
import Synth from "./Synth";
// import Button from "./components/ControlButtons/RegularButton"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

const Button = styled.button`
  background-color: #7c909c;
  border-radius: 2px;
  border: 0;
  outline: none;
  padding: 16px;
  cursor: pointer;
  width: ${(props) => (props.size ? `${props.size}px` : "auto")};

  margin-bottom: 2px;
  
  font-size: 1.3em;
  font-family: "Futura";
  font-weight: 600;

  color: ${(props) => (props.isActive ? "cyan" : "#000")};
`;

function App() {
  const [isThereminEnabled, setIsThereminEnabled] = useState(false);
  const [shouldRenderPredictions, setShouldRenderPredictions] = useState(false);
  const [position, setPosition] = useState();
  const handleHandPositionChange = (position) => {
    console.log("Detected position: ", position);
    setPosition(position);
  };
  const frequencyFromPosition =
    position && position[2] > 0 ? position[2] * 7 : 0;

  return (
    <div className="App">
      <h1>TotallySynth</h1>
      {isThereminEnabled && (
        <Synth
          isPlaying={isThereminEnabled}
          frequency={frequencyFromPosition}
        />
      )}
      <StepSequencer>
        <Container>
          <Button
            isActive={isThereminEnabled}
            onClick={() => setIsThereminEnabled(!isThereminEnabled)}
          >
            {isThereminEnabled ? "Disable" : "Enable"} Theremin
          </Button>
          {isThereminEnabled && (
            <Button
              isActive={shouldRenderPredictions}
              onClick={() =>
                setShouldRenderPredictions(!shouldRenderPredictions)
              }
            >
              {!shouldRenderPredictions ? "Show" : "Hide"} hand tracking
            </Button>
          )}
        </Container>
        <Container>
          {isThereminEnabled && (
            <HandTrack
              onPositionChange={handleHandPositionChange}
              shouldRenderPredictions={shouldRenderPredictions}
            />
          )}
        </Container>
      </StepSequencer>
    </div>
  );
}

export default App;
