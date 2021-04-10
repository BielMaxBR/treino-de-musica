let batidas = 32
let bpm = 120
let toque = 1000/bpm*60
let quarta = toque/4

let index = 1
function loop() {
  if ((index-1)%4 == 0 || (index)%4 == 0 ||(index+1)%4 == 0) {
    console.log(index)
  }
  index++
  
  if (index>batidas) index = 1
  setTimeout(loop, quarta/2)
}
