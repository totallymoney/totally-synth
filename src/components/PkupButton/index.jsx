import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.section`
  display: inline-block;
  padding: 2px;
`

const Button = styled.button`
  background-color: ${props => props.isActive ? props.color :  'rgba(255,255,255, 0)'};
  width: ${props => `${props.size}px`};
  height:${props => `${props.size}px`};
  border: 3px solid;
  border-color: ${props => props.color};
  outline:none;
  border-radius: 4px;
  cursor: pointer;
`

const PkupButton = ({color, size=30}) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <Container>
      <Button color={color} isActive={isActive} size={size} onClick={() => setIsActive(!isActive)}/>
    </Container>
  );
}

export default PkupButton;
