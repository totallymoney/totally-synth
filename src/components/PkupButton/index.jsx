import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.color };
  opacity: ${props => props.isActive ? 0.4 : 1 };
  width: ${props => `${props.size}px`};
  height:${props => `${props.size}px`};
  border: none;
  outline:none;
  border-radius: 4px;
  cursor: pointer;
`

const PkupButton = ({color, size=30}) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <Button color={color} isActive={isActive} size={size} onClick={() => setIsActive(!isActive)}/>
  );
}

export default PkupButton;
