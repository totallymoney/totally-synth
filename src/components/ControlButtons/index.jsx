import React, { useState } from 'react';
import styled from 'styled-components'

import RoundSliderButton  from "./RoundSlider"
import RegularSlider  from "./RegularSlider"

import { ButtonDisplay } from "./styled-components"

const ButtonContainer = styled.div`
  background-color: #666;
  width: ${props=>props.type==='round' ? 100 : 160}px;
  padding: 16px 8px;
`

const Heading = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
`

export const Slider = ({name='control', type="round"}) => {
  const [value, setValue] = useState(0);

  return (
    <ButtonContainer type={type}>
      <Heading>{name}</Heading>
      { 
        type==="round" && (
          <>
            <RoundSliderButton value={value} setValue={setValue}/>
            <ButtonDisplay value={value} onChange={e => setValue(e.target.value)}/>
          </>
        )
      }
      { 
        type==="regular" && (
          <>
            <RegularSlider value={value} setValue={setValue}/>
            <ButtonDisplay value={value} onChange={e => setValue(e.target.value)}/>
          </>
        )
      }
    </ButtonContainer>
  )
}
