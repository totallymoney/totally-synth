import React from 'react';

import { CircleSlider } from "react-circle-slider";

const RoundSlider = ({value, setValue}) => {
  return (
    <CircleSlider 
      value={value} 
      size={70} 
      stepSize={0.05}
      min={0}
      max={1}
      knobRadius={10} 
      circleColor="black" 
      progressColor="rgba(0,0,0,0)"
      knobColor="#222" 
      onChange={ val => setValue(val) } 
    />
  );
}

export default RoundSlider