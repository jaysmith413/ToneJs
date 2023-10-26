

let buttons = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"];

buttons.forEach(element => {


const buttonEl = document.getElementById(element);

// create a synth
const synth = new Tone.Synth().toDestination();
    // play a note from that synth
    buttonEl.addEventListener('click', () => {
        if(Tone.context.state != "running") {
            Tone.start();
        }
        synth.triggerAttackRelease(element, "2n");
    });    
})
  