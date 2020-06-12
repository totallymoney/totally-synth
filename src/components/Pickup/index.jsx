import React, { useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { SliderRound, SliderRegular } from "../ControlButtons/";
import PkupButton from "../PkupButton";
import Button from "../ControlButtons/RegularButton";
import DropDown from "../ControlButtons/DropDown";
import SoundViz from "../SoundViz";

const Table = styled.div`
  margin: 0 auto;
  padding: 25px;
  background-color: #222629;
  width: 864px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TableLine = styled.div`
  width: 100%;
`;

const TablePanel = styled.div`
  padding-top: 2.4em;
  padding-bottom: 2.4em;
`;

const TableControl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-end;
  padding: 0.4rem;
  border: 1px solid #000;
  position: relative;
  
  &:after {
    content: " ";
    position: absolute;
    z-index: 1;
    top: 1px;
    left: -1px;
    right: 1px;
    bottom: -1px;
    border: 1px solid #444;
    pointer-events: none; /*This is the key.*/
  }
`;

const emptyGrid = Array.apply(null, Array(16));
const emptyNotes = Array.apply(null, Array(12));

const color = d3
  .scaleSequential()
  .domain([13, 1])
  .interpolator(d3.interpolateViridis);

/**
 *
 * @param {*} setCell
 * @param {*} currentStep
 * @param {*} isPlaying
 */
function Pickup({
  setCell,
  currentStep,
  isPlaying,
  setReverbWetness,
  handleChangeScale,
  children,
  scaleKeys
}) {
  const [grid, setGrid] = useState(() => emptyGrid.map(() => [...emptyNotes]));

  const toggleIsActive = (x, y) => {
    const newGrid = grid.map((notes) => [...notes]);
    newGrid[x][y] = !newGrid[x][y];
    setGrid(newGrid);
    setCell(x, y, newGrid[x][y]);
  };

  const getColor = (noteIndex, stepIndex) =>
    stepIndex === currentStep ? "cyan" : color(noteIndex);

  return (
    <Table>
      <TablePanel>
        {emptyNotes.map((_, noteIndex) => (
          <TableLine key={`line_${noteIndex}`}>
            {emptyGrid.map((_, stepIndex) => (
              <PkupButton
                key={`BTN_${stepIndex}`}
                color={getColor(noteIndex, stepIndex)}
                size="35"
                isActive={grid[stepIndex][noteIndex]}
                step={stepIndex}
                note={noteIndex}
                handleClick={toggleIsActive}
              />
            ))}
          </TableLine>
        ))}
      </TablePanel>
      <TableControl>
        <SliderRegular name="Volume" />
        <SliderRound name="Reverb" value={0.5} setValue={setReverbWetness} />
        <DropDown list={scaleKeys} getDropdownValue={handleChangeScale}/>
        {/* <Button isActive={isPlaying}>Play</Button> */}
        {children}
      </TableControl>
      <SoundViz />
    </Table>
  );
}

export default Pickup;
