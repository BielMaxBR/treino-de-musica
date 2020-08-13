var bpm = 120
var toque = 1000/bpm*60
var list = document.querySelector('div')

function batida(tempo) {

    this.tempo = tempo
    this.batida = 0 

    var quatro = document.createElement('canvas')

    quatro.id = 'canvas'
    quatro.width = this.tempo
    quatro.height = 1
    quatro.style = {"width": `${quatro.width*50}px`}
    list.appendChild(quatro)

    var ctx = quatro.getContext("2d")
    ctx.fillStyle = "#fff"

    this.draw = function(batida) {
        ctx.fillRect(batida-1,0,1,1)

    }

    this.update = function() {
        batida += 1
        if (batida > tempo){
            batida = 1
        }
        this.draw(batida)
    }

}

var quatro = new batida(4)
