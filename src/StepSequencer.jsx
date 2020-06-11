import React, { useState, useRef, useEffect } from "react";
import { Synth, Reverb, Delay } from "tone";
import { StepSequencer } from "./core/step-sequencer";
import { Transport } from "tone"

function StepSequencerUI() {
  const sequencerRef = useRef(null);
  const sequenceRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const initialise = () => {
    const sequencer = StepSequencer.Default();
    sequenceRef.current = sequencer.sequence();
    sequencerRef.current = sequencer;
    const synth = sequencer.connected();
    const reverb = new Reverb({decay: 1, wet: 0.9}).toMaster();
    const delay = new Delay("1n").toMaster();
    reverb.connect(delay)
    synth.connect(reverb);
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
      sequenceRef.current.start(0);
      Transport.start();
    } else {

      Transport.stop()
      if(sequenceRef.current)
        sequenceRef.current.stop(0);
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={toggleStart}>{isPlaying ? "stop ||" : "play |>"}</button>
    </div>
  );
}

export default StepSequencerUI;
