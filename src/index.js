var bpm = 60
var canvas = document.getElementById("canvas")
var ms
var beatpos = 0

function loop() {
    ms = 1000/bpm*60
    console.log("tunts")
    draw()
    beat()
    setTimeout(loop, ms)
}

function beat() {
    beatpos +=1
    if (beatpos == 4) {
        beatpos = 0
    }
}

function draw() {
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#fff"
    ctx.clearRect(0,0,4,4)
    ctx.fillRect(beatpos,0,1,1)

}

loop()