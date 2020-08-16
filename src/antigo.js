var bpm = 105
var toque = 1000/bpm*60
var quarta = toque/4
var list = document.querySelector('div')
var pause = true
// var kick = document.getElementById('kick')
// var hihat = document.getElementById('hihat')
var batidaList = []
if (Tone.context.state !== 'running') {
    Tone.context.resume();
    Tone.start()
}

class batida {
    constructor(tempo, somText, adianto = 0) {
        this.tempo = tempo
        this.batida = 0 + adianto
        this.somText = somText
        this.certo = false
        if (this.som == "kick") {
            // var som = kick
        }
        if (this.som == "hihat") {
            // var som = hihat
        }
        var quatro = document.createElement('canvas')
        quatro.id = 'canvas'
        quatro.width = this.tempo
        quatro.height = 1
        quatro.style = { "width": `${quatro.width * 50}px` }
        list.appendChild(quatro)
        var ctx = quatro.getContext("2d")
        
        this.draw = function (batida) {
            ctx.clearRect(0, 0, tempo, 1)
            if (this.certo) {
                ctx.fillStyle = "yellow"
                ctx.fillRect(0,0,tempo,1)
            }
            ctx.fillStyle = "#fff"
            ctx.fillRect(batida - 1, 0, 1, 1)
        }

        this.update = function () {
            this.batida += 1
            if (this.batida > this.tempo) {
                this.batida = 1
            }
            if (this.batida%2 != 0) {
                this.certo = true
                
                kick()
            } else {
                this.certo = false;
            }
            this.draw(this.batida)
            
        }
        
    }
}


var um = new batida(8, "kick")

batidaList.push(um)
function loop() {

    if (!pause) {
        for (const batida in batidaList) {
            batidaList[batida].update()
        }
    }
    setTimeout(loop, toque/2)
}

function updateBPM(newBPM) {
    bpm = newBPM
    toque = 1000/bpm*60
    quarta = toque/4
}
loop()

function fpause() {
    if (pause) {
        pause = false
    }
    else {pause = true}
}

function checkBeat() {
    if (batidaList[0].certo) {
        var noiseSynth = new Tone.NoiseSynth().toDestination();
        noiseSynth.triggerAttackRelease("8n");
        batidaList[0].certo = false
    }
}
function kick() {
    
    // var noiseSynth = new Tone.NoiseSynth().toDestination();
    // noiseSynth.triggerAttackRelease("8n");
    }
var apertado = false
document.addEventListener('keyup', (event)=>{
    if (event.code == "Space") {
        console.log("soltou")
        apertado = false
    }
})
document.addEventListener('keydown', (event)=>{
    if (event.code == "Space" && !apertado) {
        console.log("apertou")
        checkBeat()
        apertado = true
    }
    if (event.key.toLowerCase() == "q") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
    }
    else if (event.key.toLowerCase() == "w") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("D4", "8n");
    }
    else if (event.key.toLowerCase() == "e") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("E4", "8n");
    }
    else if (event.key.toLowerCase() == "r") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("F4", "8n");
    }
    else if (event.key.toLowerCase() == "t") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("G4", "8n");
    }
    else if (event.key.toLowerCase() == "y") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("A4", "8n");
    }
    else if (event.key.toLowerCase() == "u") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("B4", "8n");
    }
    else if (event.key.toLowerCase() == "i") {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C5", "8n");
    }
})
