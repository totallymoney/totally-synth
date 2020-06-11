import React, { useState } from 'react';
import styled from 'styled-components'

import { CircleSlider } from "react-circle-slider";

const Control = styled(CircleSlider)``

const RoundButton = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div>
      <Control 
        value={value} 
        size={70} 
        knobRadius={10} 
        circleColor="black" 
        progressColor="rgba(0,0,0,0)"
        knobColor="#222" 
        onChange={ val => setValue(val) } 
      />
      <div>{value}</div>

      <Control 
        value={value2} 
        size={70} 
        knobRadius={10} 
        circleColor="black" 
        progressColor="rgba(0,0,0,0)"
        knobColor="#222" 
        onChange={ val => setValue2(val) } 
        max={5}
      />
      <div>{value2}</div>
    </div>
  );
}

export default RoundButton;
