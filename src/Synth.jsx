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
    return () => oscRef.current.stop();
  }, [isPlaying]);

  useEffect(() => {
    if (oscRef.current) {
      oscRef.current.frequency.setTargetAtTime(
        frequency,
        oscRef.current.context.currentTime,
        0.01
      );
    }
  }, [frequency]);

  return null;
}

export default Synth;
