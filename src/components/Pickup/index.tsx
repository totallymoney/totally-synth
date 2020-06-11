import React from 'react';
import styled from 'styled-components'

import RoundButton from '../RoundButton'
import PkupButton from '../PkupButton';

const Table = styled.div`
  border: 1px solid;
  margin: 0 auto;

  width: 800px;
  height: 400px;
`

const TableLine = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100px;
`

const TableControl = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100px;
`



function Pickup() {
  return (
    <Table>
      <TableLine>
        <PkupButton color="cyan"/>
      </TableLine>
      <TableControl>
        <RoundButton />
      </TableControl>
    </Table>
  );
}

export default Pickup;
