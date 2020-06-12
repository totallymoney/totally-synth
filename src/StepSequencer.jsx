import React, { useState, useRef, useEffect } from "react";
import { Reverb, Delay } from "tone";
import { StepSequencer } from "./core/step-sequencer";
import { Transport } from "tone";
import Pickup from "./components/Pickup";
import Button from "./components/ControlButtons/RegularButton";
import { SliderRegular } from "./components/ControlButtons";

function StepSequencerUI({ children }) {
  const sequencerRef = useRef(null);
  const sequenceRef = useRef(null);
  const reverbRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const initialise = () => {
    const sequencer = StepSequencer.Default();
    sequenceRef.current = sequencer.sequence();
    sequencer.registerOnTickFunction(handleOnTick);
    sequencerRef.current = sequencer;
    const synth = sequencer.connected();
    const reverb = new Reverb({ decay: 10, wet: 0.5 }).toMaster();
    reverbRef.current = reverb;
    synth.connect(reverbRef.current);
  };

  const setReverbWetness = (wet) => {
    if (!!reverbRef.current) reverbRef.current.wet.set({ value: wet });
  };

  const handleCellClick = (step, note, velocity) => {
    if (!isPlaying) {
      toggleStart();
    }
    sequencerRef.current.setCell(step, note, velocity);
  };

  const handleOnTick = (_, step) => {
    setCurrentStep(step);
  };

  const scaleKeys = [ "pretty", "dark" ];
  const scales = [
    {
      pretty : [
        "C7",
        "D6",
        "E6",
        "G5",
        "A5",
        "C5",
        "D4",
        "E4",
        "G3",
        "A3",
        "C3",
        "A2",
      ],
      dark: [
        "C7",
        "D6",
        "D#6",
        "G5",
        "B5",
        "C5",
        "D4",
        "D#4",
        "G3",
        "B3",
        "C3",
        "B2",
      ],
    },
  ];

  const handleChangeScale = (scale) => {
    if(sequencerRef.current)
      sequencerRef.current.setNotes(scales[scale]);
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
      Transport.stop();
      if (sequenceRef.current) sequenceRef.current.stop(0);
    }
  }, [isPlaying]);

  return (
    <div>
      <Pickup
        setCell={handleCellClick}
        currentStep={currentStep}
        isPlaying={{ setIsPlaying: setIsPlaying, isPlaying: isPlaying }}
        setReverbWetness={setReverbWetness}
        handleChangeScale={handleChangeScale}
        scaleKeys={scaleKeys}
      >
      {children}
      </Pickup>
    </div>
  );
}

export default StepSequencerUI;
