var bpm = 120
var toque = 1000/bpm*60
var quarta = toque/4
var list = document.querySelector('div')
var musica = document.querySelector('audio')

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
        ctx.clearRect(0,0,tempo,1)
        ctx.fillRect(batida-1,0,1,1)

    }

    this.update = function() {
        this.batida += 1
        if (this.batida > this.tempo){
            this.batida = 1
        }

        if (this.batida == 1) {
            // this.sound()
            var promisse = musica.play()
            if (promisse !== undefined) {
            promisse.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
});
}
        }

        this.draw(this.batida)
    }

    // this.sound = function() {
    // }

}

var quatro = new batida(4)

function loop() {
    quatro.update()
    console.log("life could be a dream")
    setTimeout(loop, quarta)
}

function updateBPM(newBPM) {
    bpm = newBPM
    toque = 1000/bpm*60
    quarta = toque/4
}
loop()