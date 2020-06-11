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
  height: 100px;
`

const ButtonContainerRegular = styled(ButtonContainer)`
  width: 160px;
  height: 70px;
`

const Heading = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
`

export const SliderRound = ({name='control'}) => {
  const [value, setValue] = useState(0);

  return (
    <ButtonContainerRound>
      <Heading>{name}</Heading>
      <RoundSliderButton value={value} setValue={setValue}/>
      <ButtonDisplay value={value} onChange={e => setValue(e.target.value)}/>
    </ButtonContainerRound>
  )
}


export const SliderRegular = ({name='control'}) => {
  const [value, setValue] = useState(0);

  return (
    <ButtonContainerRegular>
      <Heading>{name}</Heading>
      <RegularSlider value={value} setValue={setValue}/>
      <ButtonDisplay value={value} onChange={e => setValue(e.target.value)}/>
    </ButtonContainerRegular>
  )
}
