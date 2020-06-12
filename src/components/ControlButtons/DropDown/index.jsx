import React, { useEffect, useState } from 'react'

/**
* @author
* @function DropDown
**/

const DropDown = ({list = ['one', 'two'], getDropdownValue}) => {

  const [value, setValue] = useState(null);

  useEffect(() => { 
    getDropdownValue(value) }
    , [value]);

  return(
    <div>
      <label for="drop">Choose:</label>
      <select name="drop" id="drop" onChange={(e) => setValue(e.target.value)} value={value}>
        {
          list.map(item => <option value={item}>{item}</option>)
        }
      </select>
    </div>
  )
}


export default DropDown