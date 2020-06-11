import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.active ? props.color : props.color };
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`

const PkupButton:React.FC<{color: string}> = ({color}) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <Button color={color} active={isActive} onclick={() => setIsActive(!isActive)}/>
  );
}

export default PkupButton;
