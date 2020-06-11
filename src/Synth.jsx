import React, { useState, useRef, useEffect } from "react";
import { PolySynth } from "tone";
import { RoundButton } from "./components/RoundButton";

function Synth({}) {
  const synthRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [detune, setDetune] = useState(false);

  const initialise = () => {
    synthRef.current = new PolySynth().toMaster();
  };

  const toggleStart = () => {
    if (synthRef.current == null) {
      initialise();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (synthRef.current) {
      isPlaying
        ? synthRef.current.triggerAttack([440], undefined, 1)
        : synthRef.current.triggerRelease();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (synthRef.current) {
      debugger;

      synthRef.current && synthRef.current.set("detune", detune * 1000);
    }
  }, [detune]);

  useEffect(() => {
    setTimeout(() => {
      synthRef.current.set("detune", -1000);
    }, 3000);
    //   if (synthRef.current) {
    //     debugger;

    //     synthRef.current && synthRef.current.set("detune", detune * 1000);
    //   }
  }, []);

  return (
    <div>
      <RoundButton value={detune} setValue={setDetune} />
      <button onClick={toggleStart}>{isPlaying ? "stop ||" : "play |>"}</button>
    </div>
  );
}

export default Synth;
