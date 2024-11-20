
let ac = new AudioContext();

let mainOsc = ac.createOscillator();

function initGains(array) {

    let initGain = createGain(1);
    mainOsc.connect(initGain);

    array.push(initGain);
    array[0].connect(ac.destination);

    return array;
}
let gains = initGains([]);

console.log(gains)
function addGain() {
    let newGain = createGain(1);
    gains[gains.length - 1].connect(newGain);
    newGain.connect(ac.destination)
    gains.push(newGain);

}

function createGain(defaultValue) {
    let gain = ac.createGain();
    gain.value = defaultValue;
    return gain
}
//
//


function changeGain(index, value) {
    gains[index].value = value;
}

function startOsc() {
    mainOsc.start();
}
function stopOsc() {
    mainOsc.stop();
}

