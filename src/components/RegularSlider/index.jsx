import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  input[type="range"]{
    -webkit-appearance:none;
    width:160px;
    height:20px;
    margin:10px 50px;
    background: linear-gradient(to right, #111 0%, #333 100%);
    background-size:150px 10px;
    background-position:center;
    background-repeat:no-repeat;
    overflow:hidden;
    outline: none;
  }

  input[type="range"]:first-of-type{
    margin-top:30px;
  }

  input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance:none;
    width:15px;
    height:20px;
    background:#000;
    position:relative;
    z-index:3;
    box-shadow:0 0 5px 0 rgba(0,0,0,0.3);
  }

  input[type="range"]::-webkit-slider-thumb:after{
    content:" ";
    width:160px;
    height:10px;
    position:absolute;
    z-index:1;
    right:20px;
    top:5px;
    background: #000;
     background: linear-gradient(to right, #111 0%, #333 100%);
  } 
`



const RoundButton = () => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <input type="range" min="1" max="100" value={value} class="slider" id="myRange" onChange={(e)=> setValue(e.target.value)}/>
    </Container>
  );
}

export default RoundButton;
