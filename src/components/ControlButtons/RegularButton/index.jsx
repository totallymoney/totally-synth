import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
  margin: 1px;
  
`

const ButtonWrapper = styled.button`
  background-color: #7c909c;
  border-radius: 2px;
  border: 0;
  outline: none;
  padding: 16px;
  cursor: pointer;
  width: ${props=> props.size ? `${props.size}px` : 'auto'};

  font-size: 1.3em;
  font-family: 'Futura';
  font-weight: 600;

  color: ${props=> props.isActive ? 'cyan' : '#000'};
`

const Button = ({children="EFX", size}) => {
  const [isActive, setIsActive] = useState(false)
  return (
  <Container>
    <ButtonWrapper size={size} isActive={isActive} onClick={()=>setIsActive(!isActive)} >{children}</ButtonWrapper>
  </Container>
)};

export default Button

