import { Sequence, PolySynth } from "tone";
import {
  Instrument,
  InstrumentOptions,
} from "tone/build/esm/instrument/Instrument";

class StepSequencer {
  private grid: SequencerGrid;

  private loopInterval: string;

  private instrument: Instrument<InstrumentOptions> | undefined;

  constructor(steps: number) {
    this.grid = new SequencerGrid(steps);
    this.loopInterval = steps + "n"; //sets the loop interval to be X whole notes.
  }

  setCell = (step: number, note: number, velocity: number) => {
    this.grid.setCell(step, note, velocity);
  };

  connect = (instrument: Instrument<InstrumentOptions>) => {
    this.instrument = instrument;
  };

  connected = () => this.instrument;

  sequence = () => {
    const fun = (_time: any, step: number) => {
      const stepNotes = this.grid.getStep(step);
      stepNotes.forEach((note) => {
        if (note.velocity > 0) {
          if (this.instrument instanceof Instrument)
            this.instrument.triggerAttackRelease(
              note.pitch,
              "16n",
              _time,
              note.velocity
            );
        }
      });
    };
    const steps = [];
    for (let s = 0; s < this.grid.steps; s++) {
      steps.push(s);
    }

    return new Sequence(fun, steps, this.loopInterval);
  };

  //Output a default step sequencer with a synth
  static Default = () => {
    const sequencer = new StepSequencer(16);
    const synth = new PolySynth();
    sequencer.connect(synth);
    return sequencer;
  };
}

class SequencerGrid {
  steps: number;

  constructor(steps: number) {
    this.steps = steps;
    this.grid = [];
    this.init();
  }

  init = () => {
    this.grid = [];
    for (let s = 0; s < this.steps; s++) {
      const cells = [];
      for (let c = 0; c < 12; c++)
        cells.push(new SequencerCell(this.notes[c], 0));
      this.grid.push(cells);
    }
  };

  notes = [
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
  ];

  getStep = (step: number) => {
    return this.grid[step];
  };

  setCell = (step: number, note: number, velocity: number) => {
    this.grid[step][note].velocity = velocity;
    this.grid[step][note].pitch = this.notes[note];
  };

  grid: SequencerCell[][];
}

class SequencerCell {
  velocity: number;
  pitch: string;

  constructor(pitch: string, velocity: number) {
    this.pitch = pitch;
    this.velocity = velocity;
  }
}

export { StepSequencer };
