import React, { useState, useRef, useEffect } from "react";
import { Oscillator } from "tone";

function Synth({ frequency, velocity, isPlaying }) {
  const oscRef = useRef(null);

  const initialise = () => {
    oscRef.current = new Oscillator(440, "sine").toMaster();
  };

  useEffect(() => {
    initialise();
    isPlaying ? oscRef.current.start() : oscRef.current.stop();
  }, [isPlaying]);

  useEffect(() => {
    if (oscRef.current) {
      oscRef.current.frequency.value = frequency;
    }
  }, [frequency]);

  return null;
}

export default Synth;
