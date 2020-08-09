var bpm = 120
var toque = 1000/bpm*60
var list = document.querySelector('div')

function batida(tempo) {
    this.tempo = tempo
    this.createCanvas = function() {
        var quatro = document.createElement('canvas')
        quatro.id = 'canvas'
        quatro.width = this.tempo
        quatro.height = 1
        quatro.style = {"width": `${quatro.width*50}px`}
        list.appendChild(quatro)
        var ctx = quatro.getContext("2d")
        ctx.fillStyle = "#fff"
        
        for (var i = 0; i < this.tempo; i++) {
            if (i%2 == 0) {
                ctx.fillRect(i,0,1,1)
            }
        }

    }

    this.createCanvas()
}

var quatro = new batida(3)
quatro.tempo = 4
quatro.createCanvas()