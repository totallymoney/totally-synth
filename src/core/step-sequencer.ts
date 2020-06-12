import { Sequence, PolySynth, Synth } from "tone";
import {
  Instrument,
  InstrumentOptions,
} from "tone/build/esm/instrument/Instrument";
import { Tone } from "tone/build/esm/core/Tone";

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

  registerOnTickFunction = (fun: (time: any, step: number) => undefined) => {
    this.onTickEvents.push(fun);
  };

  private onTick = (_time: any, step: number) => {
    const stepNotes = this.grid.getStep(step);
    stepNotes.forEach((note) => {
      if (note.velocity > 0) {
        if (this.instrument instanceof Instrument)
          this.instrument.triggerAttackRelease(
            this.notes[note.pitch],
            "8n",
            _time,
            note.velocity
          );
      }
    });
  };

  private onTickEvents = [this.onTick];

  notes: string[] = [
    "C7",
    "D6",
    "E6",
    "G5",
    "A5",
    "C5",
    "D4",
    "E4",
    "G3",
    "A3",
    "C3",
    "A2",
  ];

  sequence = () => {
    const fun = (time: any, step: number) => {
      this.onTickEvents.forEach((f) => {
        f(time, step);
      });
    };
    const steps = [];
    for (let s = 0; s < this.grid.steps; s++) {
      steps.push(s);
    }
    return new Sequence(fun, steps, this.loopInterval);
  };

  setNotes = (notes: string[]) => {
    this.notes = notes;
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
      for (let c = 0; c < 12; c++) cells.push(new SequencerCell(c, 0));
      this.grid.push(cells);
    }
  };

  getStep = (step: number) => {
    return this.grid[step];
  };

  setCell = (step: number, note: number, velocity: number) => {
    this.grid[step][note].velocity = velocity;
    this.grid[step][note].pitch = note;
  };

  grid: SequencerCell[][];
}

class SequencerCell {
  velocity: number;
  pitch: number;

  constructor(pitch: number, velocity: number) {
    this.pitch = pitch;
    this.velocity = velocity;
  }
}

export { StepSequencer };
