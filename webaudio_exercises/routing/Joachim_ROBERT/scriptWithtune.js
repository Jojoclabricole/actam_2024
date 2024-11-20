// const { Toine } = require("tone/build/esm/core/Tone");
import * as Tone from 'https://cdn.skypack.dev/tone';

const osc = new Tone.Oscillator();

let defaultG = createGain(10);
let currentLastG = defaultG;

osc.connect(defaultG);

defaultG.toMaster();

export function createGain(input) {
    return new Tone.Gain(input);
}


export function addNewGain(gainValue) {
    let gain = new Tone.Gain(gainValue);
    gain.toMaster()
    gain.chain(currentLastG);
    currentLastG = gain;
}

export function startOsc() {
    osc.start();
}

export function stopOsc() {
    osc.stop();
}


