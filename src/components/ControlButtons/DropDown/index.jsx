import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
   background-color: #7c909c;
  padding: 16px 8px;
  border-radius: 2px;
  margin: 1px;
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
      <label htmlFor="drop">Choose:</label>
      <select name="drop" id="drop" onChange={(e) => setValue(e.target.value)} value={value}>
        {
          list.map((item, idx) => <option key={idx} value={item}>{item}</option>)
        }
      </select>
    </Container>
  )
}


export default DropDown