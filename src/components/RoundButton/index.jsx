import React, { useState } from 'react';
import styled from 'styled-components'

import { CircleSlider } from "react-circle-slider";

const Control = styled(CircleSlider)``

const ButtonContainer = styled.div`
  background-color: #666;
  width: 100px;
  
  padding: 16px 8px;
`

const ButtonDisplay = styled.input`
  width: 30px;
  background-color: transparent;
  border: 0;
  outline:none;
  text-align: center;
`

const heading = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
`

export const RoundButton = ({value, setValue}) => {
  return (
    <Control 
      value={value} 
      size={70} 
      knobRadius={10} 
      circleColor="black" 
      progressColor="rgba(0,0,0,0)"
      knobColor="#222" 
      onChange={ val => setValue(val) } 
    />
  );
}

export const RoundButtonExtended = ({name='control'}) => {
  const [value, setValue] = useState(0);

  return (
    <ButtonContainer>
      <heading>{name}</heading>
      <RoundButton value={value} setValue={setValue}/>
      <ButtonDisplay value={value} onChange={e => setValue(e.target.value)}/>
    </ButtonContainer>
  )
}
