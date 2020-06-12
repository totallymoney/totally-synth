import React, { useState } from 'react';
import styled from 'styled-components'

import RoundSliderButton  from "./RoundSlider"
import RegularSlider  from "./RegularSlider"

import { ButtonDisplay } from "./styled-components"

const ButtonContainer = styled.div`
  background-color: #7c909c;
  padding: 16px 8px;
  border-radius: 2px;
  margin: 1px;
`

const ButtonContainerRound = styled(ButtonContainer)`
  width: 100px;
`

const ButtonContainerRegular = styled(ButtonContainer)`
  width: 160px;
`

const Heading = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
`

export const SliderRound = ({name='control', value, setValue}) => {
  return (
    <ButtonContainerRound>
      <Heading>{name}</Heading>
      <RoundSliderButton value={value} setValue={setValue}/>
      <ButtonDisplay value={value} onChange={e => setValue(e.target.value)}/>
    </ButtonContainerRound>
  )
}


export const SliderRegular = ({name='control', value, setValue}) => {

  const [ sliderValue, setSliderValue ] = useState(value);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setValue(value);
  }

  return (
    <ButtonContainerRegular>
      <Heading>{name}</Heading>
      <RegularSlider value={sliderValue} setValue={handleSliderChange}/>
      <ButtonDisplay value={sliderValue} onChange={e => handleSliderChange(e.target.value)}/>
    </ButtonContainerRegular>
  )
}
