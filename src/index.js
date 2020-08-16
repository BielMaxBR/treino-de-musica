var batidas = 32
var margem_de_erro = [-2,-1, 0, 1, 2]
var bpm = 120
var toque = 1000/bpm*60
var quarta = toque/4

var index = 1
function loop() {
    if (((index-1)%4) == 0 || ((index+1)%4) == 0 || ((index)%4) == 0) {
        console.log(index)
    }
    index++
    if (index>batidas) index = 1
    setTimeout(loop, quarta/2)
}