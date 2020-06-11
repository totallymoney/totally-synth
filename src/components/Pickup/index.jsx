import React from 'react';
import styled from 'styled-components'

import { SliderRound, SliderRegular } from '../ControlButtons/'
import PkupButton from '../PkupButton';
import Button from '../ControlButtons/RegularButton';

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
  height: auto;
  display: flex;
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
        <SliderRegular name="Volume"/>
        <SliderRound  name="Gain"/>
        <Button />
        <Button size={100}>REVERB</Button>
      </TableControl>
    </Table>
  );
}

export default Pickup;
