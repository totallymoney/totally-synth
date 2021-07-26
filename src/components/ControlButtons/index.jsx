import React, { useState } from 'react'
import styled from 'styled-components'

import RoundSliderButton from './RoundSlider'
import RegularSlider from './RegularSlider'

import { ButtonDisplay, Heading } from './styled-components'

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

export const SliderRound = ({
  name = 'control',
  value,
  setValue,
  min,
  max,
  step,
}) => {
  const [sliderValue, setSliderValue] = useState(value)

  const handleSliderChange = (value) => {
    setSliderValue(value)
    if (setValue) setValue(value)
  }

  return (
    <ButtonContainerRound>
      <Heading>{name}</Heading>
      <RoundSliderButton
        value={sliderValue}
        setValue={handleSliderChange}
        min={min}
        max={max}
        step={step}
      />
      <ButtonDisplay
        value={sliderValue}
        onChange={(e) => handleSliderChange(e.target.value)}
      />
    </ButtonContainerRound>
  )
}

export const SliderRegular = ({ name = 'control', value, setValue }) => {
  const [sliderValue, setSliderValue] = useState(value)

  const handleSliderChange = (value) => {
    setSliderValue(value)
    if (setValue) setValue(value)
  }

  return (
    <ButtonContainerRegular>
      <Heading>{name}</Heading>
      <RegularSlider value={sliderValue} setValue={handleSliderChange} />
      <ButtonDisplay
        value={sliderValue}
        onChange={(e) => handleSliderChange(e.target.value)}
      />
    </ButtonContainerRegular>
  )
}
