import React, { useRef, useEffect } from "react";
import CoreSequencer from "./core/step-sequencer";

// The step sequencer has 3 main functions:
// [ ] setCell: to set the cells on the sequencer
// [x] sequence: returns a new Tone.Sequence based on the grid
// when the sequence is played, it should  trigger notes on the synth

function StepSequencer() {
  const sequencerRef = useRef(null);
  const toggleStart = () =>
    sequencerRef.current && sequencerRef.current.sequence().start(0);

  // setup the sequencer
  useEffect(() => {
    sequencerRef.current = CoreSequencer.Default();
    sequencerRef.current.setCell(0, 0);
    sequencerRef.current.setCell(1, 1);
    sequencerRef.current.setCell(2, 2);
    sequencerRef.current.setCell(3, 3);
    sequencerRef.current.setCell(4, 4);
    sequencerRef.current.setCell(5, 5);
    sequencerRef.current.setCell(6, 6);
    sequencerRef.current.setCell(7, 7);
    sequencerRef.current.setCell(8, 8);
    sequencerRef.current.setCell(9, 9);
  }, []);

  return (
    <div>
      <button onClick={toggleStart}>start</button>
    </div>
  );
}

export default StepSequencer;
