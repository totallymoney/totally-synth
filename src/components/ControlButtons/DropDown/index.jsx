import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Heading } from "../styled-components"

const Container = styled.div`
  background-color: #7c909c;
  padding: 16px 8px;
  border-radius: 2px;
  margin: 1px;
  width: 120px;
`

const Select = styled.select`
  display: block;
  font-size: 1.2em;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  margin: 1.2em auto auto auto;
  border: 1px solid #aaa;
  border-radius: .2em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  position:relative;

  &::before {
    content: ">";
    position: absolute;
    top: 14px;
    right: 10px;
    width: 30px;
    height: 30px;
    border: 6px solid cyan;
    z-index:100;
    /* border-color: #fff transparent transparent transparent; */
  }
`

const Option = styled.option`
  border: 0;
  height: 30px;
`

/**
* @author
* @function DropDown
**/
const DropDown = ({list = ['one', 'two'], getDropdownValue}) => {

  const [value, setValue] = useState(list[0]);

  useEffect(() => { 
    getDropdownValue(value) }
    , [value]);

  return(
    <Container>
      <Heading>Choose:</Heading>
      <Select name="drop" id="drop" onChange={(e) => setValue(e.target.value)} value={value}>
        {
          list.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
        }
      </Select>
    </Container>
  )
}


export default DropDown