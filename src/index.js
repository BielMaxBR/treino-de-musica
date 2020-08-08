var bpm = 60
var canvas = document.getElementById("canvas")
var ms

function loop() {
    ms = 1000/bpm*60
    console.log("tunts")
    draw()
    setTimeout(loop, ms)
}

function draw() {
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#fff"
    ctx.fillRect(10,10,30,30)
    setTimeout(()=>{
        ctx.clearRect(0,0,450,50)
    }, ms/4)
}

loop()