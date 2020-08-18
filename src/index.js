var bpm = 120
var toque = 1000/bpm*60
var quarta = toque/4
var list = document.querySelector('div')
var pause = false
// var kick = document.getElementById('kick')
// var hihat = document.getElementById('hihat')
var batidaList = []
Tone.start()

class batida {
    constructor(tempo, somText, adianto = 0) {
        this.tempo = tempo
        this.batida = 0 + adianto
        this.somText = somText
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
            if (batida == 1) {
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
            if (this.batida == 1) {
                kick()
            }
            this.draw(this.batida)
        }
        
    }
}


var um = new batida(4, "kick")
var dois = new batida(4, "kick", 1)
var tres = new batida(4, "kick", 2)

batidaList.push(um,dois,tres)
function loop() {

    if (!pause) {
        for (const batida in batidaList) {
            batidaList[batida].update()
        }
    }
    setTimeout(loop, quarta)
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


function kick() {
    
    var noiseSynth = new Tone.NoiseSynth().toDestination();
    noiseSynth.triggerAttackRelease("8n");
    }