import React, { useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { SliderRound, SliderRegular } from "../ControlButtons/";
import PkupButton from "../PkupButton";
import Button from "../ControlButtons/RegularButton";

const Table = styled.div`
  margin: 0 auto;
  background-color: #333;
  width: 864px;
  height: 648px;
`;

const TableLine = styled.div`
  width: 100%;
`;

const TableControl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const emptyGrid = Array.apply(null, Array(16));
const emptyNotes = Array.apply(null, Array(12));

const color = d3.scaleSequential().domain([10,1]).interpolator(d3.interpolateViridis);

function Pickup({ setCell }) {
  const [grid, setGrid] = useState(() => emptyGrid.map(() => [...emptyNotes]));
  const toggleIsActive = (x, y) => {
    const newGrid = grid.map((notes) => [...notes]);
    newGrid[x][y] = !newGrid[x][y];
    setGrid(newGrid);
    setCell(x, y, newGrid[x][y]);
  };
  return (
    <Table>
      {emptyNotes.map((_, noteIndex) => (
        <TableLine>
          {emptyGrid.map((_, stepIndex) => (
            <PkupButton
              color={color(noteIndex)}
              size="40"
              isActive={grid[stepIndex][noteIndex]}
              step={stepIndex}
              note={noteIndex}
              handleClick={toggleIsActive}
            />
          ))}
        </TableLine>
      ))}

      <TableControl>
        <SliderRegular name="Volume" />
        <SliderRound name="Gain" />
        <Button />
      </TableControl>
    </Table>
  );
}

export default Pickup;
