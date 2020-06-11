import React, { useState, useRef, useEffect } from "react";
import { Synth } from "tone";
import { StepSequencer } from "./core/step-sequencer";
import { Transport } from "tone"

function StepSequencerUI() {
  const sequencerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const initialise = () => {
    const sequencer = new StepSequencer(16);
    const synth = new Synth().toMaster();
    // test sound
    synth.triggerAttackRelease("C4", "8n");
    sequencer.connect(synth);
    sequencerRef.current = sequencer;

    // example sequence
    sequencerRef.current.setCell(0, 0, 1);
    sequencerRef.current.setCell(1, 1, 1);
    sequencerRef.current.setCell(2, 0, 1);
    sequencerRef.current.setCell(3, 1, 1);
    sequencerRef.current.setCell(4, 0, 1);
    sequencerRef.current.setCell(5, 1, 1);
    sequencerRef.current.setCell(6, 0, 1);
    sequencerRef.current.setCell(7, 1, 1);
    sequencerRef.current.setCell(8, 0, 1);
    sequencerRef.current.setCell(9, 1, 1);

  };

  const toggleStart = () => {
    if (sequencerRef.current == null) {
      initialise();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      console.log("playing sequence");
      sequencerRef.current.sequence().start(0);
      Transport.start();
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={toggleStart}>{isPlaying ? "stop ||" : "play |>"}</button>
    </div>
  );
}

export default StepSequencerUI;