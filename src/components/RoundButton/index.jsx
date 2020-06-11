import React, { useState } from 'react';
import styled from 'styled-components'

import { CircleSlider } from "react-circle-slider";

const Box = styled.div`
`

const Control = styled(CircleSlider)`
  border: 1px solid!important;
`

const RoundButton = () => {
  const [value, setValue] = useState(0);

  return (
    <Box className="round">
      <Control 
        value={value} 
        size={50} 
        knobRadius={10} 
        circleColor="black" 
        progressColor="#222" 
        onChange={ val => setValue(val) } 
      />
      <div>{value}</div>
    </Box>
  );
}

export default RoundButton;
