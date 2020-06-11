import React, { useState, useRef, useEffect } from "react";
import { Reverb, Delay } from "tone";
import { StepSequencer } from "./core/step-sequencer";
import { Transport } from "tone";
import Pickup from "./components/Pickup";
import Button from "./components/ControlButtons/RegularButton";
import { SliderRegular } from "./components/ControlButtons";

function StepSequencerUI() {
  const sequencerRef = useRef(null);
  const sequenceRef = useRef(null);
  const reverbRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ currentStep, setCurrentStep ] = useState(-1);
  const initialise = () => {
    const sequencer = StepSequencer.Default();
    sequenceRef.current = sequencer.sequence();
    sequencer.registerOnTickFunction(handleOnTick)
    sequencerRef.current = sequencer;
    const synth = sequencer.connected();
    const reverb = new Reverb({ decay: 5, wet: 0.5 }).toMaster();
    synth.connect(reverb);
    reverbRef.current = reverb;
  };

  const setReverbWetness = (wet) => {
    console.log("this happened ", wet)
    if(!!reverbRef.current)
      reverbRef.current.wet = wet;
  }

  const handleCellClick = (step, note, velocity) => {
    if (!isPlaying) {
      toggleStart();
    }
    sequencerRef.current.setCell(step, note, velocity);
  };

  const handleOnTick = (_,step)=> {
    setCurrentStep(step)
  }

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
<<<<<<< HEAD
      <Pickup setCell={handleCellClick} currentStep={currentStep} isPlaying={{setIsPlaying: setIsPlaying, isPlaying: isPlaying}}/>
=======
      <Pickup setCell={handleCellClick} currentStep={currentStep} />
      <SliderRegular name="Reverb" value={reverbRef.current?.wet} setValue={setReverbWetness}/>
>>>>>>> toggle reverb
    </div>
  );
}

export default StepSequencerUI;
