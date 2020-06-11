import React from 'react';
import styled from 'styled-components'

import { RoundButton, RoundButtonExtended } from '../RoundButton'
import PkupButton from '../PkupButton';
import RegularSlider from '../RegularSlider';

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
        <RoundButtonExtended />
        <RegularSlider />
      </TableControl>
    </Table>
  );
}

export default Pickup;
