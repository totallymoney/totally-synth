import React from 'react'

import { CircleSlider } from 'react-circle-slider'

const RoundSlider = ({ value, setValue, min, max, step }) => {
  return (
    <CircleSlider
      value={value}
      size={70}
      stepSize={step}
      min={min}
      max={max}
      knobRadius={10}
      circleColor="black"
      progressColor="rgba(0,0,0,0)"
      knobColor="#222"
      onChange={(val) => setValue(val)}
    />
  )
}

export default RoundSlider
