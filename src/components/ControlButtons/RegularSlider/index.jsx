import React, { useState } from 'react'
import styled from 'styled-components'

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 17px;
  margin: 10px 17px;
  background: linear-gradient(to right, #000 0%, #000 100%);
  background-size: 100px 5px;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 17px;
    height: 17px;
    background: #222;
    position: relative;
    border-radius: 50%;
    z-index: 3;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  }

  &::-webkit-slider-thumb:after {
    content: ' ';
    width: 100px;
    height: 10px;
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 5px;
    background: #000;
    background: linear-gradient(to right, #111 0%, #333 100%);
  }
`

const Slider = ({ value, setValue }) => (
  <div>
    <SliderInput
      type="range"
      min="0"
      max="1"
      step="0.05"
      value={value}
      className="slider"
      id="myRange"
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
)

export default Slider
