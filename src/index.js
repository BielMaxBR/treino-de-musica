var bpm = 120
var toque = 1000/bpm*60
var quarta = toque/4
var list = document.querySelector('div')
var kick = document.getElementById('kick')
var hihat = document.getElementById('hihat')
var batidaList = []
var pause = false
class batida {
    constructor(tempo, somText) {
        this.tempo = tempo
        this.batida = 0
        this.somText = somText
        if (this.som == "kick") {
            var som = kick
        }
        if (this.som == "hihat") {
            var som = hihat
        }
        var quatro = document.createElement('canvas')
        quatro.id = 'canvas'
        quatro.width = this.tempo
        quatro.height = 1
        quatro.style = { "width": `${quatro.width * 50}px` }
        list.appendChild(quatro)
        var ctx = quatro.getContext("2d")
        ctx.fillStyle = "#fff"
        this.draw = function (batida) {
            ctx.clearRect(0, 0, tempo, 1)
            ctx.fillRect(batida - 1, 0, 1, 1)
        }
        this.update = function () {
            this.batida += 1
            if (this.batida > this.tempo) {
                this.batida = 1
            }
            if (this.batida == 1) {
                som.stop()
                var promisse = som.play()
                if (promisse !== undefined) {
                    promisse.then(_ => {
                        // Autoplay started!
                    }).catch(error => {
                        // Autoplay was prevented.
                        // Show a "Play" button so that user can start playback.
                    })
                }
            }
            this.draw(this.batida)
        }

    }
}
var um = new batida(4, "kick")
batidaList.push(um)
function loop() {
    // console.log("life could be a dream")
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
