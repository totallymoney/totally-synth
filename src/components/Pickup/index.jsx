import React from 'react';
import styled from 'styled-components'

import { Slider } from '../ControlButtons/'
import PkupButton from '../PkupButton';
import { SliderContainer } from '../ControlButtons/RegularSlider';

const Table = styled.div`
  margin: 0 auto;
  background-color: #333;
  width: 800px;
  height: 400px;
`

const TableLine = styled.div`
  width: 100%;
  height: 100px;
`

const TableControl = styled.div`
  width: 100%;
  height: 100px;
`


function Pickup() {
  return (
    <Table>
      <TableLine>
        <PkupButton color="cyan" size="50"/>
        <PkupButton color="cyan" size="50"/>
        <PkupButton color="cyan" size="50"/>
      </TableLine>
      <TableControl>
        <Slider type="regular" name="Volume"/>
        <Slider type="round" name="Gain"/>
      </TableControl>
    </Table>
  );
}

export default Pickup;
